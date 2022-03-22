const setup = () => {
    
	
	let sliderGreen = document.getElementById("green");
    let sliderRed = document.getElementById("red");
    let sliderBlue = document.getElementById("blue");

	sliderGreen.addEventListener("change", update);
	sliderGreen.addEventListener("input", update);

    sliderRed.addEventListener("change", update);
	sliderRed.addEventListener("input", update);

    sliderBlue.addEventListener("change", update);
	sliderBlue.addEventListener("input", update);
    update();
    
}

const update = () => {
    let colorDemos=document.getElementsByClassName("colorDemo");
	let sliderGreen = document.getElementById("green");
    let sliderRed = document.getElementById("red");
    let sliderBlue = document.getElementById("blue");
	var valueGreen=sliderGreen.value;
    var valueRed=sliderRed.value;
    var valueBlue=sliderBlue.value;
	console.log("de waarde van de slider is momenteel : "+valueGreen+ valueBlue + valueRed);
    colorDemos[0].style.backgroundColor="rgb(" + valueRed + "," + valueGreen + "," + valueBlue+ ")";

}



window.addEventListener("load", setup);