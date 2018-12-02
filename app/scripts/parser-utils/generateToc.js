import { TOCActions } from "./TOCActions";
window.TOCActions = TOCActions;

const generateToc = shadowDOM => {
    if (shadowDOM.querySelector("a[href='toc-id']")) {
        const docTocId = shadowDOM.querySelector("a[href='toc-id']"),
            docTocHeader = docTocId.parentNode,
            docTocList = docTocHeader.nextElementSibling,
            sidebarMenu = document.querySelector(".sidebar__menu");

        Array.from(docTocList.children).map(item => {
            let first_level_menu,
                linkHrefFirstLevel = item
                    .querySelector("a")
                    .getAttribute("href")
                    .replace(/,/g, "")
                    .toLowerCase();

            // Check if second level exists
            if (item.querySelector("ul")) {
                // Generate second level
                let seconLevelArr = [];

                Array.from(item.querySelector("ul").children).map(item => {
                    let linkHrefSecondLevel = item
                        .querySelector("a")
                        .getAttribute("href")
                        .replace(/,/g, "")
                        .toLowerCase();
                    let thirdLevelArr = [];

                    // Generate third level
                    if (item.querySelector("ul")) {
                        Array.from(item.querySelector("ul").children).map(
                            item => {
                                let linkHrefThirdLevel = item
                                    .querySelector("a")
                                    .getAttribute("href")
                                    .replace(/,/g, "")
                                    .toLowerCase();

                                thirdLevelArr.push(
                                    `<li class='sidebar__menu__third-level-title fontstyle__sidebar-third-level-title'><a class='sidebar__menu__third-level-title__link' onclick='TOCActions.scrollTo(event, this)' href='${linkHrefThirdLevel}'>${
                                        item.querySelector("a").textContent
                                    }</a></li>`
                                );
                            }
                        );
                        seconLevelArr.push(
                            `<li class='sidebar__menu__second-level-title fontstyle__sidebar-second-level-title'><a class='sidebar__menu__second-level-title__link' onclick='TOCActions.expandSecondLevel(event, this)' href='${linkHrefSecondLevel}'>${
                                item.querySelector("a").textContent
                            }<svg class='sidebar__menu__second-level-title__link__ico' xmlns="http://www.w3.org/2000/svg"><path d="M1 1l6.5 7L14 1" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></a></li><ul class='sidebar__menu__third-level hide-submenu'>${thirdLevelArr.join(
                                ""
                            )}</ul>`
                        );
                    } else {
                        seconLevelArr.push(
                            `<li class='sidebar__menu__second-level-title fontstyle__sidebar-second-level-title'><a class='sidebar__menu__second-level-title__link' onclick='TOCActions.scrollTo(event, this)' href='${linkHrefSecondLevel}'>${
                                item.querySelector("a").textContent
                            }</a></li>`
                        );
                    }
                });

                // Create whole line with all submenus
                first_level_menu = `<li class='sidebar__menu__first-level-title fontstyle__sidebar-first-level-title'><a class='sidebar__menu__first-level-title__link' onclick='TOCActions.expandFirstLevel(event, this)' href='${linkHrefFirstLevel}'><svg class='sidebar__menu__first-level-title__link__ico' xmlns="http://www.w3.org/2000/svg"><path d="M1 1l6.5 7L14 1" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>${
                    item.querySelector("a").textContent
                }</a></li><ul class='sidebar__menu__second-level hide-submenu'>${seconLevelArr.join(
                    ""
                )}</ul>`;
            } else {
                first_level_menu = `<li class='sidebar__menu__first-level-title fontstyle__sidebar-first-level-title'><a class='sidebar__menu__first-level-title__link' onclick='TOCActions.scrollTo(event, this)' href='${linkHrefFirstLevel}'>${
                    item.querySelector("a").textContent
                }</a></li>`;
            }

            // Inject sidebar menu first level
            sidebarMenu.insertAdjacentHTML("beforeend", first_level_menu);
        });

        // Removee ShadowDom TOC
        docTocHeader.remove();
        docTocList.remove();
    } else {
        console.log(
            "%cCan't find 'version-id'",
            "color: #f45; font-weight: bold;"
        );
    }
};

export { generateToc };
