function init() {
    //put any page initialization/handlebars initialization here

    let formTemplate =Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
    let formHtml = formTemplate({ingredients: [" "," "," "," "," "]});
    document.getElementsByTagName("main")[0].innerHTML += formHtml;
  
    Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
    Handlebars.registerHelper('displayIngredient', function (ingredient) {
        return new Handlebars.SafeString(this);
    });
  }
  document.addEventListener("DOMContentLoaded", function(event) {
    init()
  })

  init();
  
  function handleSubmit(){
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
  let recipeHtml= recipeTemplate(recipe);
  document.getElementsByTagName("main")[0].innerHTML = recipeHtml;

  }

  