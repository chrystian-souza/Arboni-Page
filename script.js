function mostrarLargura() {
  console.log("Largura da tela:", window.innerWidth + "px");
}

window.addEventListener("resize", mostrarLargura);
mostrarLargura();
