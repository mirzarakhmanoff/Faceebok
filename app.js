const modal = document.querySelector(".next__page");
const btn = document.querySelector(".x-button");
const nextBtn = document.querySelector(".btns");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const submit = document.querySelector(".submit");

btn.addEventListener("click", () => {
  modal.style.display = "none";
});

nextBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  modal.classList.add("overlay");
});

submit.addEventListener("click", () => {
  const names = firstName.value;
  const surname = lastName.value;
  alert(`Hush kelibsiz ${names} ${surname}`);
  modal.style.display = "none";
  firstName.value = "";
  lastName.value = "";
});
