
function openNav() {
    document.getElementById("nav").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("nav").style.width = "0%";
  }

  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
/*sectio-5 */
  $(document).ready(function() {
    $('#Carousel').carousel({
        interval: 5000
    })
});
