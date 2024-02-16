function myFun() {
  document.getElementById("time").innerHTML = "12.00";
}
function myFun() {
  document.getElementById("date").innerHTML = "15/09/2023";
}
function submitData() {
  var timeValue = document.getElementById("timeInput").value;
  var dateValue = document.getElementById("dateInput").value;
  alert("Time:" + timeValue + "\nDate:" + dateValue);
}
