// $(document).ready(function(){
//   $("button").click(function(){
//     $.ajax({url:"testing.html",success:function(result){
//       $(".Absolute-Center").html(result);
//     }});
//   });
// });

// <!DOCTYPE html>
// <html>
// <body>


// <input  type="button" value="Hide text" 
// onclick="document.getElementById('p1').style.visibility='hidden'">

// <input id ="p1" type="button" value="Show text"
// onclick="document.getElementById('p1').style.visibility='visible'">

// </body>
// </html>
// Class to represent a row in the seat reservations grid
// Class to represent a row in the seat reservations grid

// Class to represent a row in the seat reservations grid
function SeatReservation(lift, max) {
    var self = this;
    self.lift = lift;
    self.max = max;
}

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
    var self = this;

    
    // Editable data
    self.maxes = ko.observableArray([
        new SeatReservation("Steve", "dfa"),
        new SeatReservation("Bert", "self.availableMeals[0]")
    ]);

    
    // Operations
    self.addMax = function() {
        self.maxes.push(new SeatReservation("", ""));
    }
}

ko.applyBindings(new ReservationsViewModel());


 $(document).ready(function(){

    $("#edit").click(function(){
        $(".information").hide();
        $(".informationEdit").show();

    $("#done").click(function(){
            $(".information").hide();
		$(".informationEdit").show();
});
	});	});