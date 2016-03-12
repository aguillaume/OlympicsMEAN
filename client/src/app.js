import angular from 'angular'

angular.module('olympics', [])
.controller('sportsController', function() {
  this.sports = ["Swimming", "Cycling", "Weight Lifting"]
});
