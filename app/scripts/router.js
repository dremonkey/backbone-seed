'use strict';

// ## Module Dependencies
var Backbone = require('backbone');
var vm = require('./vm');

var HomeView = require('./pages/views/home');

// Setup the routers
var AppRouter = Backbone.Router.extend({
  routes: {
    // Default - catch all
    '*actions': 'defaultAction'
  }
});

var initialize = function (options) {
  var appView = options.appView;
  var router = new AppRouter(options);

  router.on('route:defaultAction', function () {
    var homeView = vm.create(appView, 'HomeView', HomeView);
    appView.$('#region-main').html(homeView.render().el);
  });

  Backbone.history.start();
};


module.exports.initialize = initialize;
