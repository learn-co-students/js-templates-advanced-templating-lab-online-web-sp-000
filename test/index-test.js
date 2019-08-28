describe('Handlebars Templates Lab', function() {
  describe('page', function() {
    before(function() {
      init()
    })

    it('has a recipe form', function() {
      var recipeForm = document.getElementById("recipe-form")
      expect(recipeForm).toExist("Must provide a form with an id of 'recipe-form'")
      expect(recipeForm).toMatch(/onsubmit="handleSubmit()"/)
      var nameField = document.getElementById("name")
      var descriptionField = document.getElementById("description")
      expect(nameField).toExist()
      expect(descriptionField).toExist()
      
    })

});
});  
