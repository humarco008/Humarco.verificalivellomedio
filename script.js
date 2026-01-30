let voto = 0; 
function piu() {
   document.getElementById("voto").innerHTML = voto;
  if (voto == 10) {
    alert("Limite raggiunto");
  } else {
    voto++;
  }
 if (voto >= 6) {
    document.getElementById("voto").style.color = "green";
  } else {
    document.getElementById("voto").style.color = "red";
  }
}
function meno() {
   document.getElementById("voto").innerHTML = voto;
  if (voto == 0) {
    alert("Limite raggiunto");
  } else {
    voto--;
  
  }
 if (voto >= 6) {
    document.getElementById("voto").style.color = "green";
  } else {
    document.getElementById("voto").style.color = "red";
  }

}
  document.getElementById("stelle").innerHTML = "";
 for (let i = 1; i <= voto; i++) {
   
  }
 
