
<?php

$HostName = "localhost";

$DatabaseName = "mobile_partol";
$HostUser = "root";
$HostPass = "Password123#@!";
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json,true);

// Populate name from JSON $obj array and store into $name.
$name = $obj['name'];
$reg = $obj['reg'];
$faculity = $obj['faculity'];
$email = $obj['email'];
$password = $obj['password'];


// Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "INSERT INTO `student`(`name`, `reg`, `faculity`, `email`, `password`) VALUES ('$name','$reg','$faculity','$email','$password')";


if(mysqli_query($con,$Sql_Query)){

// If the record inserted successfully then show the message.
$MSG = 'Data Inserted Successfully ' ;

// Converting the message into JSON format.
$json = json_encode($MSG);

// Echo the message.
echo $json ;

}
else{

echo 'Try Again';

}
mysqli_close($con);
?>
