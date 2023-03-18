<?php
include_once 'db.php';
if(isset($_POST['submit']))
{    
     $purpose = $_POST['purpose'];
     $category = $_POST['category'];
     $title = $_POST['title'];
     $date = $_POST['date'];
     $author = $_POST['author'];
     $avatar = $_POST['avatar'];
     $body = $_POST['body'];
     $img1 = $_POST['img1'];
     $img2 = $_POST['img2'];
     $project = $_POST['project'];
     $id = $_POST['id'];
     $isHero = $_POST['isHero'];

     $sql = "INSERT INTO brm (purpose, category, title, date, author, avatar, body, img1, img2, project, id, isHero)

     VALUES ('$purpose','$category', '$title', '$date', '$author', '$avatar', '$body', '$img1', '$img2', '$project', '$id', '$isHero')";
     
     if (mysqli_query($conn, $sql)) {
        echo "New record has been added successfully !";
     } else {
        echo "Error: " . $sql . ":-" . mysqli_error($conn);
     }
     mysqli_close($conn);
}S
?>