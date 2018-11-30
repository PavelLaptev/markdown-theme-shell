const scrollToPosition = (event, el) => {
    event.preventDefault();

    const elmnt = document.querySelector(el.getAttribute("href"));
    const offset = 60;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elRect = elmnt.getBoundingClientRect().top;
    const elementPosition = elRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
};

const TOCActions = {
    expandFirstLevel: (event, thisObj) => {
        thisObj.parentNode.nextSibling.classList.toggle("hide-submenu");
        thisObj
            .querySelector(".sidebar__menu__first-level-title__link__ico")
            .classList.toggle("fix-ico");

        scrollToPosition(event, thisObj);
    },
    expandSecondLevel: (event, thisObj) => {
        thisObj.parentNode.nextSibling.classList.toggle("hide-submenu");

        scrollToPosition(event, thisObj);
    },
    scrollTo: (event, thisObj) => {
        scrollToPosition(event, thisObj);
    }
};

export { TOCActions };
