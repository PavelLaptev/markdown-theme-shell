const theme = document
    .querySelector("meta[name='page-theme']")
    .getAttribute("content");

document.body.classList.add(theme);
