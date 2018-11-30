const placeVersion = shadowDOM => {
    if (shadowDOM.querySelector("a[href='version-id']")) {
        const docVersionId = shadowDOM.querySelector("a[href='version-id']"),
            sidebarVersion = document.querySelector(
                ".sidebar__title-block__version"
            ),
            textVersion = docVersionId.parentNode.textContent;

        sidebarVersion.innerHTML = textVersion;
        docVersionId.parentNode.remove();
    }
};

export { placeVersion };
