console.log("CAlculate the Body MAss index");
alert("please enter the weight in kilograms and height in meter");


const kilograms = document.getElementById("kilograms");
const meters = document.getElementById("meters");
const BMI = document.getElementById("BMI");

let find = document.getElementById("find");
find.addEventListener("click", function (e) {

    let weight = kilograms.value;
    let height = meters.value;

    if (weight == "" && height == "") {
        alert("Fill the both weight and height section")
    }
    else if (weight == "" || height == "") {
        alert("Fill the both weight and height section")
    }
else{
let a = weight/(height*height);
console.log("your body mass index is " + a);
BMI.value = a;

}



})

let clear = document.getElementById('clear');
clear.addEventListener("click", function (e) {
    kilograms.value = "";
    meters.value = "";
    BMI.value = "";

});


