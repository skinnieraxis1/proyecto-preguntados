function setup() {
    document.getElementById("0").style.display = "none";
    document.getElementById("0.5").style.display = "block";
    document.getElementById("1").style.display = "block";
  }

function dimage(img) {
  var img = document.getElementById("output");
  img.src = URL.createObjectURL(event.target.files[0]);
}

function max_partes() {
  var rvalue = document.getElementById("r3").value;
  rvalue = rvalue.trim();
  var arvalue = rvalue.split(/\s+/);
  document.getElementById("ecpss").setAttribute("max", arvalue.length);
  document.getElementById("ecpss").value = 1;
}

function required_reset(actual) {
  document.getElementById("r11").removeAttribute("required");
  document.getElementById("r12").removeAttribute("required");
  document.getElementById("r21").removeAttribute("required");
  document.getElementById("r22").removeAttribute("required");
  document.getElementById("r23").removeAttribute("required");
  document.getElementById("r24").removeAttribute("required");
  document.getElementById("r3").removeAttribute("required");
  document.getElementById("ecpss").removeAttribute("required");

  switch (actual) {
    case "1":
      alert("s")
      document.getElementById("r11").setAttribute("required", "");
      document.getElementById("r12").setAttribute("required", "");
      break;
    case "2":
      document.getElementById("r21").setAttribute("required", "");
      document.getElementById("r22").setAttribute("required", "");
      document.getElementById("r23").setAttribute("required", "");
      document.getElementById("r24").setAttribute("required", "");
      break;
    case "3":
      document.getElementById("r3").setAttribute("required", "");
      document.getElementById("ecpss").setAttribute("required", "");
      break;
  }
}