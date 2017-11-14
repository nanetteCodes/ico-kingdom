$(document).ready(function() {
  //materialize js
  $(".dropdown-button").dropdown();
  $('select').material_select();
  $('.modal').modal();
  // Initialize collapse button
  $(".button-collapse").sideNav({
    edge: 'right', // Choose the horizontal origin
  });


  //active ICOs displayed at load
  $(".ActiveICODiv").show();
  $(".UpcomingICODiv").hide();
  $(".RecentICODiv").hide();

  //active ICO display at click
  $( ".activeNav" ).click(function() {
    $(".ActiveICODiv").show();
    $(".UpcomingICODiv").hide();
    $(".RecentICODiv").hide();
    $('.button-collapse').sideNav('hide');

  })
  //upcoming ICO display at click
  $( ".upcomingNav" ).click(function() {
    $(".ActiveICODiv").hide();
    $(".UpcomingICODiv").show();
    $(".RecentICODiv").hide();
    $('.button-collapse').sideNav('hide');

  });
  //recent ICO display at click
  $( ".recentNav" ).click(function() {
    $(".ActiveICODiv").hide();
    $(".UpcomingICODiv").hide();
    $(".RecentICODiv").show();
    $('.button-collapse').sideNav('hide');
  });
});
