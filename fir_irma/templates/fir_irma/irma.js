'use strict';

angular.module('irma', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'angularFileUpload',
  'mgcrea.ngStrap',
  'mgcrea.ngStrap.helpers.dimensions',
  'jsonFormatter',
  'angular-capitalize-filter',
  'angularMoment',
  'ngTable',
  'angular-svg-round-progress'
])
  .constant('constants', {
    fakeDelay: 0,
    baseApi: '{% url "irma:api:base" %}'.slice(0, - 1),
    baseUi: '{% url "irma:ui:index" sub="" %}',
    speed: 1500,
    refresh: parseInt('{{refresh}}'),
    forceScanDefault: ( '{{ perms.fir_irma.can_force_scan|yesno:"true,false" }}' == "true"),
    scanStatusCodes: {
      STOPPED: 0,
      RUNNING: 1,
      FINISHED: 2
    }
  })
  .constant('angularMomentConfig', {
    preprocess: 'unix'
  })
  .config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  })
  .config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
  })
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('{% url "irma:ui:index" sub="selection" %}', {
        templateUrl: '{% url "irma:ui:view" name="selection" %}',
        controller: 'SelectionCtrl',
        controllerAs: 'vm',
        location: 'selection',
        resolve: {
          maintenance: ['state', function(state){ return state.pingApi();}]
        }
      })
      .when('{% url "irma:ui:index" sub="upload" %}', {
        templateUrl: '{% url "irma:ui:view" name="upload" %}',
        controller: 'UploadCtrl',
        location: 'upload',
        resolve: {
          maintenance: ['state', function(state){ return state.pingApi();}]
        }
      })
      .when('{% url "irma:ui:index" sub="" %}scan/:scan', {
        templateUrl: '{% url "irma:ui:view" name="scan" %}',
        controller: 'ScanCtrl',
        controllerAs: 'vm',
        location: 'scan',
        resolve: {
          maintenance: ['state', function(state){ return state.pingApi();}]
        }
      })
      .when('{% url "irma:ui:index" sub="" %}scan/:scanId/file/:fileIdx', {
        templateUrl: '{% url "irma:ui:view" name="details" %}',
        controller: 'DetailsCtrl',
        controllerAs: 'vm',
        location: 'results',
        resolve: {
          maintenance: ['state', function(state){ return state.pingApi();}]
        }
      })
      .when('{% url "irma:ui:index" sub="search" %}', {
        templateUrl: '{% url "irma:ui:view" name="search" %}',
        controller: 'SearchCtrl',
        controllerAs: 'vm',
        location: 'search',
        resolve: {
          maintenance: ['state', function(state){ return state.pingApi();}]
        }
      })
      .when('{% url "irma:ui:index" sub="maintenance" %}',
       {
        templateUrl: '{% url "irma:ui:view" name="maintenance" %}',
        controller: 'MaintenanceCtrl',
        resolve: {
          maintenance: ['state', function(state){ return state.noPingApi();}]
        }
      })
      .otherwise({ redirectTo: '{% url "irma:ui:index" sub="selection" %}' });
  }])
  .run(['$window', '$rootScope', '$location', '$anchorScroll', function($window, $rootScope, $location, $anchorScroll) {

    var bodyElement = angular.element($window.document.body);
    var targetElement = bodyElement;

    targetElement.on('click', function(evt) {
      var el = angular.element(evt.target);
      var hash = el.attr('href');

      if(!hash || hash[0] !== '#') { return; }
      if(hash.length > 1 && hash[1] === '/') { console.log('intercept for', hash);return; }
      if(evt.which !== 1) { return; }console.log('No intercept for', hash);

      evt.preventDefault();

      $location.hash(hash.substr(1));
      $anchorScroll();
    });

    setTimeout(function() {
      $anchorScroll();
    }, 0);
  }]);
