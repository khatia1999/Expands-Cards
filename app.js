let panel = document.querySelectorAll(".cards");

panel.forEach((items) => {
  items.addEventListener("click", () => {
    removeAddClases();
    items.classList.add("active");
  });
});

function removeAddClases() {
  panel.forEach((items) => {
    items.classList.remove("active");
    console.log(items);
  });
}
