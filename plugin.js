(function () {
  // Cria um iframe para carregar o chat
  const iframe = document.createElement("iframe");
  iframe.src = "http://localhost:3000/chat-embed"; // URL do embed
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "350px";
  iframe.style.height = "500px";
  iframe.style.border = "none";
  iframe.style.borderRadius = "10px";
  iframe.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
  iframe.style.zIndex = "1000";

  // Adiciona o iframe ao body
  document.body.appendChild(iframe);
})();
