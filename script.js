const body = document.body;
const modal = document.getElementById("modal");

function toggleTheme(){
  body.classList.toggle("light");
}

function openModal(){
  modal.style.display="flex";
}

function closeModal(){
  modal.style.display="none";
}
