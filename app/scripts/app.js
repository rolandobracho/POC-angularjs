'use strict';

/**
 * @ngdoc overview
 * @name capacitacionApp
 * @description
 * # capacitacionApp
 *
 * Main module of the application.
 */
angular
  .module('capacitacionApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'angular-growl'
  ])

.config(function ($stateProvider, $urlRouterProvider) {

//En caso qe alguien ponga una url no mapeada, lo mandamos al login
$urlRouterProvider.otherwise('/login')
$stateProvider

.state('base',{
url:'/',
templateUrl:'views/base.html',
controller:'BaseCtrl',
abstract:true
})
.state('base.login',{
url:'login',
templateUrl:'views/login.html',
controller:'LoginCtrl'
})
.state('base.app',{
url:'',
templateUrl:'views/app.html',
controller:'AppCtrl',
abstract:true
})
.state('base.app.resumen',{
url:'resumen',
templateUrl:'views/resumen.html',
controller:'ResumenCtrl'
})
.state('base.app.ingreso',{
url:'ingreso',
templateUrl:'views/ingreso.html',
controller:'IngresoCtrl'
})

});
