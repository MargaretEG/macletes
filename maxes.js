function SeatReservation(lift, max) {
    var self = this;
    self.lift = lift;
    self.max = max;
}

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
    var self = this;


self.dropdown = function() {
    [
        { class: "Standard (sandwich)" },
        { class: "Premium (lobster)" },
        { class: "Ultimate (whole zebra)" }
    ];    
    };
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

