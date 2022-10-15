
<?php
$HostName = "localhost";

$DatabaseName = "mobile_partol";
$HostUser = "root";
$HostPass = "Password123#@!";
$conn = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
if ($conn->connect_error) {
 
 die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT *  FROM Job_Applied WHERE status='Approved'";

$result = $conn->query($sql);

if ($result->num_rows >0) {
 
 
 while($row[] = $result->fetch_assoc()) {
 
 $tem = $row;
 
 $json = json_encode($tem);
 
 
 }
 
} else {
 echo "No Results Found.";
}
 echo $json;
$conn->close();
?>
