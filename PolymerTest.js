
Router.route('/page1', function () {
  this.render('page1');
});

Router.route('/page2', function () {
  this.render('page2');
});

Router.route('/', function () {
  this.render('page1');
});

if (Meteor.isClient) {

  Meteor.startup(function () {
    console.log('Meteor startup')

    window.addEventListener('WebComponentsReady', function () {
      console.log('WebComponentsReady');
    });

  });
}



