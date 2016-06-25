(function(){

  angular
    .module('charlieRun')
    .component('cyAbout',{
      bindings:{},
      controller:'aboutController',
      controllerAs:'vm',
      templateUrl:'../views/about.html'
    })

    .component('cyPortfolio',{
      bindings:{},
      controller:'portfolioController',
      controllerAs:'vm',
      templateUrl:'../views/portfolio.html'
    })

    .component('cyResume',{
      bindings:{},
      controller:'resumeController',
      controllerAs:'vm',
      templateUrl:'../views/resume.html'
    })

    .component('cyContact',{
      bindings:{},
      controller:'contactController',
      controllerAs:'vm',
      templateUrl:'../views/contact.html'
    })

})()