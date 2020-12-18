<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include "connect.php";
// TAMBAH ADUAN
	$_POST = json_decode(file_get_contents('php://input'), true);
    	$tajuk = $_POST['tajuk'];
    	$latitude = $_POST['latitude'];
    	$longitude = $_POST['longitude'];
	//$obj = json_decode($json);
  
    $sql = "INSERT INTO aduan (tajuk , latitude,longitude ) 
    VALUES ('$tajuk' , $latitude, $longitude)";
	echo $sql; 
	echo file_get_contents('php://input');
        $result = mysqli_query($db,$sql);
        if ($result==true){
            echo "success";
            
        }
	    else {
	        echo "error:".mysqli_error($db);
	        
	    }
        $conn->close();    
    ?>