<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>BRM Blog data</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round|Open+Sans">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


<!-- Latest compiled and minified CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"crossorigin="anonymous"></script>


<style type="text/css">
.bs-example{
margin: 5px;
}
</style>



<script type="text/javascript">
$(document).ready(function(){
$('[data-toggle="tooltip"]').tooltip();   
});

</script>
</head>
<body>
<div class="bs-example">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="page-header clearfix">
                    <h2 class="pull-left">Users List</h2>
                </div>
<?php
include_once 'db.php';
$result = mysqli_query($conn,"SELECT * FROM brm");
?>
<?php
if (mysqli_num_rows($result) > 0) {
?>
<table class='table table-bordered table-striped'>
    <tr>
        <td>id</td>
        <td>isHero</td>
        <td>purpose</td>
        <td>category</td>
        <td>date</td>
        <td>author</td>
        <td>avatar</td>
        <td>title</td>
        <td>body</td>
        <td>img1</td>
        <td>img2</td>
        <td>project</td>
    </tr>

<?php
  $i=0;
  while($row = mysqli_fetch_array($result)) {
?>

<tr>
  <td><?php echo $row["id"]; ?></td>
  <td><?php echo $row["isHero"]; ?></td>
  <td><?php echo $row["purpose"]; ?></td>
  <td><?php echo $row["category"]; ?></td>
  <td><?php echo $row["date"]; ?></td>
  <td><?php echo $row["author"]; ?></td>
  <td><?php echo $row["avatar"]; ?></td>
  <td><?php echo $row["title"]; ?></td>
  <td><?php echo $row["body"]; ?></td>
  <td><?php echo $row["img1"]; ?></td>
  <td><?php echo $row["img2"]; ?></td>
  <td><?php echo $row["project"]; ?></td>
</tr>

<?php
$i++;
}
?>
</table>
<?php
}
else{
echo "No result found";
}
?>
</div>
</div>        
</div>
</div>






<!-- Latest compiled and minified JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

</body>
</html>