"use strict";

(() => {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector(".nav-toggle");
    const navigation = document.querySelector("#primary-navigation");

    if (!header || !toggle || !navigation) {
        return;
    }

    const links = navigation.querySelectorAll("a");

    const desktopQuery = window.matchMedia("(min-width: 48rem)");

    const setMenuState = (isOpen) => {
        toggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        toggle.setAttribute(
            "aria-label",
            isOpen
                ? "Cerrar navegación"
                : "Abrir navegación"
        );

        navigation.dataset.open = String(isOpen);
    };

    const closeMenu = () => {
        setMenuState(false);
    };

    const openMenu = () => {
        setMenuState(true);
    };

    toggle.addEventListener("click", () => {
        const isOpen =
            toggle.getAttribute("aria-expanded") === "true";

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    links.forEach((link) => {
        link.addEventListener("click", () => {
            if (!desktopQuery.matches) {
                closeMenu();
                const destination = document.querySelector(link.hash);
                if (destination) {
                    destination.setAttribute("tabindex", "-1");
                    destination.focus({ preventScroll: true });
                }
            }
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") {
            return;
        }

        const isOpen =
            toggle.getAttribute("aria-expanded") === "true";

        if (!isOpen) {
            return;
        }

        closeMenu();
        toggle.focus();
    });

    document.addEventListener("click", (event) => {
        if (desktopQuery.matches) {
            return;
        }

        const target = event.target;

        if (!(target instanceof Node)) {
            return;
        }

        if (!header.contains(target)) {
            closeMenu();
            if (navigation.contains(document.activeElement)) {
                toggle.focus({ preventScroll: true });
            }
        }
    });

    document.addEventListener("focusin", (event) => {
        if (!desktopQuery.matches && !header.contains(event.target)) {
            closeMenu();
        }
    });

    desktopQuery.addEventListener("change", () => {
        const focusWasInMenu = navigation.contains(document.activeElement);
        closeMenu();
        if (!desktopQuery.matches && focusWasInMenu) {
            toggle.focus();
        } else if (desktopQuery.matches && document.activeElement === toggle) {
            links[0].focus();
        }
    });

    setMenuState(false);
    header.classList.add("nav-ready");
})();
