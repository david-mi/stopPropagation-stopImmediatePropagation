import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";

//@ts-ignore
const toastsQueue: { toast: Toastify, delay: number }[] = [];

let isClearingToastsQueue = false
let currentBackgroundColor: "#1a1a1a" | "#e46430" = "#1a1a1a"

async function clearToastsQueue() {
  while (toastsQueue.length > 0) {
    await new Promise((resolve) => setTimeout(resolve, toastsQueue[0].delay))
    toastsQueue[0].toast.showToast();
    toastsQueue.shift()
  }

  isClearingToastsQueue = false
}

export async function displayToast(text: string, delayInMs = 400) {
  toastsQueue.push({
    toast: Toastify({
      text,
      duration: 1500,
      gravity: "top",
      position: "right",
      stopOnFocus: false,
      style: {
        background: currentBackgroundColor,
        borderRadius: "10px",
        padding: "1rem 2rem",
        width: "220px",
        textAlign: "center",
        fontWeight: "600"
      }
    }),
    delay: toastsQueue.length > 0 ? delayInMs : 0
  })

  currentBackgroundColor = currentBackgroundColor === "#1a1a1a" ? "#e46430" : "#1a1a1a"

  if (isClearingToastsQueue === false) {
    isClearingToastsQueue = true
    clearToastsQueue()
  }
}