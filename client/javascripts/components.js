(function(){

  angular
    .module('charlieRun')
    .component('cyAbout',{
      bindings:{
        exit: '<',
        expand: '<',
      },
      controller:'aboutController',
      controllerAs:'vm',
      templateUrl:'../views/about.html'
    })

    .component('cyPortfolio',{
      bindings:{
        exit: '<',
        expand: '<',
      },
      controller:'portfolioController',
      controllerAs:'vm',
      templateUrl:'../views/portfolio.html'
    })

    .component('cyResume',{
      bindings:{
        exit: '<',
        expand: '<',
      },
      controller:'resumeController',
      controllerAs:'vm',
      templateUrl:'../views/resume.html'
    })

    .component('cyContact',{
      bindings:{
        exit: '<',
        expand: '<',
      },
      controller:'contactController',
      controllerAs:'vm',
      templateUrl:'../views/contact.html'
    })

})()