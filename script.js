let voto = 0; 
function piu() {
   document.getElementById("voto").innerHTML = voto;
  if (voto == 10) {
    alert("Limite raggiunto");
  } else {
    voto++;
  }
}
function meno() {
   document.getElementById("voto").innerHTML = voto;
  if (voto == 0) {
    alert("Limite raggiunto");
  } else {
    voto--;
  
  }
}
