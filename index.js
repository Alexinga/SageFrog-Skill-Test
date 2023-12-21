const hamIcon = document.querySelector(".hamIcon");
const mobileMenu = document.querySelector(".mobileMenu");
const closeNav = document.querySelector(".menuClose");
const employeeModal = document.querySelector(".modalStyle");
const viewMoreBtn = document.querySelector(".gridContainer");
const closeModal = document.querySelector(".close");
function openNavMenu() {
  mobileMenu.classList.add("active");
}
function closeNavMenu() {
  mobileMenu.classList.remove("active");
}
function openEmployeeModal() {
  employeeModal.classList.add("active");
}
function closeEmployeeModal() {
  employeeModal.classList.remove("active");
}
hamIcon.addEventListener("click", openNavMenu);
closeNav.addEventListener("click", closeNavMenu);
viewMoreBtn.addEventListener("click", openEmployeeModal);
closeModal.addEventListener("click", closeEmployeeModal);
