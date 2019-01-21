function init() {
  //put any page initialization/handlebars initialization here
  const formTemplate = document.getElementById("recipe-form-template").innerHTML;
  const formTemplateFn = Handlebars.compile(formTemplate);
  document.getElementById('main').innerHTML = formTemplateFn({ingredients: ['', '', '', '', '']});

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>');
  })
}

function handleSubmit() {
  const recipe = {};
  const nameElement = document.getElementById('name');
  const descriptionElement = document.getElementById('description');
  const ingredientElements = document.getElementsByName('ingredients');
  recipe.name = nameElement.value;
  recipe.description = descriptionElement.value;
  recipe.ingredients = [];
  for(let i = 0; i < ingredientElements.length; i++) {
    recipe.ingredients.push(ingredientElements[i].value);
  }
  const recipeTemplate = document.getElementById("recipe-template").innerHTML;
  const recipeTemplateFn = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML = recipeTemplateFn(recipe);
}

function displayEditForm() {
  const recipe = {};
  const nameElement = document.getElementById('recipeName');
  const descriptionElement = document.getElementById('recipeDescription');
  const ingredientElements = document.getElementsByName('ingredients');
  recipe.name = nameElement.innerHTML;
  recipe.description = descriptionElement.innerHTML;
  recipe.ingredients = [];
  for(let i = 0; i < ingredientElements.length; i++) {
    recipe.ingredients.push(ingredientElements[i].innerHTML);
  }
  const recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  const recipeFormTemplateFn = Handlebars.compile(recipeFormTemplate);
  document.getElementById('main').innerHTML = recipeFormTemplateFn(recipe);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
