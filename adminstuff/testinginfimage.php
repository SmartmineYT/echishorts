
<!DOCTYPE html>
<html>

<head>

<link rel="stylesheet" href="/css.css">

</head>
<?php
//files = a path
$files = glob(realpath('../images') . '/*.*');


//grabs a random file from files
 $file = array_rand($files);


//prints the grabbed file
 echo $files[$file];

//takes the excess directory stuff and removes it
 $image = str_replace('C:\Users\6530\Documents\Boredom','',$files[$file]);
 $image = stripslashes($image);
 echo '<br>';
echo $image;
?>


<body class='first'>
<!--<body class="first" onload="initialLoadImages('/images/IMG_2944.JPG')">-->

<script src="/scripts/gethtml.js"></script>
<script src="/scripts/butt.js"></script>
<script src="/scripts/loadmore.js"></script>
<script>includeHTML("/videosites/example.html");</script>
<script>initialLoadImages();</script>

<?php





// grabs every file in a directory and prints it
$dir = "../images/";

// Sort in ascending order - this is default
$a = scandir($dir);


//coneverts the array into a json which can be printed out
$json = json_encode($a); 

$b = rand(3,count($a));
$g = "../images/".$a[$b];


echo "<script>initialLoadImages('../images/$a[$b]');</script>";
echo " <script>   window.onscroll = function() {
        
        const card = document.createElement('div');
        
        
        card.id = 'card';
        card.className = 'card';
       
        
        card.style.backgroundImage = 'url($g)';
        
        let ul = document.getElementById('imageGen');
        ul.appendChild(card);
        
        
        
            
}</script>";
/*
echo "<script>loadMoreImages('../images/".$a[rand(3, $c)]."');</script>";
*/
$c = count($a);
for ($x = 0; $x < count($a); $x++) {


echo "<h1>$a[$x]</h1>";
//echo "<image src='../images/$a[$x]'>";

$b = rand(2,count($a));




}



?>



<div id="imageGen" class="images col">
</div>
        </body>

</body>
</html>
