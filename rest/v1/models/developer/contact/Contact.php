<?php

class Contact
{
    public $contact_aid;
    public $contact_fullname;
    public $contact_email;
    public $contact_message;
    public $contact_created;
    public $contact_updated;

    public $connection;
    public $lastInsertedId;

    public $tblContact;

    //when this file is used run this function
    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblContact = 'my_app_contact';
    }
      public function readAll()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= "{$this->tblContact} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function create()
    {
        try {
            $sql = "insert into {$this->tblContact} ( ";
            $sql .= "contact_fullname, ";
            $sql .= "contact_email, ";
            $sql .= "contact_message, ";
            $sql .= "contact_created, ";
            $sql .= "contact_updated ) values ( ";
            $sql .= ":contact_fullname, ";
            $sql .= ":contact_email, ";
            $sql .= ":contact_message, ";
            $sql .= ":contact_created, ";
            $sql .= ":contact_updated ) ";

            $query = $this->connection->prepare($sql); //to ready the query
            $query->execute([
                "contact_fullname" => $this->contact_fullname,
                "contact_email" => $this->contact_email,
                "contact_message" => $this->contact_message,
                "contact_created" => $this->contact_created,
                "contact_updated" => $this->contact_updated
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
     public function update()
    {
        try {
            $sql = "update {$this->tblContact} set ";
            $sql .= "contact_fullname = :contact_fullname, ";     
            $sql .= "contact_email = :contact_email, ";
            $sql .= "contact_message = :contact_message, ";
            $sql .= "contact_updated = :contact_updated ";
            $sql .= "where contact_aid = :contact_aid";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_fullname" => $this->contact_fullname,
                "contact_email" => $this->contact_email, 
                "contact_message" => $this->contact_message, 
                "contact_updated" => $this->contact_updated,
                "contact_aid" => $this->contact_aid
            ]);
        } catch (PDOException $ex) {
            // returnError($ex);
            $query = false;
        }
        return $query;
    }
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblContact} ";
            $sql .= "where contact_aid = :contact_aid";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_aid" => $this->contact_aid,
            ]);
        } catch (PDOException $ex) {
            returnError($ex);
            $query = false;
        }
        return $query;
    }

     public function checkName()
    {
        try {
            $sql = "select contact_email from {$this->tblContact} ";
            $sql .= "where contact_email = :contact_email";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_email" => $this->contact_email,
            ]);
        } catch (PDOException $ex) {
            returnError($ex);
            $query = false;
        }
        return $query;
    }
}
