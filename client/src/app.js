import angular from 'angular'
import 'angular-ui-router'

angular.module('olympics', ["ui.router"])
.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/sports')

  $stateProvider
  .state('sports', {
    url: '/sports',
    templateUrl: 'sports/sports-nav.html',
    resolver: { //prevents the template to load before all the data is generated. so that the user does not see a pair of {{}} for a split second.
      sportsService: function($http) {
        return $http.get('/sports');
        });
      }
    },
    controller: function(sportsService) {
        this.sports = sportsService.data;.
    },
    controllerAs: 'sportsCtrl'
  })
  .state('sports.medals', {
    url: '/:sportName',
    templateUrl: 'sports/sports-medals.html'
  })
})
