function init() {
    //put any page initialization/handlebars initialization here
  
    
    let formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
    let formHtml = formTemplate({ingredients: ["","","","",""]});
    document.getElementsByTagName("main")[0].innerHTML = formHtml;
  
    // register partials and helpers
    Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
    Handlebars.registerHelper('displayIngredient', function(ingredient) {
      return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>');
    });
  }
  
  document.addEventListener("DOMContentLoaded", function(event) {
    init();
  })
  
  function handleSubmit() {
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let ingredients = document.getElementsByName("ingredients");
  
    let recipe = {};
    recipe.name = name;
    recipe.description = description;
    recipe.ingredients = [];
    for(let i = 0; i < ingredients.length; i++) {
      recipe.ingredients.push(ingredients[i].value);
    }
  
    let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    let recipeHTML = recipeTemplate(recipe);
    document.getElementsByTagName("main")[0].innerHTML = recipeHTML;
  }
  
  function displayEditForm() {
    let recipeName = document.getElementById("recipeName").innerHTML;
    let recipeDescription = document.getElementById("recipeDescription").innerHTML;
    let recipeIngredients = document.getElementsByName("ingredients");

    let recipe = {};
    recipe.name = recipeName;
    recipe.description = recipeDescription;
    recipe.ingredients = [];
    for(let i = 0; i < recipeIngredients.length; i++) {
        recipe.ingredients.push(recipeIngredients[i].innerHTML);
    }
  
    let editRecipeTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
    let recipeFormHtml = editRecipeTemplate(recipe);
    document.getElementsByTagName("main")[0].innerHTML = recipeFormHtml;
  }