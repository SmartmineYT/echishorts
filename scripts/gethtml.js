


/*GRABS CODE FROM ANOTHER HTML FILE AND USES IT


~Jacobs Work




HOW TO USE:

type this where you want the html to be injected
<div id="copyhtml"></div>


type this to import the javascript file
<script src="/scripts/gethtml.js"></script>


call this to use the function and put the directory in the ""
<script>includeHTML("/videosites/example.html");</script>
*/

function includeHTML(dir) {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("copyhtml").innerHTML =
      ((this.responseText));
    }

  };
  xhttp.open("GET", dir, true);
  xhttp.send();}
 







