//Khai báo route
app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<h1>Xin chào, tôi là trang chủ</h1>',
      })
      .when('/quote', {
        templateUrl: 'templates/quote/listview.html',
        controller: 'QuotationController'
      })
      .otherwise({
        redirectTo: '/'
      })
  });