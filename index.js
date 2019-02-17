function init() {
  addFormTemplate();
}

function addFormTemplate() {
  let template = document.getElementById("recipe-form-template").innerHTML;
  let fn = Handlebars.compile(template);
  let html = fn({ ingredients: Array(5).fill({ name: "" })});
  document.querySelector("main").innerHTML += html;
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});
