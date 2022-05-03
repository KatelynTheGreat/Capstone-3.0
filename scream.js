
function ani(){
    //alert("hjsvytdvf");
    document.getElementById("checl").innerText = document.getElementById("screamHere").value;

    document.getElementById("checl").style.opacity = 1.0;

    setTimeout(() => {
        document.getElementById("checl").style.opacity = 0.5;
    }, "1000");
   
    setTimeout(() => {
        document.getElementById("checl").style.opacity = 0.01;
    }, "2000");

    setTimeout(() => {
        document.getElementById("checl").style.opacity = 1.0;
        document.getElementById("checl").innerText = "What you wish to say will go here."
    }, "3000");

}
