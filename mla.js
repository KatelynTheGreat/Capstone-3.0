
function Citation(){
var AuthorInput = document.getElementById("AuthorInput").value;
var TitleInput = document.getElementById("TitleInput").value;
var TitleContainerInput = document.getElementById("TitleContainerInput").value;
var PublisherInput = document.getElementById("PublisherInput").value;
var DateInput = document.getElementById("DateInput").value;
var LocationInput = document.getElementById("LocationInput").value;
var printResult = document.getElementById("endResult");
var poll = document.getElementById("Citation").value;


if (poll === "mla"){
   if(AuthorInput === " "|| TitleInput===" " ||TitleContainerInput === " "|| PublisherInput === " "|| DateInput === " " || LocationInput === " "){
   printResult.innerHTML = " ";
}else{
   printResult.innerHTML = AuthorInput + ", " + '"' + TitleInput + '"' + ", " + TitleContainerInput + ", " + PublisherInput + ", " + DateInput + ", " + LocationInput;
}
console.log("MLA");
}

if (poll === "APA"){
   if(AuthorInput === " "|| TitleInput===" " || PublisherInput === " "|| DateInput === " "){
      printResult.innerHTML = " ";
   }else{
      printResult.innerHTML = AuthorInput + ", " + DateInput + "," + '"' + TitleInput + '",' + " " + PublisherInput + ", " + LocationInput;
   }
 
}




}




