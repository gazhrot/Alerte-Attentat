angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives'])

.run(function($ionicPlatform)
{
    $ionicPlatform.ready(function()
    {
        if(window.StatusBar)
        {
            StatusBar.styleDefault();
        }
    });
})
.config(['$locationProvider', function($locationProvider) {
    if(window.history && window.history.pushState) {
        $locationProvider.html5Mode(true);
    }
}])
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('home', {
            url: "/home",
            templateUrl: "templates/home.html",
            controller : "Page1Controller"
        })

        .state('securite', {
            url: "/securite",
            templateUrl: "templates/securite.html",
            controller : "Page2Controller"
        })

        .state('danger', {
            url: "/danger",
            templateUrl: "templates/danger.html",
            controller : "Page2Controller"
        })

        .state('shelter', {
            url: "/shelter",
            templateUrl: "templates/shelter.html",
            controller : "Page2Controller"
        })

        .state('temoignage', {
            url: "/temoignage",
            templateUrl: "templates/temoignage.html",
            controller : "Page2Controller"
        })

        .state('fuire', {
            url: "/fuire",
            templateUrl: "templates/fuire.html",
            controller : "Page2Controller"
        })

        .state('cacher', {
            url: "/cacher",
            templateUrl: "templates/cacher.html",
            controller : "Page2Controller"
        });



    $urlRouterProvider.otherwise("/home");

});