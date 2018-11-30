const placePageTitle = shadowDOM => {
    if (shadowDOM.querySelector("a[href='title-id']")) {
        if (document.title === "") {
            const docTitleId = shadowDOM.querySelector("a[href='title-id']");
            document.title = docTitleId.parentNode.textContent;
        }
    } else {
        console.log(
            "%cCan't find 'title-id'",
            "color: #f45; font-weight: bold;"
        );
    }
};

export { placePageTitle };
