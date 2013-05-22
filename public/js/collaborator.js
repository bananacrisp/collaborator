Group = Backbone.Model.extend({});
Groups = Backbone.Collection.extend({
    model: Group,
    url: '/groups'
});

LoginView = Backbone.View.extend({
  events: {
    'click #login': 'login'
  },
  login: function() {
    var username = $('#username').val();
    var password = $('#password').val();
    $.post('/login', {username: username, password: password}, function (data) {
      collaborator.navigate("groups", {trigger: true});
    });
  },
  render: function() {
    var template = _.template($("#login_template").html(), {});
    this.$el.append(template);
  }
});

SignUpView = Backbone.View.extend({
  events: {
    'click #signup': 'signUp'
  },
  signUp: function() {
    var username = $('#username').val();
    var password = $('#password').val();
    $.post('/sign_up', {username: username, password: password}, function (data) {
      alert(data);
    });
  },
  render: function() {
    var template = _.template($("#signup_template").html(), {});
    this.$el.append(template);
  }
})

IndexView = Backbone.View.extend({
  render: function() {
    var login = new LoginView({el: this.$el});
    var signUp = new SignUpView({el: this.$el});
    signUp.render();
    login.render();
  }
});

GroupsView = Backbone.View.extend({
  initialize: function() {
    this.collection.bind("reset", _.bind(this.renderGroups, this));
    this.collection.fetch();
    console.log('Initialize has run');
  },
  render: function() {
    var template = _.template($("#list_of_groups_template").html(), {});
    this.$el.html(template);
    console.log('The template has rendered');
  },
  renderGroups: function() {
    alert('yay');
    console.log('the render group has fired too!');
  }
});

Collaborator = Backbone.Router.extend ({
  routes: {
    "": "index",
    "groups": "groups"
  },
  index: function() {
    var index = new IndexView({el: '.main'});
      index.render();
  },
  groups: function() {
    var groups = new Groups();
    var groupsView = new GroupsView({el: '.main', collection: groups});
    groupsView.render();
  }
});