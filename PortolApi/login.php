
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
 
// Populate User email from JSON $obj array and store into $email.
$email = $obj['email'];
 
// Populate Password from JSON $obj array and store into $password.
$password = $obj['password'];
 
//Applying User Login query with email and password match.
$Sql_Query = "select * from Campany where email = '$email' and password = '$password' ";
$Sql_query1="select * from admin where email = '$email' and password = '$password' ";
$Sql_query2="select * from student where email = '$email' and password = '$password' ";
$Sql_query3="select * from login where username = '$email' and password = '$password' ";

// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$Sql_Query));
$check1 = mysqli_fetch_array(mysqli_query($con,$Sql_query1));
$check2 = mysqli_fetch_array(mysqli_query($con,$Sql_query2));
$check3=mysqli_fetch_array(mysqli_query($con,$Sql_query3));
  
 
if(isset($check)){
 
 $SuccessLoginMsg = 'Data Matched';
 
 // Converting the message into JSON format.
$SuccessLoginJson = json_encode($SuccessLoginMsg);
 
// Echo the message.
 echo $SuccessLoginJson ; 
 
 }
 elseif(isset($check1))
 {
    $SuccessLoginMsg = 'admin Data Matched';
 
    // Converting the message into JSON format.
   $SuccessLoginJson = json_encode($SuccessLoginMsg);
    
   // Echo the message.
    echo $SuccessLoginJson ; 
      
 }
 elseif(isset($check2))
 {
    $SuccessLoginMsg = 'Student Data Matched';
 
    // Converting the message into JSON format.
   $SuccessLoginJson = json_encode($SuccessLoginMsg);
    
   // Echo the message.
    echo $SuccessLoginJson ; 
      
 }
 elseif(isset($check3))
 {
    $SuccessLoginMsg = 'Adminog Data Matched';
 
    // Converting the message into JSON format.
   $SuccessLoginJson = json_encode($SuccessLoginMsg);
    
   // Echo the message.
    echo $SuccessLoginJson ; 
      
 }
 else{
 
 // If the record inserted successfully then show the message.
$InvalidMSG = 'Invalid Username or Password Please Try Again' ;
 
// Converting the message into JSON format.
$InvalidMSGJSon = json_encode($InvalidMSG);
 
// Echo the message.
 echo $InvalidMSGJSon ;
 
 }
 
 mysqli_close($con);
?>