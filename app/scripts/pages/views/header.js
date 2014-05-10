'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var tpl = require('../../../templates/header.hbs');

var View = Backbone.View.extend({
  
  className: 'header',

  initialize: function () {
    // this.collection.on('change', this.render, this);
    // this.model.on('change', this.render, this);
  },

  links: [], // TODO make a model

  addLink: function (link) {

    var defaults = {
      href: '#',
      title: 'link'
    };

    link = _.defaults(link, defaults);
    this.links.push(link)
  },

  render: function () {
    this.addLink({href: '/', title: 'Home'});
    this.addLink({href: '/about', title: 'About'});

    var html = tpl({links: this.links, brand: 'Bootstrap Seed'});
    
    this.$el.append(html);
    return this;
  }
});

module.exports = View;