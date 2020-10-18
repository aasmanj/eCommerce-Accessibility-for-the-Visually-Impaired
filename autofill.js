<!DOCTYPE html PUBLIC>
<html>
<script src="fill.js"></script>
<button id="fill" >Click this button to autofill name, address, and card information</button>
<form>
	<p>
		<fieldset>
    	<label>Name: </label>
		<input type="text" id="input_name">
		<label>Street: </label>
		<input type="text" id="input_street">
		<label>City: </label>
		<input type="text" id="input_city">
		<label>State: </label>
		<input type="text" id="input_state">
		<label>Zip: </label>
		<input type="text" id="input_zip">
		<label>Phone: </label>
		<input type="text" id="input_phone">
		<label>Card Number: </label>
		<input type="text" id="input_card">
		<label>Expiration: </label>
		<input type="text" id="input_expiration">
		<label>CVV: </label>
		<input type="text" id="input_cvv">
		</fieldset>
		<input type="checkbox" id="same" name="same" onchange="copyingFunction()" />
		<label for="same">Same Billing Address?</label>
		<fieldset>
		<label>Billing Address: </label>
		<input type="text" id="billing_street">
		<input type="text" id="billing_city">
		
		</fieldset>
		<input type="submit" value="Verify" />
	 </p>
	 <script src="fill.js"></script>

</form>
</html>
