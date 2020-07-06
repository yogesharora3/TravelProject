const btnMenu = document.querySelector("#btn-menu");
btnMenu.addEventListener("click", handleNav);
const navBar = document.querySelector(".navigation");
function handleNav(e) {
  console.log(e.target.classList);

  console.log(Array.from(e.target.classList));

  if (Array.from(e.target.classList).includes("btn-open")) {
    e.target.classList = "btn-close";
    navBar.style.display = "block";
  } else {
    e.target.classList = "btn-open";
    navBar.style.display = "none";
  }
}
