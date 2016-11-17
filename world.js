
function myFunction() {
    var country = document.getElementById("country").value;  
     var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("result").innerHTML = this.responseText;
    }
  };
    xhttp.open("GET", "https://info2180-lab7-camillebeckford.c9users.io/world.php?country="+country, true);
    xhttp.send();
}