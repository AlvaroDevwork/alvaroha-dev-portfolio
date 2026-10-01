"use strict";

(() => {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector(".nav-toggle");
    const navigation = document.querySelector("#primary-navigation");

    if (!header || !toggle || !navigation) {
        return;
    }

    const links = navigation.querySelectorAll("a");
    let lastFocusedElement = document.activeElement;

    const desktopQuery = window.matchMedia("(min-width: 56rem)");

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
        lastFocusedElement = event.target;
        if (!desktopQuery.matches && !header.contains(event.target)) {
            closeMenu();
        }
    });

    desktopQuery.addEventListener("change", () => {
        // CSS can hide the focused control before the media-query event fires.
        const focusWasInMenu = navigation.contains(lastFocusedElement);
        closeMenu();
        if (!desktopQuery.matches && focusWasInMenu) {
            toggle.focus();
        } else if (desktopQuery.matches && lastFocusedElement === toggle) {
            links[0].focus();
        }
    });

    setMenuState(false);
    header.classList.add("nav-ready");
})();

// About's tablet journey is independent of the navigation controller.
(() => {
    const about = document.querySelector("#about");
    const journey = about?.querySelector(".journey");
    const controls = about?.querySelector(".journey-controls");
    const previous = controls?.querySelector(".journey-control--previous");
    const next = controls?.querySelector(".journey-control--next");
    const position = controls?.querySelector(".journey-position");
    const items = [...(journey?.querySelectorAll(".journey__item") || [])];

    if (!journey || !controls || !previous || !next || !position || !items.length) {
        return;
    }

    const carouselQuery = window.matchMedia("(max-width: 47.999rem), (min-width: 48rem) and (max-width: 64rem) and (orientation: portrait)");
    let activeIndex = 0;

    const visibleItems = () => items.filter((item) => getComputedStyle(item).display !== "none");

    const renderJourney = (index) => {
        const list = visibleItems();
        const focusedControl = document.activeElement;
        activeIndex = Math.max(0, Math.min(index, list.length - 1));
        const activeItem = list[activeIndex];
        items.forEach((item) => {
            const active = item === activeItem;
            item.classList.toggle("is-active", active);
            item.inert = !active;
            item.setAttribute("aria-hidden", String(!active));
        });
        previous.disabled = activeIndex === 0;
        next.disabled = activeIndex === list.length - 1;
        const year = activeItem.querySelector(".journey__year").textContent.trim();
        position.textContent = `${activeIndex + 1} / ${list.length} · ${year}`;

        // Do not leave keyboard focus on a control that just became disabled.
        if (focusedControl === previous && previous.disabled) {
            next.focus({ preventScroll: true });
        } else if (focusedControl === next && next.disabled) {
            previous.focus({ preventScroll: true });
        }
    };

    const updateMode = () => {
        if (carouselQuery.matches) {
            journey.classList.add("journey-ready");
            journey.setAttribute("role", "region");
            journey.setAttribute("aria-label", "Trayectoria de desarrollo");
            controls.hidden = false;
            renderJourney(0);
        } else {
            if (controls.contains(document.activeElement)) {
                about.setAttribute("tabindex", "-1");
                about.focus({ preventScroll: true });
            }
            controls.hidden = true;
            journey.classList.remove("journey-ready");
            journey.removeAttribute("role");
            journey.removeAttribute("aria-label");
            items.forEach((item) => {
                item.classList.remove("is-active");
                item.inert = false;
                item.removeAttribute("aria-hidden");
            });
        }
    };

    previous.addEventListener("click", () => renderJourney(activeIndex - 1));
    next.addEventListener("click", () => renderJourney(activeIndex + 1));
    carouselQuery.addEventListener("change", updateMode);
    updateMode();
})();

// Work carousel (mobile) shows one project at a time.
(() => {
    const work = document.querySelector("#work");
    const projects = work?.querySelector(".projects");
    const controls = work?.querySelector(".work-controls");
    const previous = controls?.querySelector(".work-control--previous");
    const next = controls?.querySelector(".work-control--next");
    const position = controls?.querySelector(".work-position");
    const items = [...(projects?.querySelectorAll(".project") || [])];

    if (!projects || !controls || !previous || !next || !position || !items.length) {
        return;
    }

    const mobileQuery = window.matchMedia("(max-width: 47.999rem)");
    let activeIndex = 0;

    const renderWork = (index) => {
        const focusedControl = document.activeElement;
        activeIndex = Math.max(0, Math.min(index, items.length - 1));
        items.forEach((item, itemIndex) => {
            const active = itemIndex === activeIndex;
            item.classList.toggle("is-active", active);
            item.inert = !active;
            item.setAttribute("aria-hidden", String(!active));
        });
        previous.disabled = activeIndex === 0;
        next.disabled = activeIndex === items.length - 1;
        position.textContent = `${activeIndex + 1} / ${items.length}`;

        // Do not leave keyboard focus on a control that just became disabled.
        if (focusedControl === previous && previous.disabled) {
            next.focus({ preventScroll: true });
        } else if (focusedControl === next && next.disabled) {
            previous.focus({ preventScroll: true });
        }
    };

    const updateMode = () => {
        if (mobileQuery.matches) {
            projects.classList.add("work-ready");
            projects.setAttribute("role", "region");
            projects.setAttribute("aria-label", "Proyectos seleccionados");
            controls.hidden = false;
            renderWork(0);
        } else {
            if (controls.contains(document.activeElement)) {
                work.setAttribute("tabindex", "-1");
                work.focus({ preventScroll: true });
            }
            controls.hidden = true;
            projects.classList.remove("work-ready");
            projects.removeAttribute("role");
            projects.removeAttribute("aria-label");
            items.forEach((item) => {
                item.classList.remove("is-active");
                item.inert = false;
                item.removeAttribute("aria-hidden");
            });
        }
    };

    previous.addEventListener("click", () => renderWork(activeIndex - 1));
    next.addEventListener("click", () => renderWork(activeIndex + 1));
    mobileQuery.addEventListener("change", updateMode);
    updateMode();
})();

// Hero tagline typewriter effect.
(() => {
    const role = document.querySelector(".hero__role");
    if (!role) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const fullText = role.textContent.replace(/\s+/g, " ").trim();
    role.setAttribute("aria-label", fullText);
    role.textContent = "";
    role.classList.add("is-typing");

    let index = 0;
    const step = () => {
        if (index >= fullText.length) {
            role.classList.remove("is-typing");
            return;
        }

        role.textContent += fullText[index];
        index += 1;

        const isSeparator = fullText[index - 1] === "·";
        const delay = isSeparator ? 380 : 24 + Math.random() * 30;
        setTimeout(step, delay);
    };

    step();
})();
