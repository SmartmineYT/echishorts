<html>
 <head>
  <title>PHP Test</title>
 </head>
 <body>






<?php
 
 
//files = a path
 $files = glob(realpath('../images') . '/*.*');


//grabs a random file from files
 $file = array_rand($files);


//prints the grabbed file
 echo $files[$file];

//takes the excess directory stuff and removes it
 $image = str_replace('C:\Users\6530\Documents\Boredom','',$files[$file]);


//makes an image from the file
 echo "<img src='$image' >";


?> 





<?php

// grabs every file in a directory and prints it

$dir = "../images/";

// Sort in ascending order - this is default
$a = scandir($dir);


//coneverts the array into a json which can be printed out
$json = json_encode($a); 


echo "<h1>'$json'</h1>";
?>


 </body>
</html>