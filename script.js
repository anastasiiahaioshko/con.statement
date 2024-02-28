function getInputValue(){
            var inputVal = document.getElementById("myInput").value;
            document.getElementById("display").innerHTML = "<br>" + inputVal ;
        
var season = inputVal;

if (season === 'spring') {
console.log('Ecuador is for you!');
document.getElementById("seasonal").innerHTML= "<img src='e.jpg'>";

}else if(season === 'winter'){
	document.getElementById("seasonal").innerHTML= "<img src='n.jpg'>";
    console.log('Norway is for you!');      
         } 
else if(season === 'fall'){
	document.getElementById("seasonal").innerHTML= "<img src='nz.jpg'>";
    console.log('New Zealand is for you!');      
         } 
else if(season === 'summer'){
	document.getElementById("seasonal").innerHTML= "<img src='t.jpg'>";
    console.log('Thailand is for you!');      
         } 
else {
  console.log('Invalid season.');
    document.getElementById("seasonal").innerHTML= "invalid season";

}
}

