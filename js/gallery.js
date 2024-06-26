
function upDate(previewPic){
  document.getElementById('image').innerHTML = previewPic.alt;
  
  document.getElementById('image').style.backgroundImage= "url('"+previewPic.src+"')";
}
	

function unDo(element){
  document.getElementById('image').innerHTML= "Hover over an image below to display here.";
	
  document.getElementById('image').style.backgroundImage= "none";
	}

function setimages(){
  CurrentImages= document.querySelectorAll("body img")
  for (var i=0; i<CurrentImages.length; i++){
    console.log(i);
    CurrentImages[i].setAttribute("tabindex","0")
  }

}