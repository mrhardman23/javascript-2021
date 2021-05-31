// Global variable for storing the number of items
var numItems = 0;

// Global variable for storing the item input textbox element
var itemInput = document.getElementById('item-input');

// Global variable for storing the quantity input textbox element
var quantityInput = document.getElementById('quantity-input');

/**
 * appendToList takes the values input by the user for the item and quantity
 * textboxes and adds them to the shopping list on the website. To do this,
 * the method gets the table from the page, adds the headings for ITEM and 
 * QUANTITY to the table after the first successful addition, then adds a new
 * row with the new item and quantity data inputted by the user.
 */
function appendToList()
{
    // Store the table from the webpage in a variable
    var table = document.getElementById('list-table');

    /**
     * Store the head of the table in a variable by getting an array
     * of all thead tags from the table and getting the first and
     * only entry from that array
     */
    var tableHead = table.getElementsByTagName('thead')[0];

    // Store the one row in the head of the table in a variable
    var tableHeadRow = tableHead.getElementsByTagName('tr')[0];

    // Store the body of the table in a variable
    var tableBody = table.getElementsByTagName('tbody')[0];

    /**
     * Create the new table row that will store the data that is 
     * input by the user
     */
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
     * Now that the row has all the content we need added to it (item and quantity td elements),
     * we can add the row to the end of the table body
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