(function(){
	angular
		.module('charlieRun')
		.controller("mainController", mainController)
		.controller("subController", subController)
		.controller("aboutController", aboutController)
		.controller("portfolioController", portfolioController)
		.controller("resumeController", resumeController)
		.controller("contactController", contactController)

	function mainController($interval){
		let vm = this;
		vm.msg = "main";
		vm.skills= ['EXPRESS','NODE','ANGULAR','REACT'];

		let idx=0,
				n=0,
				up=true;

		$interval(function(){
			let word = vm.skills[idx];
			let ln = word.length;

			if(up){
				vm.type = word.slice(0,n);
				n++
			};
			if(n==ln+1){up=false};
			if(!up){
				vm.type = word.slice(0,n);
				n--
			};
			if(n==0){
				up=true;
				idx++
			};
			if(idx==vm.skills.length){idx=0}
		}, 200)
	}

	function subController($location, $timeout){
		let vm = this;
		vm.msg = "sub";
		vm.current = $location.path()
		vm.expand = false;

		vm.exit = function(){
			vm.expand = false;

			$timeout(function(){
				$location.path('/');
			}, 1000);
		}

		$timeout(function(){
			vm.expand = true;
		}, 10);
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

		vm.latest = true;
		vm.mockup = false;
		vm.codepen = false;
		vm.showContent = function(item){
			if(item == 'latest'){
				vm.latest = true;
				vm.mockup = false;
				vm.codepen = false;
			}
			if(item =='mockup'){
				vm.latest = false;
				vm.mockup = true;
				vm.codepen = false;
			}
			if(item =='codepen'){
				vm.latest = false;
				vm.mockup = false;
				vm.codepen = true;
			}
		}
		
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