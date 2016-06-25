(function(){

  angular
    .module('charlieRun',['ngRoute'])
    .config(config);

    function config($routeProvider, $locationProvider){
      $routeProvider
        .when('/',{
          templateUrl:'../views/index.html',
          controller:'mainController',
          controllerAs:'vm'
        })
        .when('/about',{
          templateUrl:'../views/subpage.html',
          controller:'subController',
          controllerAs:'vm'
        })
        .when('/portfolio',{
          templateUrl:'../views/subpage.html',
          controller:'subController',
          controllerAs:'vm'
        })
        .when('/resume',{
          templateUrl:'../views/subpage.html',
          controller:'subController',
          controllerAs:'vm'
        })
        .when('/contact',{
          templateUrl:'../views/subpage.html',
          controller:'subController',
          controllerAs:'vm'
        })
      $locationProvider.html5Mode(true).hashPrefix('*');
      
    }

  config.$inject = ['$routeProvider', '$locationProvider']

})()