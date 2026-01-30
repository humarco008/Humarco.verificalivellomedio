let voto = 0; 
function piu() {
  
  if (voto == 10) {
    alert("Limite raggiunto");
  } else {
    voto++;
     document.getElementById("voto").innerHTML = voto;
  }
 if (voto >= 6) {
    document.getElementById("voto").style.color = "green";
  } else {
    document.getElementById("voto").style.color = "red";
  }
    document.getElementById("stelle").innerHTML = "";
 for (let i = 1; i <= voto; i++) {
    document.getElementById("stelle").innerHTML += "🌟";
  }
   if (voto == 10) {
    document.getElementById("stelle").innerHTML += " <b>TOP!</b>";
  }
}
function meno() {
  
  if (voto == 0) {
    alert("Limite raggiunto");
  } else {
    voto--;
     document.getElementById("voto").innerHTML = voto;
  }
 if (voto >= 6) {
    document.getElementById("voto").style.color = "green";
  } else {
    document.getElementById("voto").style.color = "red";
  }
  document.getElementById("stelle").innerHTML = "";
 for (let i = 1; i <= voto; i++) {
    document.getElementById("stelle").innerHTML += "🌟";
  }
   if (voto == 10) {
    document.getElementById("stelle").innerHTML += " <b>TOP!</b>";
  }
}

