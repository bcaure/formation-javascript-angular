  // DOM element where the Timeline will be attached
  var container = document.getElementById('visualization');

  // Create a DataSet (allows two way data-binding)
  let i = 0;
  var items = new vis.DataSet([
  {id: i++, content: 'Mosaic', start: '1993-01-01', end: '1993-01-01', group: 1},
  {id: i++, content: 'ECMAScript 1', className: 'magenta', start: '1997-01-01', group: 1},
  {id: i++, content: 'ES4', className: 'magenta', start: '2005-01-01', group: 1},
  {id: i++, content: 'Ajax (XHR)', start: '2006-01-01', group: 1},
  {id: i++, content: 'ES5', start: '2009-01-01', className: 'magenta', group: 1},
  {id: i++, content: 'Workers', start: '2010-01-01', group: 1},
  {id: i++, content: 'Web sockets', start: '2011-01-01', group: 1},
  {id: i++, content: 'ES6', start: '2015-01-01', className: 'magenta', group: 1},
  {id: i++, content: 'ES2016', start: '2016-01-01', className: 'magenta', group: 1},
  {id: i++, content: 'ES2017', start: '2017-01-01', className: 'magenta', group: 1},
  {id: i++, content: 'HTML5', start: '2010-01-01', className: 'green important', group: 1},  

  {id: i++, content: 'Netscape Navigator', start: '1994-01-01', className: 'browser netscape', end: '2000-12-31', group: 2},
  {id: i++, content: 'Microsoft Internet Explorer', start: '1995-01-01', className: 'browser ie', end: '2015-12-31', group: 2},
  {id: i++, content: 'Adobe Flash - ActionScript', start: '1997-01-01', className: 'green', end: '2009-12-31', className: 'browser flash', group: 2},  
  {id: i++, content: 'Mozilla Firefox', start: '2005-01-01', end: '2015-12-31', className: 'browser firefox', group: 2},
  {id: i++, content: 'Google Chrome', start: '2010-01-01', end: '2017-12-31', className: 'browser chrome', group: 2},
  {id: i++, content: 'Safari', start: '2010-01-01', end: '2017-12-31', className: 'browser safari', group: 2},

  {id: i++, content: 'script.aculo.us', start: '2005-01-01', group: 3},
  {id: i++, content: 'Dojo toolkit', start: '2005-01-01', group: 3},
  {id: i++, content: 'JQuery', start: '2006-01-01', className: 'important', group: 3},
  {id: i++, content: 'YUI (Ext.js)', start: '2006-01-01', group: 3},
  {id: i++, content: 'GWT', start: '2006-01-01', group: 3},
  {id: i++, content: 'JQuery UI', start: '2007-01-01', group: 3},
  {id: i++, content: 'AngularJS', start: '2009-01-01', className: 'important', group: 3},
  {id: i++, content: 'Knockout.js', start: '2010-01-01', group: 3},
  {id: i++, content: 'Backbone.js', start: '2010-01-01', group: 3},
  {id: i++, content: 'Bootstrap', start: '2011-01-01', className: 'important', group: 3},
  {id: i++, content: 'Ember.js', start: '2011-01-01', className: 'important', group: 3},
  {id: i++, content: 'KendoUI', start: '2011-01-01', group: 3},
  {id: i++, content: 'Cordova', start: '2011-01-01', group: 3},
  {id: i++, content: 'React.js', start: '2013-01-01', className: 'orange important', group: 3},
  {id: i++, content: 'Vue.js', start: '2014-01-01', className: 'orange', group: 3},
  {id: i++, content: 'Aurelia.js', start: '2014-01-01', group: 3},
  {id: i++, content: 'Polymer', start: '2014-01-01', className: 'orange', group: 3},
  {id: i++, content: 'Angular', start: '2016-01-01', className: 'orange important', group: 3},
  {id: i++, content: 'RxJs', start: '2014-01-01', className: 'blue', group: 3},
  {id: i++, content: 'Redux', start: '2015-06-01', className: 'blue', group: 3},
  {id: i++, content: 'Flux', start: '2015-01-01', className: 'blue', group: 3},

  {id: i++, content: 'Node.js', start: '2009-01-01', className: 'orange important', group: 4},
  {id: i++, content: 'Express.js', start: '2010-01-01', className: 'orange', group: 4},
  {id: i++, content: 'Socket.io', start: '2012-01-01', group: 4},
  {id: i++, content: 'Meteor', start: '2012-01-01', group: 4},
  {id: i++, content: 'Three.js', start: '2010-01-01', group: 4},
  {id: i++, content: 'Casper (PhantomJS)', start: '2011-01-01', group: 4},
  {id: i++, content: 'D3.js', start: '2011-01-01', group: 4},

  ]);

  // Groups
  // Optional: a field 'className', 'style', 'order', [properties]
  var groups = [
    { id: 4, content: 'Other (backend, tools)', order: 1 },    
    { id: 3, content: 'Frontend', order: 2 },    
    { id: 1, content: 'Specification', order: 3 },
    { id: 2, content: 'Reference Implementation', order: 4 },
  ]; 

  // Configuration for the Timeline
  var options = {orientation: 'top'};

  // Create a Timeline
  var timeline = new vis.Timeline(container, items, groups, options);