$('#slider1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

$('#slider2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
 $( ".owl-prev").html('<img src="images/cprev.png">');
 $( ".owl-next").html('<img src="images/cnext.png">');

function myFunction() {
  event.preventDefault();
  document.getElementById("menu").style.width = "400px";
  $('#toggler-btn').css("display","none");
   
}

/* Set the width of the side navigation to 0 */
function myFunction2() {
  event.preventDefault();
  document.getElementById("menu").style.width = "0";
   $('#toggler-btn').css("display","block");
}



$(function () {
                $('#datetimepicker1').datetimepicker();
            });
$(function () {
                $('#datetimepicker2').datetimepicker();
            });
$(".calender").keypress(function(e) {
    e.preventDefault();
});