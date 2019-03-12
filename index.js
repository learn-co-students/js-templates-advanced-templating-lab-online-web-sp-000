function init() {
  let formTemplate = document.getElementById("recipe-form-template").innerHTML;
  let formTemplateFn = Handlebars.compile(formTemplate);
  document.getElementById('main').innerHTML = formTemplateFn({ingredients: ['','','','','']});

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name="ingredients">'+ ingredient + '</li>');
  })
}

function handleSubmit() {
  let recipe = {}
  let nameNode = document.getElementById('name');
  let descriptionNode = document.getElementById('description');
  let ingredientNodes = document.getElementsByName('ingredients');
  recipe.name = nameNode.value;
  recipe.description = descriptionNode.value;
  recipe.ingredients = [];
  for(let i = 0 ; i < ingredientNodes.length ; i++) {
    recipe.ingredients.push(ingredientNodes[i].value);
  }
  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let recipeTemplateFn = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML = recipeTemplateFn(recipe);
}

function displayEditForm() {
  let recipe = {}
  let nameNode = document.getElementById('recipeName');
  let descriptionNode = document.getElementById('recipeDescription');
  let ingredientNodes = document.getElementsByName('ingredients');
  recipe.name = nameNode.innerHTML;
  recipe.description = descriptionNode.innerHTML;
  recipe.ingredients = [];
  for(let i = 0 ; i < ingredientNodes.length ; i++) {
    recipe.ingredients.push(ingredientNodes[i].innerHTML);
  }
  let recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  let recipeFormTemplateFn = Handlebars.compile(recipeFormTemplate);
  document.getElementById('main').innerHTML = recipeFormTemplateFn(recipe);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


// Create a form template with an id of recipe-form-template that will be used to enter new recipes. Configure handlebars to display this template within the main tag (You'll need to do this within the init() function for the tests to work properly). After doing this, your second test will be passing and you'll get meaningful errors on your first. Give the form an id of recipe-form and have it submit with a handleSubmit() function. Provide inputs for recipe name, description, and at least five ingredients. Hint: Get comfy collecting values with getElementsByName(). Also, make sure you give your name and description inputs a matching id (#name & #description). Handlebars Iteration also might be useful here.

