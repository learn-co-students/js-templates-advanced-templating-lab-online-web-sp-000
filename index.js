function init() {
  addHelpers()
  addPartials();
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

function addPartials() {
  Handlebars.registerPartial(
    "recipeDetailsPartial",
    document.getElementById("recipe-details-partial").innerHTML
  );
  Handlebars.registerPartial(
    "displayIngredient",
    document.getElementById("ingredients-partial").innerHTML
  );
}

function addHelpers() {
  Handlebars.registerHelper("displayIngredient", function () {
    if (!this.name) { 
      debugger
    }
    return new Handlebars.SafeString(`<li name="ingredients">${this.name}</li>`);
  });
}

function displayEditForm() {}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
  mocha.run();
});
