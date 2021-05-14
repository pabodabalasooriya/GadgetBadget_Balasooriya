<%@page import="model.Order"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
		<meta charset="UTF-8">
			<title>Order Management - GadgetBadget</title>
	
		<link href="myStyle.css" rel="stylesheet" />
		<link rel="stylesheet" href="Views/bootstrap.min.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
		<script src="Components/jquery-3.5.0.min.js"></script>
		<script src="Components/Order.js"></script>

	</head>
	
	<body>
		<div class="container">
	
			<p class="font-weight-bold">
				<center>
					<h1><u><i><b>ORDER MANAGEMENT SERVICE<br>
					 GADGETBADGET SYSTEM</b></i></u></h1>
					 </center>
				</p>
			<br><br>
			
			<fieldset>
	
				<legend><b>
				<center>Add Order Details</center>
				
				</b></legend>
				
					<form id="ORDER" name="ORDER" class="border border-light p-5" action="Order.jsp" method="get">
						
						
						<div class="form-outline mb-4">
						    <label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">Buyer ID:</label>
						    <input type="hidden" id="orderID" name="orderID">
						    <input type="text" id="buyerID" class="form-control" name="buyerID">						    
						</div>
						
						<div class="form-outline mb-4">
						    <label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">Buyer Name:</label>
						    <input type="text" id="buyerName" class="form-control" name="buyerName">						    
						</div>
						
						<div class="form-outline mb-4">
						    <label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">Order Type:</label>
						    <input type="text" id="orderType" class="form-control" name="orderType">						    
						</div>
						
						<div class="form-outline mb-4">
						    <label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">Order Date:</label>
						    <input type="text" id="orderDate" class="form-control" name="orderDate">						    
						</div>
						 
						<div class="row mb-4">
						    <div class="col">
						      <div class="form-outline">
						        <label class="form-label" for="form6Example1" class="col-sm-2 col-form-label col-form-label-sm">Order Description:</label>
						        <input type="text" id="orderDescription" class="form-control" name="orderDescription">						        
						      </div>
						    </div>
						    <div class="col">
						      <div class="form-outline">
								<label class="form-label" for="form6Example2" class="col-sm-2 col-form-label col-form-label-sm">Total Amount:</label>
						        <input type="text" id="totalAmount" class="form-control" name="totalAmount" >
						        
						      </div>
						    </div>
						  </div>						
						<br> 
						<div id="alertSuccess" class="alert alert-success"></div>
						<div id="alertError" class="alert alert-danger"></div>	
						<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary btn-lg btn-block" > 
						
						
						
					</form>
				
							
			</fieldset>
			
			<br> 
			
			<div class="container" id="OrderGrid">
				<fieldset>
					<legend><b><center>View Order Details</center></b></legend>
					<form method="post" action="Order.jsp" class="table table-striped">
						<%
						    Order viewOrder = new Order();
							out.print(viewOrder.readOrder());
							
						%>
					</form>
					<br>
				</fieldset>
			</div>
		</div>
	</body>
</html>