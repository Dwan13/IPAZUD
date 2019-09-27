<?php
  // Declaramos el header como aplicación json y que interprete los caracteres especial UTF-8
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
 
  // Conectamos a la base de datos y hacemos un select
  $conn = new mysqli("localhost", "root", "", "pasantia");
 
  $result = $conn->query("SELECT * FROM videos");
 
  $outp = "";
  
  // Formateamos nuestro JSON
  while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
      if ($outp != "") {$outp .= ",";}
      $outp .= '{"id":"'  . $rs["id"] . '",';
      $outp .= '"tema":"'   . $rs["tema"]        . '",';
      $outp .= '"autor":"'   . $rs["autor"]        . '",';
      $outp .= '"fecha":"'   . $rs["fecha"]        . '",';
      $outp .= '"link":"'. $rs["link"]     . '"}';
  }
  $outp ='{"records":['.$outp.']}';
  $conn->close();
 
  echo($outp);
?>