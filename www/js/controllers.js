angular.module('starter.controllers', [])
//////////////////////////////////////////////////////
.controller('MapCtrl', function($scope, $ionicLoading) {
		
		$scope.showLocation = function(position) {
			$scope.latitude = position.coords.latitude;
			$scope.longitude = position.coords.longitude;
        	console.log('Latitude : '+ $scope.latitude +' - Longitude : '+ $scope.longitude);
			socket.emit('flag', {
				lat: $scope.latitude.toString(),
				lng: $scope.longitude.toString(),
				status: "safe"
			})
    	};

    	$scope.showLocation2 = function(position) {
			$scope.latitude = position.coords.latitude;
			$scope.longitude = position.coords.longitude;
        	console.log('Latitude : '+ $scope.latitude +' - Longitude : '+ $scope.longitude);
			socket.emit('flag', {
				lat: $scope.latitude.toString(),
				lng: $scope.longitude.toString(),
				status: "unsafe"
			})
    	};

		$scope.addSafeMarker = function() {
			console.log("ajout du safe marqueur en cours");
			navigator.geolocation.getCurrentPosition(showLocation, function() {
				return 0;
			});
		};

		$scope.addUnSafeMarker = function() {
			console.log("ajout du unsafe marqueur en cours");
			navigator.geolocation.getCurrentPosition(showLocation2, function() {
				return 0;
			});
		}

		$scope.isBlessed = function() {
			console.log("la personne est blesser");
			socket.emit('vital_status', {
				vital_status: "blessed"
			})
		}

		$scope.isFine = function() {
			console.log("la personne va bien");
			socket.emit('vital_status', {
				vital_status: "fine"	
			})
		}

		$scope.isMovable = function() {
			console.log("la personne peut se deplacer");
			socket.emit('move_status', {
				move_status: "yes"	
			})
		}

		$scope.isNotMovable = function() {
			console.log("la personne ne peut pas se deplacer");
			socket.emit('move_status', {
				move_status: "no"	
			})
		}

		$scope.canFlee = function() {
			console.log("la personne veut recevoir un itineraire gps d'une personne a proximiter");
			socket.emit('flee_status', {
				flee_status: ""
			})
		}

		$scope.cantFlee = function() {
			console.log("la personne veut rester cacher");
			socket.emit('flee_status', {
				flee_status: ""
			})
		}







})

			/*navigator.geolocation.getCurrentPosition(function (pos) {
				console.log('Got pos', pos);
				$scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
				$scope.loading.hide();
			}, function (error) {
				alert('Unable to get location: ' + error.message);
			});

			navigator.geolocation.getCurrentPosition(function (pos) {
				console.log('position?', pos);
				$scope.latitude = pos.coords.latitude;
				$scope.longitude = pos.coords.longitude;
				console.log($scope.latitude);
				console.log($scope.longitude);
				$scope.coord = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
				$scope.marker = new google.maps.Marker({
					icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
					position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
					animation: google.maps.Animation.DROP,
					map: $scope.map
				});
			}, function(error) {
				alert('Unable to get location: ' + error.message);
			})
			socket.emit('flag', {
				lat: $scope.latitude.toString(),
				lng: $scope.longitude.toString(),
				status: "safe"
			})*/
		/*$scope.addUnSafeMarker = function() {
			console.log("ajout du safe marqueur en cours");

			navigator.geolocation.getCurrentPosition(function (pos) {
				console.log('Got pos', pos);
				$scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
				$scope.loading.hide();
			}, function (error) {
				alert('Unable to get location: ' + error.message);
			});

			navigator.geolocation.getCurrentPosition(function (pos) {
				console.log('position?', pos);
				$scope.latitude = pos.coords.latitude;
				$scope.longitude = pos.coords.longitude;
				$scope.coord = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
				$scope.marker = new google.maps.Marker({
					icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
					position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
					animation: google.maps.Animation.DROP,
					map: $scope.map
				});
			}, function (error) {
				alert('Unable to get location: ' + error.message);
			})
			socket.emit('flag', {
				lat: $scope.latitude.toString(),
				lng: $scope.longitude.toString(),
				status: "unsafe"
			})
		}
	};*/
/////////////////////////////////////////////////////////
.controller('homeCtrl', function() {

})
/////////////////////////////////////////////////////////
.controller('securiteCtrl', function($scope, $ionicLoading) {
	$scope.loading = $ionicLoading.show({
		content: 'Veuillez patienter nous essayons d\'envoyer les informations sur le serveur',
	showBackdrop: true
	});
})
////////////////////////////////////////////////////////
.controller('AppController', function($scope) {
	$scope.leftButtons = [{
		type: 'button-icon icon ion-navicon',
tap: function(e) {
	$scope.sideMenuController.toggleLeft();
}
}];
})
/////////////////////////////////////////////////////////
.controller('Page1Controller', function($scope) {

})

.controller('Page2Controller', function($scope) {

    $scope.leftButtons = [{
        type: 'button-icon icon ion-navicon',
        tap: function(e) {
            $scope.sideMenuController.toggleLeft();
        }
    }];
    $scope.danger = function() {

    }

});
