// AOS.init({ disable: 'mobile' });
// $(function(){ 
//   var navMain = $(".navbar-collapse"); // avoid dependency on #id
//   // "a:not([data-toggle])" - to avoid issues caused
//   // when you have dropdown inside navbar
//   navMain.on("click", "a:not([data-toggle])", null, function () {
//       navMain.collapse('hide');
//   });
// });

$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});