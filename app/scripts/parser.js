import { placePageTitle } from "./parser-utils/placePageTitle";
import { placeLogo } from "./parser-utils/placeLogo";
import { placeTitle } from "./parser-utils/placeTitle";
import { placeVersion } from "./parser-utils/placeVersion";
import { generateToc } from "./parser-utils/generateToc";
import { placeHeaderIDs } from "./parser-utils/placeHeaderIDs";

// Setup
// Load highlight theme
hljs.initHighlightingOnLoad();

// Crete MD parser object
var md = new Remarkable("full", {
    html: true,
    breaks: true,
    linkify: true,
    xhtmlOut: true
});

// Variables
const readmePath = document
    .querySelector("meta[name='readme-path']")
    .getAttribute("href");

const contentArea = document.querySelector(".content");

const readmeRequest = () => {
    fetch(readmePath)
        .then(res => res.text())
        .then(markdownFile => {
            let renderedHtml = md.render(markdownFile);
            let shadowDOM = new DOMParser().parseFromString(
                renderedHtml,
                "text/html"
            );

            placePageTitle(shadowDOM);
            placeLogo(shadowDOM);
            placeTitle(shadowDOM);
            placeVersion(shadowDOM);
            generateToc(shadowDOM);
            placeHeaderIDs(shadowDOM);

            contentArea.innerHTML = shadowDOM.body.innerHTML;
        })
        .catch(function(err) {
            console.log(err);
        });
};

readmeRequest();
