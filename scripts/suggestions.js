// getting all required elements
const searchWrapper = document.querySelector(".search__input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){

        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = '<li>'+ data +'</li>';
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;

    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

let suggestions = [
    "I/Aheago",
    "I/Lewd",
    "I/Yuri",
    "I/Big-Boobs",
    "I/Gang-Bang",
    "I/Men",
    "I/Vanilla",
    "I/Solo",
    "I/Nekomimi",
    "I/Anal",
    "I/Bdsm",
    "I/Ass",
    "G/Vanilla",
    "G/Solo",
    "G/Blow-Job",
    "G/Yuri",
    "G/Anal",
    "G/Boobs",
    "G/Riding",
    "G/Gangbang",
    "G/Pussy",
    "G/Milf",
    "G/Cum",
    "G/Trap",
];