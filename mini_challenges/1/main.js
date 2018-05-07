//1. Using jQuery, get all the titles of the products for sale and c
// heck whether the results include "Taco Suit" and "Burger Suit". If they do, log to console "Product exists!"

let productTitles = $(".product h2").text()

if(productTitles.includes("Taco Suit" && "Burger Suit")){
    console.log("Product exists!")
}

//2. Using jQuery, when the form is submitted, get the values of all input fields and log to console. 
// Log to console, whether the checkbox is checked or unchecked.

// Writes user input to console
const btnClicked = function() {
    var nameField = $("#input-name").val();
    var emailField = $("#input-email").val();
    var passwordField = $("#input-password").val();
    console.log("User input name as: ", nameField);
    console.log("User input email as: ", emailField);
    console.log("User input password as: ", passwordField);
   };
  
  // jQuery makes "btnClicked" function run when submit button is clicked
  $("#form-button").click(function(){
      console.log(`User name: ${$("#input-name").val()}`)
      console.log(`User email: ${$("#input-email").val()}`)
      console.log(`User password: ${$("#input-password").val()}`) 
  });

