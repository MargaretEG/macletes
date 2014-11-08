// Class to represent a row in the seat reservations grid
function PDF(date,name) {
    var self = this;
    self.date = date;
    self.name = name;

}

// Overall viewmodel for this screen, along with initial state
function PDFListViewModel() {
    var self = this;

    // Editable data
    self.pdfs = ko.observableArray([
        new PDF("10/2/12", "week4 lasdafssssssssssift"),
        new PDF("11/12/03", "demos")
    ]);
   
    //create date of upload
    var d = new Date();
        var day = d.getDate();
        var year = d.getFullYear();
        var month = d.getMonth();

    var createDate = month+"/"+day+"/"+year;

    // Operations
    self.addPDF = function() {
        self.pdfs.push(new PDF(createDate, ""));
    }
}

ko.applyBindings(new PDFListViewModel());




