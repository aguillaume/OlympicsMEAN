import angular from 'angular'

angular.module('olympics', [])
.controller('sportsController', function($http) {
  // this.sports = ["Swimming", "Cycling", "Weight Lifting", "Snowbaording"]
  $http.get('/sports').then((response) => {
    this.sports = response.data;
  });
});
