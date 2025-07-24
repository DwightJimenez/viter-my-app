<?php
// database variable
$conn = null;
// connect to database and store in conn variable
$conn = checkDatabaseConnection();

// use models
$testimonial = new  Testimonials($conn);

// no id shall pass 
if (array_key_exists('id', $_GET)) {
    checkEndpoint();
}

//check data
checkPayload($data);

$testimonial->testimonial_is_active = 1;
$testimonial->testimonial_name = checkIndex($data, 'testimonial_name');
$testimonial->testimonial_position = checkIndex($data, 'testimonial_position');
$testimonial->testimonial_description = checkIndex($data, 'testimonial_description');
$testimonial->testimonial_image = checkIndex($data, 'testimonial_image');
$testimonial->testimonial_created = date('Y-m-d H:i:s');
$testimonial->testimonial_updated = date('Y-m-d H:i:s');

$query = checkCreate($testimonial);
returnSuccess($testimonial, "testimonial create", $query);
