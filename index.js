function init() {
  let formTemplate = document.getElementById("recipe-form-template").innerHTML;
  let formTemplateFn = Handlebars.compile(formTemplate);
  document.getElementById('main').innerHTML = formTemplateFn({ingredients: ['','','','','']});
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name="ingredients">'+ ingredient + '</li>');
  })

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit() {
  let recipe = {}
  let name = document.getElementById('name');
  let description = document.getElementById('description');
  let ingredients = document.getElementsByName('ingredients');
  recipe.name = name.value;
  recipe.description = description.value;
  recipe.ingredients = [];
  for(let i = 0 ; i < ingredients.length ; i++) {
    recipe.ingredients.push(ingredients[i].value);
  }
  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let recipeTemplateFn = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML = recipeTemplateFn(recipe);
}

function displayEditForm() {
  let recipe = {}
  let name = document.getElementById('recipeName');
  let description = document.getElementById('recipeDescription');
  let ingredients = document.getElementsByName('ingredients');
  recipe.name = name.innerHTML;
  recipe.description = description.innerHTML;
  recipe.ingredients = [];
  for(let i = 0 ; i < ingredients.length ; i++) {
    recipe.ingredients.push(ingredients[i].innerHTML);
  }
  let recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  let recipeFormTemplateFn = Handlebars.compile(recipeFormTemplate);
  document.getElementById('main').innerHTML = recipeFormTemplateFn(recipe);
}
