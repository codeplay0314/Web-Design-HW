function billingFunction() {
    var bName = document.getElementById("billingName");
    var bZip = document.getElementById("billingZip");
    if (document.getElementById("same").checked == true) {
        bName.value = document.getElementById("shippingName").value;
        bZip.value = document.getElementById("shippingZip").value;
    } else {
        bName.value = "";
        bZip.value = "";
    }
}