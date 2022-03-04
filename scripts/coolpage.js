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
  }, 3000);
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

/* image randomizer*/

// Get all the images
let images = [
  'BetaPreLoader.gif',
  'PreLoader.gif',
  'GVanillaPreLoader.gif',
  'ILewdPreLoader.gif',
  'UploadPreLoader.gif',
  'CommunityPreLoader.gif'
]

let imagesLength = images.length;
let randomNumber = Math.random();

randomNumber = randomNumber*imagesLength;
randomNumber = Math.floor(randomNumber);
let chosenImage = images[randomNumber];
image_show.src = `/categories/Preloader/${chosenImage}`

/* searches */

function openPage() {
  var x = document.getElementById("search").value;

    if (x.toUpperCase() === 'Home'.toUpperCase()){
    window.open("/index.html");
  }  
  if (x.toUpperCase() === 'Images'.toUpperCase()){
      window.open("/categories/Images.html");
  }    
  if (x.toUpperCase() === 'Gifs'.toUpperCase()){
      window.open("/categories/Gifs.html");
  }    
  if (x.toUpperCase() === 'Misc'.toUpperCase()){
    window.open("/categories/Misc.html");
  }
   if (x.toUpperCase() === 'i/aheago'.toUpperCase()){
    window.open("/categories/iaheago.html");
    }   
   if (x.toUpperCase() === 'i/lewd'.toUpperCase()){
    window.open("/categories/ilewd.html");
    }   
   if (x.toUpperCase() === 'i/yuri'.toUpperCase()){
    window.open("/categories/iyuri.html");
    }   
   if (x.toUpperCase() === 'i/big-boobs'.toUpperCase()){
    window.open("/categories/ibig-boobs.html");
    }   
   if (x.toUpperCase() === 'i/big boobs'.toUpperCase()){
    window.open("/categories/ibig-boobs.html");
    }   
   if (x.toUpperCase() === 'i/gang-bang'.toUpperCase()){
    window.open("/categories/igang-bang.html");
    }
   if (x.toUpperCase() === 'i/gang bang'.toUpperCase()){
    window.open("/categories/igang-bang.html");
    }
   if (x.toUpperCase() === 'i/men'.toUpperCase()){
    window.open("/categories/imen.html");
    }
   if (x.toUpperCase() === 'i/vanilla'.toUpperCase()){
    window.open("/categories/ivanilla.html");
    }
   if (x.toUpperCase() === 'i/solo'.toUpperCase()){
    window.open("/categories/isolo.html");
    }
   if (x.toUpperCase() === 'i/public'.toUpperCase()){
    window.open("/categories/ipublic.html");
    }
   if (x.toUpperCase() === 'i/anal'.toUpperCase()){
    window.open("/categories/ianal.html");
    }
   if (x.toUpperCase() === 'i/threesome'.toUpperCase()){
    window.open("/categories/ithreesome.html");
    }
   if (x.toUpperCase() === 'i/ass'.toUpperCase()){
    window.open("/categories/iass.html");
    }
    if (x.toUpperCase() === 'g/vanilla'.toUpperCase()){
      window.open("/categories/gvanilla.html");
      }
    if (x.toUpperCase() === 'g/solo'.toUpperCase()){
      window.open("/categories/gsolo.html");
      }
    if (x.toUpperCase() === 'g/blow-job'.toUpperCase()){
      window.open("/categories/gblow-job.html");
      }
    if (x.toUpperCase() === 'g/bdsm'.toUpperCase()){
      window.open("/categories/gbdsm.html");
      } 
    if (x.toUpperCase() === 'g/yuri'.toUpperCase()){
      window.open("/categories/gyuri.html");
      }
    if (x.toUpperCase() === 'g/riding'.toUpperCase()){
      window.open("/categories/griding.html");
      }
    if (x.toUpperCase() === 'g/gang-bang'.toUpperCase()){
      window.open("/categories/ggang-bang.html");
      }
    if (x.toUpperCase() === 'g/gang bang'.toUpperCase()){
      window.open("/categories/ggang-bang.html");
      }
    if (x.toUpperCase() === 'g/threesome'.toUpperCase()){
      window.open("/categories/gthreesome.html");
      }
    if (x.toUpperCase() === 'g/milf'.toUpperCase()){
      window.open("/categories/gmilf.html");
      }
    if (x.toUpperCase() === 'g/monster'.toUpperCase()){
      window.open("/categories/gmonster.html");
      }
    if (x.toUpperCase() === 'g/trap'.toUpperCase()){
      window.open("/categories/gtrap.html");
      }
    else {
      window.open("/categories/NothingHere.html");
    }
}
