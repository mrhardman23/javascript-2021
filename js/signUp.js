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

    /**
     * Check for proper phone number format 
     * (backslashes need to be put in front of round brackets because
     * round brackets are special characters)
     * 
     * This test means: 
     *   1. Test for an opening round bracket
     *   2. Immediately followed by three digits
     *   3. Immediately followed by a closing round bracket
     *   4. Immediately followed by a hypen, -
     *   5. Immediately followed by three more digits
     *   6. Immediately followed by another hyphen, -
     *   7. Immediately followed by four digits
     */
    let phoneCheck = /\(\d{3}\)-\d{3}-\d{4}/g;

    // Check for proper email address format
    let emailCheck = /@/g;

    /**
     * Check for at least 10 characters in password
     * 
     * This test means:
     *   1. The pattern includes looks for any ([]) alphanumeric (\w) and non-alphanumeric characters (\W)
     *   2. And checks for 10 characters of either alphanumeric or non-alphanumeric characters ({10})
     */
    let passwordLengthCheck = /[\w\W]{10}/g;

    // Check for one capital letter in password
    let passwordCapitalCheck = /[A-Z]/g;

    // Check for symbol in password (\W is non-alphanumeric characters)
    let passwordSymbolCheck = /\W/g;


    // Clear any previous error messages in the error div
    errorDiv.innerHTML = "";

    // If the first name input's value has a number in it...
    if(numberCheck.test(firstNameInput.value))
    {
        // Add text to the innerHTML of the error div saying that the first name cannot have a number in it
        errorDiv.innerHTML += "You cannot enter a number in your first name. Please try again.<br/>";
    }

    // If the last name input's value has a number in it...
    if(numberCheck.test(lastNameInput.value))
    {
        // Add text to the innerHTML of the error div saying that the last name cannot have a number in it
        errorDiv.innerHTML += "You cannot enter a number in your last name. Please try again.<br/>";
    }

    // If the phone's input value does not follow the proper format...
    if(phoneCheck.test(phoneInput.value) == false)
    {
        // Add text to the innerHTML of the error div saying the phone number must follow the exact format given
        errorDiv.innerHTML += "Your telephone number must follow the format (xxx)-xxx-xxxx," +
            " where each x is a digit. Please try again.<br/>";
    }

    // If the email does not include an @ symbol
    if(emailCheck.test(emailInput.value) == false)
    {
        // Add text to the innerHTML of the error div saying that the email address is incorrect
        errorDiv.innerHTML += "Your email address is incorrect. Please try again.<br/>";
    }

    // If the password does not have 10 alphanumeric or non-alphanumeric characters...
    if(passwordLengthCheck.test(passwordInput.value) == false)
    {
        // Add text to the innerHTML of the error div saying that the password is not long enough
        errorDiv.innerHTML += "Your password must include at least 10 characters. Please try again.<br/>";
    }

    // If the password does not include a number...
    if(numberCheck.test(passwordInput.value) == false)
    {
        // Add text to the innerHTML of the error div saying that the password needs a number
        errorDiv.innerHTML += "Your password must include a number. Please try again.<br/>";
    }

    // If the password does not include a capital letter...
    if(passwordCapitalCheck.test(passwordInput.value) == false)
    {
        // Add text to the innerHTML of the error div saying that the password needs a capital letter
        errorDiv.innerHTML += "Your password must include a capital letter. Please try again.<br/>";
    }

    // If the password does not include a non-alphanumeric character...
    if(passwordSymbolCheck.test(passwordInput.value) == false)
    {
        // Add text to the innerHTML of the error div saying that the password needs a symbol
        errorDiv.innerHTML += "Your password must include a symbol. Please try again.<br/>";
    }

    // If the password input's value does not match the confirm password input value...
    if(passwordInput.value != confirmPasswordInput.value)
    {
        // Add text to the innerHTML of the error div saying that the user's passwords do not match
        errorDiv.innerHTML += "Your passwords do not match. Please try again.<br/>";
    }

}