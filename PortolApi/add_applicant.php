
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
$phone = $obj['phone'];
$email = $obj['email'];
$notes = $obj['notes'];
$position = $obj['position'];
$sql1="SELECT email,name FROM student WHERE email='$email'";
$sql="SELECT position,description FROM job WHERE position='$position'";
$check = mysqli_fetch_array(mysqli_query($con,$sql));
$check1 = mysqli_fetch_array(mysqli_query($con,$sql1));
$name=$check1['name'];
$description=$check['description'];
if(isset($check1)){
if(isset($check)){
$status="unproved";
$denie="No";
 
   // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "INSERT INTO `Job_Applied`(`email`, `position`, `status`, `letter`, `phone`,`name`,`description`,`dinie`) VALUES ('$email','$position','$status','$notes','$phone','$name','$description','$denie')";


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
    
}
}
else{
 
    // If the record inserted successfully then show the message.
   $InvalidMSG = 'Position or email You Entered is not matched to What we have' ;
    
   // Converting the message into JSON format.
   $InvalidMSGJSon = json_encode($InvalidMSG);
    
   // Echo the message.
    echo $InvalidMSGJSon ;
    
    }
mysqli_close($con);
?>
