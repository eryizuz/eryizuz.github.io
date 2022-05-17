  const piedraBox2 = document.getElementById("piedra");
  const papelBox2 = document.getElementById("papel");
  const tijeraBox2 = document.getElementById("tijera");
  
  piedraBox2.addEventListener("mouseover", () => {
    papelBox2.style.opacity = 0;
    tijeraBox2.style.opacity = 0;
  });
  piedraBox2.addEventListener("mouseleave", () => {
    papelBox2.style.opacity = 1;
    tijeraBox2.style.opacity = 1;
  });
  
  papelBox2.addEventListener("mouseover", () => {
    piedraBox2.style.opacity = 0;
    tijeraBox2.style.opacity = 0;
  });
  papelBox2.addEventListener("mouseleave", () => {
    piedraBox2.style.opacity = 1;
    tijeraBox2.style.opacity = 1;
  });
  
  tijeraBox2.addEventListener("mouseover", () => {
    papelBox2.style.opacity = 0;
    piedraBox2.style.opacity = 0;
  });
  tijeraBox2.addEventListener("mouseleave", () => {
    papelBox2.style.opacity = 1;
    piedraBox2.style.opacity = 1;
  });
  
  
  