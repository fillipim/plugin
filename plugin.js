(function () {
  // Criar o pop-up
  const popup = document.createElement("div");
  popup.innerText = "Este é um pop-up vermelho!";
  popup.style.position = "fixed";
  popup.style.top = "20px";
  popup.style.right = "20px";
  popup.style.padding = "15px";
  popup.style.backgroundColor = "red";
  popup.style.color = "white";
  popup.style.fontSize = "16px";
  popup.style.borderRadius = "5px";
  popup.style.zIndex = "9999";
  popup.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";

  // Botão de fechar
  const closeButton = document.createElement("span");
  closeButton.innerText = " ✖ ";
  closeButton.style.cursor = "pointer";
  closeButton.style.marginLeft = "10px";
  closeButton.style.fontWeight = "bold";
  closeButton.onclick = () => popup.remove();

  popup.appendChild(closeButton);

  // Adicionar ao corpo do documento
  document.body.appendChild(popup);
})();
