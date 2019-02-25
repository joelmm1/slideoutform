var app = angular.module('app', ['ngMaterial'])

app.controller('AppCtrl', function() {
  this.myDate = new Date();

  this.minDate = new Date(
    this.myDate.getFullYear(),
    this.myDate.getMonth() - 0,
    this.myDate.getDate()
  );

  this.maxDate = new Date(
    this.myDate.getFullYear()+100,
    this.myDate.getMonth(),
    this.myDate.getDate()
  );

});


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

