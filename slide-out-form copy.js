var app = angular.module('app', ['ngMaterial']);

alert(111);

app.controller('HelloController', function($scope) {

  $scope.dataFrom = {
    date: new Date()
  };

  $scope.dataTo = {
    date: new Date()
  };
  
  $scope.submit = function() {
    $scope.dataFrom.dateString = moment($scope.dataFrom.date).format("YYYY-MM-DD");
    $scope.dataTo.dateString = moment($scope.dataTo.date).format("YYYY-MM-DD");
  }
}).run();

$( document ).ready(function() {
      $('.cta-open').on('click', function() {
        $('.toggle-form, .formwrap, .toggle-bg').addClass('active');
        $('.icon-close').addClass('open');
    });
	 $('.icon-close').on('click', function() {
        $('.toggle-form, .formwrap, .toggle-bg').removeClass('active');
        $('.icon-close').removeClass('open');
    });
});

