// Class to represent a row in the seat reservations grid
function SeatReservation(date, title, discription) {
    var self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);

    self.formattedPrice = ko.computed(function() {

        var d = new Date();
        var day = d.getDate();
        var year = d.getFullYear();
        var month = d.getMonth();

        var price = self.meal().price;
        return price ? "$" + price.toFixed(2) : month+" "+day+" "+year;        
    });    
}

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
    var self = this;

    // Non-editable catalog data - would come from the server
    self.availableMeals = [
        { mealName: "Standard (sandwich)", price: 0 },
        { mealName: "Premium (lobster)", price: 34.95 },
        { mealName: "Ultimate (whole zebra)", price: 290 }
    ];    

    // Editable data
    self.seats = ko.observableArray([
        new SeatReservation("Steve", self.availableMeals[0]),
        new SeatReservation("Bert", self.availableMeals[0])
    ]);

    // Computed data
    self.totalSurcharge = ko.computed(function() {
       var total = 0;
       for (var i = 0; i < self.seats().length; i++)
           total += self.seats()[i].meal().price;
       return total;
    });    

        var d = new Date();
        var day = d.getDate();
        var year = d.getFullYear();
        var month = d.getMonth();

    var createDate = month+" "+day+" "+year;
   
    // Operations
    self.addPDF = function() {
        self."PDF's".push(new SeatReservation(createDate,"","");
    }
    self.removeSeat = function(seat) { self.seats.remove(seat) }
}



ko.applyBindings(new ReservationsViewModel());


<th rowspan="3">
            <textarea data-bind="value: description" rows="3" cols="25">h</textarea></th><td></td>



