const placeTitle = shadowDOM => {
    if (shadowDOM.querySelector("a[href='title-id']")) {
        const docTitleId = shadowDOM.querySelector("a[href='title-id']"),
            sidebarTitle = document.querySelector(
                ".sidebar__title-block__title"
            );

        sidebarTitle.innerHTML = docTitleId.parentNode.textContent;
        docTitleId.parentNode.remove();
    } else {
        console.log(
            "%cCan't find 'title-id'",
            "color: #f45; font-weight: bold;"
        );
    }
};

export { placeTitle };
