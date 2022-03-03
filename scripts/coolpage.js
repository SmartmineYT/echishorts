const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove ("active")
  navMenu.classList.remove ("active")
}))
/*


multiple button actions



~Jacobs work
*/


/*CategClick changes all items with id of categgs to show/hide

CE stands for Category/categg


*/


var CategState = 0;

function CategClick() {
var cestate = 1;
var categoryamount = 4;
a = 0;
if (CategState == 0){

/*This works to show all the categories at once*/
   while (cestate <= categoryamount)   {
    
    document.getElementById("ButtonCategid"+cestate).className = "showcateg ButtonCateg ButtonCateg"+cestate;
    cestate = cestate+1;
   
      CategState=1;
    
    
    }
    



} else {
    while (cestate <= categoryamount)   {
    document.getElementById("ButtonCategid"+cestate).className = "hide";
    cestate = cestate+1;
   
      CategState=0;
    
}
}

}


window.addEventListener("load", function () {
  setTimeout(function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
  }, 5000);
});

/* next page */

var start = 0;
var nb = 20;
var end = start + nb;
var length = $('.grid img').length;
var list = $('.grid img');

list.hide().filter(':lt('+(end)+')').show();


$('.prev, .next').click(function(e){
  e.preventDefault();

  if (($(this).hasClass('prev') && start > 0) || ($(this).hasClass('next') && end < length))
  {

    if( $(this).hasClass('prev') ){
      start -= nb;
    } else {
      start += nb;
    }

    end = start + nb;

    
  }

  if( start == 0 ) list.hide().filter(':lt('+(end)+')').show();
  else list.hide().filter(':lt('+(end)+'):gt('+(start-1)+')').show();
});

