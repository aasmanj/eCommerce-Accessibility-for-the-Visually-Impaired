function autoFill() {
    document.getElementById('input_name').value = "John Doe"
    document.getElementById('input_street').value = "123 Broadway St"
    document.getElementById('input_city').value = "Brooklyn"
    document.getElementById('input_state').value = "NY"
    document.getElementById('input_zip').value = "12344"
    document.getElementById('input_phone').value = "123456789"
    document.getElementById('input_card').value = "12345678900000"
    document.getElementById('input_expiration').value = "01/25"
    document.getElementById('input_cvv').value = "876"
   }
function copyingFunction() {
   if (document.getElementById('same').checked) {
       var billing_street = document.getElementById('input_street').value;
       var billing_city = document.getElementById('input_city').value;
       document.getElementById('billing_street').value = billing_street;
       document.getElementById('billing_city').value = billing_city;

} 	else {
       document.getElementById('billing_street').value = "";
       document.getElementById('billing_city').value = "";
    }
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('fill').addEventListener('click', autoFill())
}
  );