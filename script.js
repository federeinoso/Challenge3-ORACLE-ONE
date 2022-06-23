function moveTo(idDelElemento) {
  location.hash = "#" + idDelElemento;
}

document
  .getElementById("about_me_link")
  .addEventListener("click", () => moveTo("skills"));
