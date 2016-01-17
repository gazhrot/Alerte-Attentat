angular.module('starter.controllers', [])
//////////////////////////////////////////////////////
.controller('MapCtrl', function($scope, $ionicLoading) {
	$scope.mapCreated = function(map) {
		$scope.map = map;
	};
	$scope.addSafeMarker = function() {
		$scope.statut = Safe.getStatut();
		console.log("ajout du safe marqueur en cours");

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
				/*animation: google.maps.Animation.DROP,*/
				map: $scope.map
			});
		}, function(error) {
			alert('Unable to get location: ' + error.message);
		})
		socket.emit('flag', {
			lat: $scope.latitude.toString(),
			lng: $scope.longitude.toString(),
			status: "safe"
		})
	}
	$scope.addUnSafeMarker = function() {
		$scope.statut = Safe.getStatut();
		console.log("ajout du safe marqueur en cours");

		navigator.geolocation.getCurrentPosition(function (pos) {
			console.log('position?', pos);
			$scope.coord = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
			$scope.marker = new google.maps.Marker({
				icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
				position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
				/*animation: google.maps.Animation.DROP,*/
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
	$scope.centerOnMe = function () {
		console.log("Centering");
		if (!$scope.map) {
			return;
		}

		$scope.loading = $ionicLoading.show({
			content: 'Getting current location...',
			showBackdrop: true
		});

		navigator.geolocation.getCurrentPosition(function (pos) {
			console.log('Got pos', pos);
			$scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
			$scope.loading.hide();
		}, function (error) {
			alert('Unable to get location: ' + error.message);
		});
	};
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
});
