<?php
// declare db variable

$conn = null;
$conn = checkDatabaseConnection();
$contact = new Contact($conn);

if (array_key_exists('id', $_GET)) {
    checkPayload($data);
    $contact->contact_aid = $_GET['id'];
    $contact->contact_fullname = checkIndex($data, 'contact_fullname');
    $contact->contact_email = $data['contact_email'];
    $contact->contact_message = $data['contact_message'];
    $contact->contact_updated = date('Y-m-d H:i:s');

    $contact_old_email = $data['contact_old_email'];

    compareName($contact, $contact_old_email, $contact->contact_email);

    $query = checkUpdate($contact);
    returnSuccess($contact, 'Contact update', $query);
}
checkEndpoint();
