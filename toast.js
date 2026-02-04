function showToast(
  message = "Success!",
  type = "success", // success | error
  duration = 3000
) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;

  const icon = type === "error" ? "✕" : "✓";

  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
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
  }, 300);
}

(function () {
  const moveToastIntoDialog = () => {
    const toast = document.getElementById("toast-container");
    const openDialog = document.querySelector("dialog[open]");

    if (!toast) return;

    if (openDialog && !openDialog.contains(toast)) {
      openDialog.appendChild(toast);
    }
  };

  setTimeout(moveToastIntoDialog, 100);

  document.addEventListener("click", () => {
    setTimeout(moveToastIntoDialog, 100);
  });
})();
