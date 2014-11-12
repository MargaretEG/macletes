$(document).ready(function(){
  $("button").click(function(){
    $.ajax({url:"testing.html",success:function(result){
      $(".Absolute-Center").html(result);
    }});
  });
});

// <!DOCTYPE html>
// <html>
// <body>


// <input  type="button" value="Hide text" 
// onclick="document.getElementById('p1').style.visibility='hidden'">

// <input id ="p1" type="button" value="Show text"
// onclick="document.getElementById('p1').style.visibility='visible'">

// </body>
// </html>
