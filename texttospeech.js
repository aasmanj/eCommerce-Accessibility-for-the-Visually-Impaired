

var msg = new SpeechSynthesisUtterance();
msg.text = "The total is" + " ";
window.speechSynthesis.speak(msg);

// function to collect the items
function check_cart() {
    // document.querySelector('form');
    document.querySelectorAll('input')

}
// sum the prices and speak them

