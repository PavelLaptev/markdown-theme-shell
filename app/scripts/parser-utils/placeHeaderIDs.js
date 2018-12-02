const fixIdName = name => {
    return name
        .replace(/\s+/g, "-")
        .replace(/,/g, "")
        .toLowerCase();
};

const placeHeaderIDs = shadowDOM => {
    Array.from(shadowDOM.querySelectorAll("h1, h2, h3, h4, h5")).map(item => {
        item.setAttribute("id", fixIdName(`${item.textContent}`));
    });
};

export { placeHeaderIDs };
