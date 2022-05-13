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

$('#item img').dblclick(function() {
  $(this).parent().append($(this).attr('src'));
});

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
    window.open("/index.html", "_self");
  }  
  else if (x.toUpperCase() === 'Images'.toUpperCase()){
      window.open("/categories/Images.html", "_self");
  }    
  else if (x.toUpperCase() === 'Gifs'.toUpperCase()){
      window.open("/categories/Gifs.html", "_self");
  }    
  else if (x.toUpperCase() === 'Misc'.toUpperCase()){
    window.open("/categories/Misc.html", "_self");
  }
   else if (x.toUpperCase() === 'i/aheago'.toUpperCase()){
    window.open("/categories/iaheago.html", "_self");
    }   
   else if (x.toUpperCase() === 'i/lewd'.toUpperCase()){
    window.open("/categories/ilewd.html", "_self");
    }   
   else if (x.toUpperCase() === 'i/yuri'.toUpperCase()){
    window.open("/categories/iyuri.html", "_self");
    }   
   else if (x.toUpperCase() === 'i/big-boobs'.toUpperCase()){
    window.open("/categories/ibig-boobs.html", "_self");
    }   
   else if (x.toUpperCase() === 'i/big boobs'.toUpperCase()){
    window.open("/categories/ibig-boobs.html", "_self");
    }   
   else if (x.toUpperCase() === 'i/gang-bang'.toUpperCase()){
    window.open("/categories/igang-bang.html", "_self");
    }
   else if (x.toUpperCase() === 'i/gang bang'.toUpperCase()){
    window.open("/categories/igang-bang.html", "_self");
    }
   else if (x.toUpperCase() === 'i/men'.toUpperCase()){
    window.open("/categories/imen.html", "_self");
    }
   else if (x.toUpperCase() === 'i/vanilla'.toUpperCase()){
    window.open("/categories/ivanilla.html", "_self");
    }
   else if (x.toUpperCase() === 'i/solo'.toUpperCase()){
    window.open("/categories/isolo.html", "_self");
    }
   else if (x.toUpperCase() === 'i/public'.toUpperCase()){
    window.open("/categories/ipublic.html", "_self");
    }
   else if (x.toUpperCase() === 'i/anal'.toUpperCase()){
    window.open("/categories/ianal.html", "_self");
    }
   else if (x.toUpperCase() === 'i/threesome'.toUpperCase()){
    window.open("/categories/ithreesome.html", "_self");
    }
   else if (x.toUpperCase() === 'i/ass'.toUpperCase()){
    window.open("/categories/iass.html", "_self");
    }
    else if (x.toUpperCase() === 'g/vanilla'.toUpperCase()){
      window.open("/categories/gvanilla.html", "_self");
      }
    else if (x.toUpperCase() === 'g/solo'.toUpperCase()){
      window.open("/categories/gsolo.html", "_self");
      }
    else if (x.toUpperCase() === 'g/blow-job'.toUpperCase()){
      window.open("/categories/gblow-job.html", "_self");
      }
    else if (x.toUpperCase() === 'g/bdsm'.toUpperCase()){
      window.open("/categories/gbdsm.html", "_self");
      } 
    else if (x.toUpperCase() === 'g/yuri'.toUpperCase()){
      window.open("/categories/gyuri.html", "_self");
      }
    else if (x.toUpperCase() === 'g/boobs'.toUpperCase()){
      window.open("/categories/gboobs.html", "_self");
      }
    else if (x.toUpperCase() === 'g/riding'.toUpperCase()){
      window.open("/categories/griding.html", "_self");
      }
    else if (x.toUpperCase() === 'g/gang-bang'.toUpperCase()){
      window.open("/categories/ggang-bang.html", "_self");
      }
    else if (x.toUpperCase() === 'g/gang bang'.toUpperCase()){
      window.open("/categories/ggang-bang.html", "_self");
      }
    else if (x.toUpperCase() === 'g/threesome'.toUpperCase()){
      window.open("/categories/gthreesome.html", "_self");
      }
    else if (x.toUpperCase() === 'g/milf'.toUpperCase()){
      window.open("/categories/gmilf.html", "_self");
      }
    else if (x.toUpperCase() === 'g/monster'.toUpperCase()){
      window.open("/categories/gmonster.html", "_self");
      }
    else if (x.toUpperCase() === 'g/trap'.toUpperCase()){
      window.open("/categories/gtrap.html", "_self");
      }
    else {
        window.open("/categories/NothingHere.html", "_self");
    }
}

//update 14/11/2017

//fixed nav bar
window.addEventListener('scroll',()=>{
	let scroll = document.documentElement.scrollTop || document.body.scrollTop,
		 menu = document.getElementsByClassName('menu')
	
	//update 19/11/2017
	scroll >= 48
		? menu[0].classList.add('fixed')
		: menu[0].classList.remove('fixed')
})

/* */
const openPopupButtons = document.querySelectorAll('[data-popup-target]')
const closePopupButtons = document.querySelectorAll('[data-close-target]')
const popupbutton = document.querySelectorAll('popup');

openPopupButtons.forEach(button => {
button.addEventListener('click', () => {
  const popupall = document.querySelectorAll('.popup-overlay')
  popupall .forEach(popup => {
    openPopup(popup)
  })
})
})

function openPopup(popup) {
  if (popup == null) return
  popup.classList.add('active')
}

var els = document.getElementsByClassName('popup-overlay active')

function closePopup() {
  while (els[0]) {
    els[0].classList.remove('active')
  }
}

/* */
