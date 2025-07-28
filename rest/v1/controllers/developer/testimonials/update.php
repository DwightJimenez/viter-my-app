<?php
// declare db variable

$conn = null;
$conn = checkDatabaseConnection();
$testimonials = new Testimonials($conn);

if (array_key_exists('id', $_GET)) {
    checkPayload($data);
    $testimonials->testimonial_aid = $_GET['id'];
    $testimonials->testimonial_name = checkIndex($data, 'testimonial_name');
    $testimonials->testimonial_description = $data['testimonial_description'];
    $testimonials->testimonial_image = $data['testimonial_image'];
    $testimonials->testimonial_position = $data['testimonial_position'];
    $testimonials->testimonial_updated = date('Y-m-d H:i:s');
    $query = checkUpdate($testimonials);
    returnSuccess($testimonials, 'Testimonial update', $query);
}
checkEndpoint();
