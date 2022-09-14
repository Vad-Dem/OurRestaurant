export const burger = () => {
  const menuBtn = document.querySelector(".header__burgermenu");
  const menu = document.querySelector(".header__menu");
  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("visible");
  });
};
