//function that deletes the content on the page
function deleteContent(){
  const contents = document.getElementById("contents");
  contents.parentNode.removeChild(contents)
}

//pushes deleteContent to web browser API after 500ms to allow page to load first
//this avoids document.getElementById("contents") returning null
//TODO: implement promise
setTimeout(deleteContent,500);
