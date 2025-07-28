<?php

$conn = null;
$conn = checkDatabaseConnection();
$testimonials = new Testimonials($conn);

if (array_key_exists('id', $_GET)) {
    $testimonials->testimonial_aid = $_GET['id'];
    checkId($testimonials->testimonial_aid);
    $query = checkDelete($testimonials);
    http_response_code(200);
    returnSuccess($testimonials, 'testimonial delete', $query);
}
checkEndpoint();
