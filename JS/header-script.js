function handleOpen() {
const x = document.getElementById("menu")
  if (x.style.display === "block") {
    x.style.display = "none";
    // document.getElementById("menu").style
  } else {
    x.style.display = "block";
  }
}

function handleClose() {
  const x = document.getElementById("menu")
  x.style.display = "none"
}