console.log("Alo");
const cards = document.getElementsByClassName("card");
const icons = document.querySelectorAll(".heart-icon");

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function () {
    cards[i].classList.toggle("active");
    icons[i].classList.toggle('filled')
  });
}

