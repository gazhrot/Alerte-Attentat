angular.module('starter.controllers', [])
//////////////////////////////////////////////////////
.controller('MapCtrl', function($scope, $ionicLoading) {
  $scope.mapCreated = function(map) {
    $scope.map = map;
  };

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
            if ($scope.)
            {

            }
            $scope.sideMenuController.toggleLeft();
        }
    }];
    $scope.danger = function() {

    }

});