
/* actually makes the cards
Jacobs Work




imageCardGen parameters might be
repeat, filename,category,name,key



image card generating function 
function imageCardGen() {
    for (let i = 0; i < 12; i++) {
const card = document.createElement("div")


card.id = "card";
card.className = "card imagecard1";

let ul = document.getElementById("imageGen");
ul.appendChild(card);

    }
 
}

*/
function initialLoadImages(url) {
    
    window.onload = function() {
        const card = document.createElement("div")
        
        
        card.id = "card";
        card.className = "card";
        card.style.backgroundImage = "url('"+url+"')";
        let ul = document.getElementById("imageGen");
        ul.appendChild(card);
    }
            





    
}


function loadMoreImages(){
    
    
    window.onscroll = function() {
        
            const card = document.createElement("div")
            
            
            card.id = "card";
            card.className = "card";
            
            alert();
            card.style.backgroundImage = "url('"+q+"')";
            
            let ul = document.getElementById("imageGen");
            ul.appendChild(card);
            
            
            
                
    }
    
}

function videoGen(){




}
function loadMoreVideos(name){
    window.onscroll = function() {

        
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            const breake = document.createElement("br");
            const video = document.createElement("video");
            const title = document.createElement("h1");
            title.innerHTML = name;
            video.innerHTML = '<source src="/videos/mansheadexplodes.mp4" type="video/mp4">';
            video.controls = true;
            video.muted = true;
            video.autoplay = true;
            let ul = document.getElementById("video");
            ul.appendChild(breake);
            ul.appendChild(title);
            ul.appendChild(video);
            
            
        }
    }
}

/*<div class=video>
                <video  controls  autoplay muted>
                
                <source src="/videos/mansheadexplodes.mp4" type="video/mp4">
            </video>
*/