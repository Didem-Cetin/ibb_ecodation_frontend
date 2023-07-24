
//Örnek 1
let change=()=>{
    document.getElementById("demo").innerHTML="Hello JS"
}

//Örnek2

let change_1=()=>{
document.getElementById("myImage").src="/img/news.jpg"
}

let change_2=()=>{
    document.getElementById("myImage").src="/img/JavaScript_blog.webp"
}

//Örnek3

let styleChange=()=>{
    document.getElementById("stylechange").style.fontSize="35px"
}

let hiding=()=>{
    document.getElementById("stylechange").style.display="none"
}

//Statements

// Örnek 1

let x,y,z;
x=5;
y=6;
z=x+y;

document.getElementById("toplama").innerHTML= "The value of z is " + z + ".";

//Functions
// Örnek 1
function myFunction(p1,p2){
    return p1*p2;
}

let result= myFunction(4,3)
document.getElementById("return_id").innerHTML=result;
// end

// Örnek 2
function toCelcius(f){
    return (5/9)*(f-32);
}

let value =toCelcius(77);
document.getElementById("sicaklik_hesaplama").innerHTML=value;

//end

// Objects

// Örnek 1

const person={firstName:"Didem",lastName:"Çetin" ,age:26,eyeColor:"green"};
document.getElementById("object_id").innerHTML=person.firstName +" " + "is" + " "+person.age +" "+ "years old.";
//end

//Events

// Örnek1

function ornek1(){
document.getElementById('ornek1_id').innerHTML=new Date().getFullYear();
}

// let ornek1=()=>{
//     document.getElementById('ornek1_id').innerHTML=Date();
// }

//end




