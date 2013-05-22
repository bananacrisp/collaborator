Collaborator = Backbone.Router.extend ({
  routes: {
    "": "index"
  }

  index: function() {
    var index = new IndexView({el: '.main'})
  }
})