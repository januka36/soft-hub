/*
<script>
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
</script>
*/

  $(document).ready(function(){
    $("#mycarousel").carousel({interval : 2000});
    $("#carouselButton").click(function(){
      if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
      }
      else if ($("#carouselButton").children("span").hasClass('fa-play')) {
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');
      }
    });
    /*
    $("#carousel-play").click(function(){
      $("#mycarousel").carousel('cycle');
    }); */
  });

  $(document).ready(function(){
    $("#reservebut").click(function () {
      $("#Reserve").modal('show');
  })
  });

  $(document).ready(function(){
    $("#reserveclose").click(function () {
      $("#Reserve").modal('hide');
  })
  });

  $(document).ready(function(){
    $("#loginbutton").click(function () {
      $("#loginModal").modal('show');
  })
  });

  $(document).ready(function(){
    $("#loginclose").click(function () {
      $("#loginModal").modal('hide');
  })
  });
