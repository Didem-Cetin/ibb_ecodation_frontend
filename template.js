//Dark
let darkMode=()=>{
  // alert("DarkMode")
  document.body.classList.toggle("dark_mode")
}

//input search
$(document).ready(function(){
const searchApi=["Adana","Ankara","Balıkesir","Bursa","Ceyhan","Denizli","Diyarbakır","Edirne","Malatya","Zonguldak"];
$("#tags").autocomplete({
  source:searchApi
})
}); //end 
  

// Footer

let newDate=()=>{
  const date=new Date().getFullYear();
//JS DOM
//document.getElementById("date_id").innerHTML=new Date().getFullYear()

//Jquery Dom

$("#date_id").html(date);
}

newDate()