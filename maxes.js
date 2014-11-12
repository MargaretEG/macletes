$(document).ready(function(){
  $("button").click(function(){
    $.ajax({url:"testing.html",success:function(result){
      $(".Absolute-Center").html(result);
    }});
  });
});

// $( ".Absolute-Center" ).load( "testing.html #knocked" );
