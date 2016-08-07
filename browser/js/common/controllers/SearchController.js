app.controller('SearchCtrl', function($scope, BusinessFactory, EventFactory){

	var bTotal;
	navigator.geolocation.getCurrentPosition(function(position){
		var pos = {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude
		}
		BusinessFactory.fetchAll({position: pos})
		.then(businesses => {
			console.log("GOTBACK!!!", businesses);
		})
	})

	BusinessFactory.fetchAll({})
	.then(businesses => {
		console.log("business in factory", businesses);
		bTotal = {
			within5: businesses.within5 || [],
			within10: businesses.within10 || [],
			within15: businesses.within15 || [],
			within20: businesses.within20 || []
		}
		$scope.businesses = [];
		for(var group in bTotal){
			$scope.businesses = $scope.businesses.concat(bTotal[group]);
		}
		setEvents();
		$scope.$watch('limit', function(){
			if($scope.limit === 5){
				$scope.businesses = bTotal.within5;
				setEvents();
			}else if($scope.limit === 10){
				$scope.businesses = bTotal.within5.concat(bTotal.within10);
				setEvents();
			}else if ($scope.limit === 15){
				$scope.businesses = bTotal.within5.concat(bTotal.within10, bTotal.within15);
				setEvents();
			}else{
				$scope.businesses = bTotal.within5.concat(bTotal.within10, bTotal.within15, bTotal.within20);
				setEvents();
			}
		})

	})

	function setBusinesses(){

	}
	
	function setEvents(){
		var businessIds = $scope.businesses.map(b=>b.id)
		EventFactory.fetchAll({businessId:
			businessIds
		})
		.then(function(events){
			$scope.events = events.filter(event=> !event.isPast);
		})
	}

})
