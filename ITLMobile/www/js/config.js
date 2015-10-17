//Khai báo route
app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/main/home.html',
      })
      .when('/quote', {
        templateUrl: 'templates/quote/listview.html',
        controller: 'QuotationController'
      })
      .otherwise({
        redirectTo: '/'
      })
  });