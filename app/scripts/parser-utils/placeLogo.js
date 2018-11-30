const placeLogo = shadowDOM => {
    if (shadowDOM.querySelector("a[href='logo-id']")) {
        const docLogoeId = shadowDOM.querySelector("a[href='logo-id']"),
            logoImg = docLogoeId.previousElementSibling,
            sidebarTitleBlock = document.querySelector(
                ".sidebar__title-block__title"
            );

        sidebarTitleBlock.insertAdjacentHTML(
            "beforebegin",
            `<img class="sidebar__title-block__logo" src="${logoImg.getAttribute(
                "src"
            )}">`
        );
        logoImg.remove();
    }
};

export { placeLogo };
