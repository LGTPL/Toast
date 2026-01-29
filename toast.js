function showToast(message = "Success!", duration = 3000) {

  const container = document.getElementById("toast-container");

  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";

  toast.innerHTML = `
    <div class="toast-icon">✓</div>
    <div>${message}</div>
    <div class="toast-close">✕</div>
  `;

  container.appendChild(toast);

  toast.querySelector(".toast-close").onclick = () => {
    hideToast(toast);
  };

  setTimeout(() => {
    hideToast(toast);
  }, duration);
}

function hideToast(toast) {
  toast.classList.add("hide");

  setTimeout(() => {
    toast.remove();
  }, 60000);
}
