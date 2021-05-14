/**
 * 
 *///hide alert
$(document).ready(function() {

	$("#alertSuccess").hide();
	$("#alertError").hide();
	$("#hidOrderIDSave").val("");
	$("#ORDER")[0].reset();
});

$(document).on("click", "#btnSave", function(event) {

	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	
	// Form validation-------------------
	var status = validateItemForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	
	// If valid------------------------
	var type = ($("#orderID").val() == "") ? "POST" : "PUT";

	$.ajax({
		url : "OrdersAPI",
		type : type,
		data : $("#ORDER").serialize(),
		dataType : "text",
		complete : function(response, status) {
			//console.log(status);
			onItemSaveComplete(response.responseText, status);
			window.location.reload(true);
		}
	});

});

function onItemSaveComplete(response, status) {
	
	if (status == "success") {
		
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success") {
			
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#OrderGrid").html(resultSet.data);
			
		} else if (resultSet.status.trim() == "error") {
			
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} 
	else if (status == "error") {
		
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
		
	} else {
		
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	
	$("#orderID").val("");
	$("#ORDER")[0].reset();
}

$(document).on("click", ".btnRemove", function(event) {
	
	$.ajax({
		url : "OrdersAPI",
		type : "DELETE",
		data : "orderID=" + event.target.value,
		dataType : "text",
		complete : function(response, status) {
			onItemDeleteComplete(response.responseText, status);
			window.location.reload(true);
		}
	});
});

function onItemDeleteComplete(response, status) {
	
	if (status == "success") {
		
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success") {
			
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#OrderGrid").html(resultSet.data);
			
		} else if (resultSet.status.trim() == "error") {
			
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
		
	} else if (status == "error") {
		
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
		
	} else {
		
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}

// UPDATE==========================================
$(document).on("click",".btnUpdate",function(event)
		{
			$("#orderID").val($(this).closest("tr").find('td:eq(0)').text());
			$("#buyerID").val($(this).closest("tr").find('td:eq(1)').text());
			$("#buyerName").val($(this).closest("tr").find('td:eq(2)').text());
			$("#orderType").val($(this).closest("tr").find('td:eq(3)').text());
			$("#orderDate").val($(this).closest("tr").find('td:eq(4)').text());
			$("#orderDescription").val($(this).closest("tr").find('td:eq(5)').text());
			$("#totalAmount").val($(this).closest("tr").find('td:eq(6)').text());
					
		});


// CLIENTMODEL=========================================================================
function validateItemForm() {
	
	//Buyer ID
	if ($("#buyerID").val().trim() == "") {
		return "Please insert buyer id.";
	}
	
	// Buyer Name
	if ($("#buyerName").val().trim() == "") {
		return "Please insert buyer Name.";
	}
	
	// Order Type
	if ($("#orderType").val().trim() == "") {
		return "Please insert order type.";
	}
	
	// Order Date
	if ($("#orderDate").val().trim() == "") {
		return "Please insert order date.";
	}
	
	
	// Order Description
	if ($("#orderDescription").val().trim() == "") {
		return "Please insert order description.";
	}
	
	// Total Amount
	if ($("#totalAmount").val().trim() == "") {
		return "Please insert total amount.";
	}
	
	
	return true;
}

