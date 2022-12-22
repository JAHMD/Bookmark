const menuBtn = document.querySelector(".open-btn");
const links = document.querySelectorAll(".navigations ul li");
const overlay = document.querySelector(".overlay");

menuBtn.onclick = () => {
  overlay.classList.toggle("active");
  navControl();
};

links.forEach((link) => {
  link.addEventListener("click", () => {
    overlay.classList.remove("active");
    navControl();
  });
});

function navControl() {
  const icon = menuBtn.firstElementChild;
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.className += " fa-xmark text-white";
  } else {
    icon.classList.remove(..."fa-xmark text-white".split(" "));
    icon.classList.add("fa-bars");
  }
}
