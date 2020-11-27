//Calculate average GPA of 5 classes. 
//If avereage GPA >= 3.5, show acceptance message.
//Else thank for applying. 
var consolationMessage = "<p>Thank you for your interest in this program. Unfortunately at this time, " +
    "we are unable to continue with your application due to our strict GPA standards. Please try again " +
    "at a later time.";

var acceptanceMessage = "Congratulations! Based on your GPA, we will move forward with your application " +
    "for this prestigious internship program."

    //get the gpa
    function getGPA() {
        var gpaTotal = null,
            message = null,
            classes = ['Foundation', 'Database', 'Elect', 'Commerce', 'HealthInfo'];

        //iterate over classes
        for (var i = 0; i < classes.length; i++) {
            var gpa = calculateGPA(document.getElementById(classes[i]).value);
            gpaTotal += gpa;
        }
        //gpaTotal divided by number of classes
        gpaTotal /= classes.length;

        //if not all values are filled out, alert and return
        if (isNaN(gpaTotal)) {
            alert('Please fill out all answers!');
            return;
        }

        if (gpaTotal >= 3.5) message = acceptanceMessage;
        else message = consolationMessage;

        document.getElementById("result").innerHTML = message;
    }

    function calculateGPA(gpa) {
        switch (gpa) {
            case "A":
                gpa = 4.0;
                break;
            case "B":
                gpa = 3.0;
                break;
            case "C":
                gpa = 2.0;
                break;
            case "D":
                gpa = 1.0;
                break;
            case "F":
                gpa = 0.0;
                break;
        }
        return gpa;
    }