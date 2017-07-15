// alert("Mazhar");
var firstName = "Mazhar ";  // string variable
var lastName = " Aheer";
var age = 18; //number type variable

var fullName;

fullName = firstName + lastName;  // + is concetination. + is used to join
var data = "My Name is " + fullName + " " + "\n My age is " + age + " years"; //    \n for new line


function showDetails() {
    var firstNumber = prompt("Enter First Number");
    // var secondNumber = prompt("Enter Second Number");
    // var cityName = prompt("Enter City Name");

    // alert("You city is " + cityName);

    // var firstNumber = document.getElementById("firstNumber").value;

    document.getElementById("cityId").innerHTML = firstNumber;
}

