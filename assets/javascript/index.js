$(document).ready(function() {
  //materialize js
  $(".dropdown-button").dropdown();
  $('select').material_select();
  // Initialize collapse button
  $(".button-collapse").sideNav();


  //active ICOs displayed at load
  $(".ActiveICODiv").show();
  $(".UpcomingICODiv").hide();
  $(".RecentICODiv").hide();

  //active ICO display at click
  $( ".activeNav" ).click(function() {
    $(".ActiveICODiv").show();
    $(".UpcomingICODiv").hide();
    $(".RecentICODiv").hide();

  })
  //upcoming ICO display at click
  $( ".upcomingNav" ).click(function() {
    $(".ActiveICODiv").hide();
    $(".UpcomingICODiv").show();
    $(".RecentICODiv").hide();

  });
  //recent ICO display at click
  $( ".recentNav" ).click(function() {
    $(".ActiveICODiv").hide();
    $(".UpcomingICODiv").hide();
    $(".RecentICODiv").show();

  });
});
