import { burgerButton } from "../sidebar-actions";

const frameContent = document
    .querySelector("meta[name='outer-frame']")
    .getAttribute("content");

const frame = document.querySelector(".frame");

if (frameContent === "true") {
    frame.style.display = "block";
} else {
    burgerButton.style.right = `-${getComputedStyle(burgerButton).width}`;
}

export { frameContent, frame };
