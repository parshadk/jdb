const connToken = "90934527|-31949226540537355|90962437"; // Common variable for the token

$("#shipmentId").focus();

function validateAndGetFormData() {
    const fields = ["shipmentId", "description", "source", "destination", "shippingDate", "expectedDeliveryDate"];
    for (let field of fields) {
        const value = $("#" + field).val();
        if (value === "") {
            alert(`${field.charAt(0).toUpperCase() + field.slice(1)} is Required`);
            $("#" + field).focus();
            return "";
        }
    }

    const jsonStrObj = {
        shipmentId: $("#shipmentId").val(),
        description: $("#description").val(),
        source: $("#source").val(),
        destination: $("#destination").val(),
        shippingDate: $("#shippingDate").val(),
        expectedDeliveryDate: $("#expectedDeliveryDate").val(),
    };
    return JSON.stringify(jsonStrObj);
}

function createPUTRequest(connToken, jsonObj, dbName, relName) {
    return `{
        "token": "${connToken}",
        "dbName": "${dbName}",
        "cmd": "PUT",
        "rel": "${relName}",
        "jsonStr": ${jsonObj}
    }`;
}

function executeCommand(reqString, dbBaseUrl, apiEndPointUrl) {
    const url = dbBaseUrl + apiEndPointUrl;
    let jsonObj;

    $.post(url, reqString, function (result) {
        jsonObj = JSON.parse(result);
    }).fail(function (result) {
        jsonObj = JSON.parse(result.responseText);
    });
    
    return jsonObj;
}

function resetForm() {
    $("#shipmentId").val("");
    $("#description").val("");
    $("#source").val("");
    $("#destination").val("");
    $("#shippingDate").val("");
    $("#expectedDeliveryDate").val("");
    $("#shipmentId").focus();
    $("#save").prop("disabled", false);
    $("#update").prop("disabled", true);
}

function saveShipment() {
    const jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    const putReqStr = createPUTRequest(connToken, jsonStr, "SHIPMENT-DB", "SHIPMENT-TABLE");
    alert(putReqStr);
    jQuery.ajaxSetup({async: false});
    const resultObj = executeCommand(putReqStr, "http://api.login2explore.com:5577", "/api/iml");
    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({async: true});
    resetForm();
}

function updateShipment() {
    const jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    const updateReqStr = createUPDATERequest(connToken, jsonStr, "SHIPMENT-DB", "SHIPMENT-TABLE");
    alert(updateReqStr);
    jQuery.ajaxSetup({async: false});
    const resultObj = executeCommand(updateReqStr, "http://api.login2explore.com:5577", "/api/iml");
    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({async: true});
    resetForm();
}
