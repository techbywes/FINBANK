let mobile_Menu = document.querySelector(".left_container");
let open_menu = document.querySelector(".menu_open_logo");
let close_menu = document.querySelector(".menu_close_logo");
mobile_Menu.classList.add("hidden");
close_menu.classList.add("hidden");
let isOpen = true;

open_menu.addEventListener("click", function () {
  if (isOpen) {
    close_menu.classList.remove("hidden");
    mobile_Menu.classList.remove("hidden");
  } else {
    mobile_Menu.classList.add("hidden");
  }
});

close_menu.addEventListener("click", function () {
    mobile_Menu.classList.add("hidden");
    close_menu.classList.add("hidden");
})
