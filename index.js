function init() {
  addHelpers()
  addDetailsPartial();
  addFormTemplate();
  addRecipeTemplate();
}

function addFormTemplate() {
  let template = document.getElementById("recipe-form-template").innerHTML;
  let fn = Handlebars.compile(template);
  let html = fn({ ingredients: Array(5).fill({ name: "" }) });
  document.querySelector("main").innerHTML += html;
}

function handleSubmit() {
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let ingredients = [];
  let form = document.getElementById("recipe-form");
  let ingredientFields = form.querySelectorAll("input[name=ingredients]");
  ingredientFields.forEach(i => {
    ingredients.push({ name: i.value });
  });
  recipe = { name: name, description: description, ingredients: ingredients };
}

let recipe;

function addRecipeTemplate() {
  let template = document.getElementById("recipe-template").innerHTML;
  let fn = Handlebars.compile(template);
  let html = fn(recipe);
  document.querySelector("main").innerHTML += html;
}

function addDetailsPartial() {
  Handlebars.registerPartial(
    "recipeDetailsPartial",
    document.getElementById("recipe-details-partial").innerHTML
  );
  Handlebars.registerPartial(
    "ingredientsPartial",
    document.getElementById("ingredients-partial").innerHTML
  );
}

function addHelpers() {
  Handlebars.registerHelper("ingredient_body", function () {
    return new Handlebars.SafeString(`<li>${this.name}</li>`);
  });
}

function displayEditForm() {}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
  mocha.run();
});
