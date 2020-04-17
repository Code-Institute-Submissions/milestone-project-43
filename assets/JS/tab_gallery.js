function displayImage(imgs) {

	var expandImg = document.getElementById("expanded-img");
	var imgText = document.getElementById("img-text");
	expandImg.src = imgs.src;
	imgText.innerHTML = imgs.alt;
	expandImg.parentElement.style.display = "block";

}