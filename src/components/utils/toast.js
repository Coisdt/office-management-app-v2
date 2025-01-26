// src/utils/toast.js
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function useToast() {
  return {
    showToast(message, type) {
      const colors = {
        success: "linear-gradient(to right, #28a745, #85d996)", // Softer green
        alert: "linear-gradient(to right, #dc3545, #f39b9d)", // Muted red
        delete: "linear-gradient(to right, #e63946, #f8d7da)", // Muted red
        info: "linear-gradient(to right, #17a2b8, #6bc8dc)", // Calming teal
        warning: "linear-gradient(to right, #ffc107, #ffd67a)", // Warm yellow
      };

      Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        backgroundColor: colors[type] || colors.info,
      }).showToast();
    },
  };
}
