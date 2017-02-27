function displayModal(e, ext){
  var elemId = e.target.id;
  document.getElementById("myModal").style.display = "block";
  if(ext == "jpg")
  {
    document.getElementById("img01").style.display = "block";
    document.getElementById("frame").style.display = "none";
    document.getElementById("img01").src = "files/"+elemId+".jpg";
  }
  else
  {
    document.getElementById("img01").style.display = "none";
    document.getElementById("frame").style.display = "block";
    document.getElementById("frame").src = "files/"+elemId+".pdf";
  }
}
