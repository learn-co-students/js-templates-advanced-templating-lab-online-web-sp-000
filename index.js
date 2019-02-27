function init() {
  //put any page initialization/handlebars initialization here
  const formTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  document.getElementsByTagName("main")[0].innerHTML += formTemplate();

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', (ingredient) => {
    return new Handlebars.SafeString('<li name="ingredients">'+ ingredient + '</li>');
  })
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit() {
  
  let name = document.getElementById('name').value;
  let description = document.getElementById('description').value;
  let ingredients = document.getElementsByClass('ingredients').value;

  const recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = recipeTemplate( { 'name': name });

  const detailsPartial = Handlebars.compile(document.getElementById('recipe-details-partial').innerHTML); 

}
function displayEditForm() {
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

