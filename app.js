var app = angular.module("app", [])
.directive('splat', function() {
  return {
    restrict: 'E',
    controller: 'splatCtrl'
  };
});
