function signUp()
{
    // Get the error div so we can display input errors in it
    let errorDiv = document.getElementById("error");


    // Get all the inputs from the form so that we can test their inputs
    let firstNameInput = document.getElementById("first-name");
    let lastNameInput = document.getElementById("last-name");
    let phoneInput = document.getElementById("telephone");
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
    let confirmPasswordInput = document.getElementById("confirm");


    /**
     * Check for number regex pattern which will be used for first/last 
     * names and password check
     */
    let numberCheck = /\d/g;

    // Check for proper phone number format
    let phoneCheck = /\(\d{3}\)-\d{3}-\d{4}/g;

    // Check for proper email address format
    let emailCheck = /@/g;

    // Check for at least 10 characters in password
    let passwordLengthCheck = /[\w\W]{10}/g;

    // Check for one capital letter in password
    let passwordCapitalCheck = /[A-Z]/g;

    // Check for symbol in password
    let passwordSymbolCheck = /\W/g;


    // Clear any previous error messages in the error div
    errorDiv.innerHTML = "";

    if(numberCheck.test(firstNameInput.value)){
        errorDiv.innerHTML += "You cannot enter a number in your first name. Please try again.<br/>";
    }

    if(numberCheck.test(lastNameInput.value)){
        errorDiv.innerHTML += "You cannot enter a number in your last name. Please try again.<br/>";
    }

    if(phoneCheck.test(phoneInput.value) == false){
        errorDiv.innerHTML += "Your telephone number must follow the format (xxx)-xxx-xxxx," +
            " where each x is a digit. Please try again.<br/>";
    }

    if(emailCheck.test(emailInput.value) == false){
        errorDiv.innerHTML += "Your email address is incorrect. Please try again.<br/>";
    }

    if(passwordLengthCheck.test(passwordInput.value) == false){
        errorDiv.innerHTML += "Your password must include at least 10 characters. Please try again.<br/>";
    }

    if(numberCheck.test(passwordInput.value) == false){
        errorDiv.innerHTML += "Your password must include a number. Please try again.<br/>";
    }

    if(passwordCapitalCheck.test(passwordInput.value) == false){
        errorDiv.innerHTML += "Your password must include a capital letter. Please try again.<br/>";
    }

    if(passwordSymbolCheck.test(passwordInput.value) == false){
        errorDiv.innerHTML += "Your password must include a symbol. Please try again.<br/>";
    }

    if(passwordInput.value != confirmPasswordInput.value){
        errorDiv.innerHTML += "Your passwords do not match. Please try again.<br/>";
    }

}