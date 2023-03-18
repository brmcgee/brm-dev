<?php
    $servername='sql108.epizy.com';
    $username='epiz_33444535';
    $password='oCiusB9IgJL';
    $dbname = "epiz_33444535_devblog";
    $conn=mysqli_connect($servername,$username,$password,"$dbname");
      if(!$conn){
          die('Could not Connect MySql Server:' .mysql_error());
        }
?>