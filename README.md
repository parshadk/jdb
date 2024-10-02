# Shipment Management Form

This project implements a Shipment Management Form using JSONDB. The form collects shipment data (such as shipment ID, product name, weight, destination, and shipment date) and allows the user to add, modify, or reset the shipment details using a basic web interface.

The form is designed to:
- Store data in the **"ShipmentData"** relation within the **"SHIPMENT-DB"** database.
- Interact with the backend using the Login2Explore API for storing and retrieving data.
- Validate and process inputs dynamically based on the existence of the **Shipment ID**.

## Features
- **Form fields** for Shipment ID, Product Name, Weight, Destination, and Shipment Date.
- **Save, Change, and Reset** buttons for managing the data.
- Checks if the Shipment ID exists in the database and dynamically enables or disables form fields.
- Validates input fields to ensure no data is left empty.
- Uses Login2Explore API for data persistence.

## Form Fields

- **Shipment ID:** Acts as a unique identifier (Primary Key).
- **Description:** Description of the product being shipped.
- **Source:** Weight of the product in kilograms.
- **Destination:** The shipping destination.
- **Shipment Date:** Date of shipment.
- **Shipment Arrival Date:** Expected Date of arrival of  shipment.

## Technologies Used
- **HTML5** for structuring the form.
- **Bootstrap** for styling the form and making it responsive.
- **jQuery** for handling form input and dynamic behavior.
- **JSONDB** (via Login2Explore API) for storing and retrieving data.
  
## API Endpoints
The form communicates with JSONDB using the following API methods:
1. **GET_BY_KEY**: To check if a Shipment ID exists in the database.
2. **PUT**: To store a new shipment record in the database.
3. **UPDATE**: To modify an existing shipment record.

## Getting Started

### Prerequisites
Before you can run this project, you will need:
- A working instance of the **Login2Explore API**.
- Access to a browser that supports JavaScript.

### Steps to Run

1. Clone the repository or download the code.
2. Open the `index.html` file in a browser.
3. Enter the **Shipment ID**:
   - If the ID does not exist, you can enter the shipment details and click **Save**.
   - If the ID exists, the form will populate with existing details and allow you to modify and click **Change**.
4. Click **Reset** to clear the form at any point.

### Form Logic

- **Save Shipment**: When a new Shipment ID is entered, it allows you to fill the form and save the data to the database.
- **Change Shipment**: If an existing Shipment ID is entered, it retrieves the record from the database, allows modification, and updates it when the **Change** button is clicked.
- **Reset Form**: Clears all the fields and disables input except for the Shipment ID field.


