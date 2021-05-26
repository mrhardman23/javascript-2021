// Global variable for storing the number of items
var numItems = 0;

// Global variable for storing the item input textbox element
var itemInput = document.getElementById('item-input');

// Global variable for storing the quantity input textbox element
var quantityInput = document.getElementById('quantity-input');

// Global variable for storing the table from the webpage in a variable
var table = document.getElementById('list-table');

// Global variable for storing the body of the table in a variable
var tableBody = table.getElementsByTagName('tbody')[0];

/**
 * appendToList takes the values input by the user for the item and quantity
 * textboxes and adds them to the shopping list on the website. To do this,
 * the method gets the table from the page, adds the headings for ITEM and 
 * QUANTITY to the table after the first successful addition, then adds a new
 * row with the new item and quantity data inputted by the user.
 */
function appendToList()
{
    

    // Store the head of the table in a variable
    var tableHead = table.getElementsByTagName('thead')[0];
    
    // Store the one row in the head of the table in a variable
    var tableHeadRow = tableHead.getElementsByTagName('tr')[0];

    // Create the new table row that will store the item and quantity data
    var newTableRow = document.createElement("tr");
    
    /**
     * Create a variable that will allow for the creation of two 
     * new headings in the table
     */ 
    var newTableHeading;

    /**
     * Create a variable that will allow for the creation of two
     * new data items in the new row of the table
     */
    var newTableData;

    /**
     * Create a new button that will allow user to remove a row
     * once they have picked up that item on their shopping list
     */
    var newRemoveButton = document.createElement("button");

    /**
     * Check to see if item input textbox is empty...
     * If so, display an error that says the box is empty.
     */
    if(itemInput.value == "")
    {
        document.getElementById('error').style.margin = "20px";
        document.getElementById('error').innerHTML = "You must enter a name for the item. Please try again";
    }
    /**
     * If not, check to see if quantity input textbox is empty...
     * If so, display an error that says the box is empty.
     */
    else if(quantityInput.value == "") 
    {
        document.getElementById('error').style.margin = "20px";
        document.getElementById('error').innerHTML = "You must enter a number for the quantity of the item. Please try again";
    }
    /**
     * If not, check to see if quantity input textbox is zero...
     * If so, display an error that says the quantity you are 
     * picking up for an item cannot be zero.
     */
    else if(quantityInput.value <= 0) 
    {
        document.getElementById('error').style.margin = "20px";
        document.getElementById('error').innerHTML = "You cannot enter a negative quantity or a quantity of 0 for an item. Please try again";
    }
    /**
     * If not, there is content in both textboxes and we can
     * add the elements to the end of the shopping list table
     */
    else 
    {
        // Clear any error messages shown before if there were any
        document.getElementById('error').style.margin = "auto";
        document.getElementById('error').innerHTML = "";

        /**
         * Check if there are no items in the table...
         * If there are no items, we have to add the headings
         * to the table.
         */
        if(numItems == 0)
        {
            // Create a new table heading element to store the ITEM heading
            newTableHeading = document.createElement("th");

            // Set the innerHTML of the new table heading to display ITEM
            newTableHeading.innerHTML = "ITEM";

            // Add the new table heading to the table head's row
            tableHeadRow.appendChild(newTableHeading);

            // Create a new table heading element to store the QUANTITY heading
            newTableHeading = document.createElement("th");

            // Set the innerHTML of the next table heading to display QUANTITY
            newTableHeading.innerHTML = "QUANTITY";

            // Add the new table heading to the table head's row
            tableHeadRow.appendChild(newTableHeading);

            /**
             * Create a new table heading element so that the buttons that will
             * be added will have their own column of the table
             */
            newTableHeading = document.createElement("th");

            // Add the new table heading to the table head's row
            tableHeadRow.appendChild(newTableHeading);
        }
        
        // Create new td element for item
        newTableData = document.createElement("td");

        // Fill the innerHTML of the new td element with the item textbox's contents
        newTableData.innerHTML = itemInput.value;

        // Add the new table data for item to the new table row that was created in the code above
        newTableRow.appendChild(newTableData);


        // Create new td element for quantity
        newTableData = document.createElement("td");

        // Fill the innerHTML with the quantity textbox's contents
        newTableData.innerHTML = quantityInput.value;

        // Add the new table data for quantity to the new table row that was created in the code above
        newTableRow.appendChild(newTableData);

        /**
         * Set the onclick attribute of the new button to use the removeItem method, which is specific
         * for removing a whole row from the table when somebody has picked it up and does not need it
         * on their shopping list anymore.
         */
        newRemoveButton.setAttribute("onclick", "removeItem(" + numItems + ")");

        // Set the innerHTML of the new button to Got It!
        newRemoveButton.innerHTML = "Got It!";

        // Create new td element for Got It button
        newTableData = document.createElement("td");

        // Add the Got It (remove) button to the new td element
        newTableData.appendChild(newRemoveButton);

        // Add the new table data for the remove button to the table row that was created in the code above
        newTableRow.appendChild(newTableData);

        /**
         * Now that the row has all the content we need added to it (item, quantity, and remove button td
         * elements), we can add the row to the end of the table body
         */
        tableBody.appendChild(newTableRow);

        // Clear the contents of the item textbox so the user doesn't have to after submitting
        itemInput.value = "";

        // Clear the contents of the item textbox so the user doesn't have to after submitting
        quantityInput.value = "";

        /**
         * Sets the focus to the item textbox input so that the user can start typing the next
         * item in their shopping list automatically
         */ 
        itemInput.focus();

        // Adds one to the number of items variable
        numItems++;
    }
}

/**
 * removeItem removes an entire row from the table when the user has
 * clicked the Got It button for that row.
 * 
 * @param buttonNum is the number of the button, which is also the 
 * number of the row where the button is found, which allows us to
 * remove that specific row
 */
function removeItem(buttonNum)
{
    /** 
     * Stores all of the table rows of the shopping list table as 
     * an array.
     */
    var tableRows = tableBody.getElementsByTagName('tr');

    /**
     * Stores which row we are starting at in our table, which is 
     * the row we are trying to delete.
     */
    var startingIndex = buttonNum;

    /**
     * Variable that will be used to get the current button
     * that will need to have its onclick attribute adjusted
     * due to the removal of a row
     */
    var currentButton;

    //Remove the row we clicked the Got It! button for
    tableRows[buttonNum].remove();

    /**
     * Adjust the removeItem onclick calls for all buttons that follow this one
     * because now there is one less row, which will affect the numbers given in
     * each removeItem method call
     * 
     * Uses a while loop which checks that the startingIndex is still less than the
     * length of the array of table rows and that the table row at the starting
     * index is not "nothing"
     */
    while( startingIndex < tableRows.length && tableRows[startingIndex] != null)
    {
        /**
         * Gets the current button we want to change by getting the row which is now 
         * at the same index as the row we just removed was. Then, we get the first
         * (and only button) in that row.
         */
        currentButton = tableRows[startingIndex].getElementsByTagName("button")[0];

        /**
         * Sets the current button's onclick attribute to change the removeItem method
         * call to use the proper buttonNum for the row it is now in
         */
        currentButton.setAttribute("onclick", "removeItem(" + startingIndex + ")");

        // Increase the startingIndex to keep moving down the table
        startingIndex++;
    }

    // If the user has removed all the rows from the table...
    if(tableBody.getElementsByTagName('tr').length == 0)
    {
        /**
         * Remove all the table headings from the table starting with the last 
         * and going backward
         */
        table.getElementsByTagName('th')[2].remove();
        table.getElementsByTagName('th')[1].remove();
        table.getElementsByTagName('th')[0].remove();
    }

    // Lower the number of items in the shopping list by one
    numItems--;


}