var result;
var Length = document.getElementById("");
var Width = document.getElementById("");
var radius;
//Forms

var CircleAreaForm = Math.PI * radius ^2;
var RectanglePerimeterForm = 2 * (length + Width);
var RectangleAreaForm = Length * Width;
var RectangleDiagonalForm = Length^2 + Width^2;
var timesTwo = 2;
//EndForms
var CCresult = document.getElementById("CCresult");


function CalculateCir(){
    radius = document.getElementById("radius").value;
    var Circumference = 2 * Math.PI * radius;
    CCresult =document.getElementById("CCresult");
    CCresult.innerHTML = Circumference;
}

function CalculateCirA(){
    radius = document.getElementById("radiusCA").value;
    CCresult =document.getElementById("ACCresult");
    var cArea = Math.PI * radius ^2;
    CCresult.innerHTML = cArea;
}

function CalculateRecA(){
    Length = document.getElementById("LengthRA").value;
    Width = document.getElementById("WidthRA").value;
    CCresult =document.getElementById("RACresult");
    var RecArea = Length * Width;
    CCresult.innerHTML = RecArea;
}
function CalculateRecD(){
    Length = document.getElementById("LengthRD").value;
    Width = document.getElementById("WidthRD").value;
    CCresult =document.getElementById("RDCresult");
    var RecD = Length^2 + Width^2;
    CCresult.innerHTML = RecD;
}
