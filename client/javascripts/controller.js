(function(){
	angular
		.module('charlieRun')
		.controller("mainController", mainController)
		.controller("subController", subController)
		.controller("aboutController", aboutController)
		.controller("portfolioController", portfolioController)
		.controller("resumeController", resumeController)
		.controller("contactController", contactController)

	function mainController(){
		let vm = this;
		vm.msg = "main";
	}

	function subController($location){
		let vm = this;
		vm.msg = "sub";
		vm.current = $location.path()

	}

	function aboutController($location){
		let vm = this;
		vm.msg = "about";
		vm.current = $location.path()

	}

	function portfolioController($location){
		let vm = this;
		vm.msg = "portfolio";
		vm.current = $location.path()


	}

	function resumeController($location){
		let vm = this;
		vm.msg = "resume";
		vm.current = $location.path()


	}

	function contactController($location){
		let vm = this;
		vm.msg = "contact";
		vm.current = $location.path()


	}


})()