<?php

class Testimonials
{
    public  $testimonial_aid;
    public  $testimonial_is_active;
    public  $testimonial_name;
    public  $testimonial_description;
    public  $testimonial_image;
    public  $testimonial_position;
    public  $testimonial_created;
    public  $testimonial_updated;

    public  $connection;
    public  $lastInsertedId;
    public  $tblTestimonials;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblTestimonials = "my_app_testimonials";
    }

    public function readAll()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= "{$this->tblTestimonials} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function create()
    {
        try {
            $sql = "insert into {$this->tblTestimonials} ( ";
            $sql .= "testimonial_is_active, ";
            $sql .= "testimonial_name, ";
            $sql .= "testimonial_description, ";
            $sql .= "testimonial_image, ";
            $sql .= "testimonial_position, ";
            $sql .= "testimonial_created, ";
            $sql .= "testimonial_updated ) values ( ";
            $sql .= ":testimonial_is_active, ";
            $sql .= ":testimonial_name, ";
            $sql .= ":testimonial_description, ";
            $sql .= ":testimonial_image, ";
            $sql .= ":testimonial_position, ";
            $sql .= ":testimonial_created, ";
            $sql .= ":testimonial_updated ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "testimonial_is_active" => $this->testimonial_is_active,
                "testimonial_name" => $this->testimonial_name,
                "testimonial_description" => $this->testimonial_description,
                "testimonial_image" => $this->testimonial_image,
                "testimonial_position" => $this->testimonial_position,
                "testimonial_created" => $this->testimonial_created,
                "testimonial_updated" => $this->testimonial_updated,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            returnError($ex);
            $query = false;
        }
        return $query;
    }
}
