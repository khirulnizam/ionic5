<?php
header('Content-Type: application/json'); //to make json format pretty
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include "connect.php";



//keyword

if(!isset($_GET['key']))
	$key=null;
else 
	$key=$_GET['key'];



//generate JSON from table

$aduanlist= array();
$response=array();


$sql="SELECT id,tajuk,latitude, longitude
    FROM aduan
    WHERE tajuk  LIKE '%$key%' ";

//run query

$rs=mysqli_query($db,$sql);

if($rs==false){
	echo mysqli_error($rs);
}



//no record found

if (mysqli_num_rows($rs)==0){

}

else{//found some records

	while($rec=mysqli_fetch_array($rs)){
		//capture one record
		$aduanlist=array();
		$aduanlist["id"] = $rec["id"];
		$aduanlist["tajuk"] = $rec["tajuk"];
		$aduanlist["latitude"] = $rec["latitude"];
		$aduanlist["longitude"] = $rec["longitude"];
		//push to response
		array_push($response, $aduanlist);
	}//end while

}//end found records

//generate JSON encoded data

//print_r $aduanlist;
echo json_encode($response, JSON_PRETTY_PRINT); //print JSON format with beautification

?>