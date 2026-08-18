/* =========================================================
   DEVANSHI SHAH - PORTFOLIO
   Main JavaScript
========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    /* Close menu after clicking a navigation link */

    const navigationLinks =
        document.querySelectorAll(".nav-links a");


    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


/* =========================================================
   2. CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", (event) => {

    if (!menuToggle || !navLinks) {
        return;
    }


    const clickedInsideMenu =
        navLinks.contains(event.target);


    const clickedMenuButton =
        menuToggle.contains(event.target);


    if (
        navLinks.classList.contains("active") &&
        !clickedInsideMenu &&
        !clickedMenuButton
    ) {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});


/* =========================================================
   3. TERMINAL TYPING EFFECT
========================================================= */

const terminalStatus =
    document.querySelector(".terminal-status");


if (terminalStatus) {

    const originalText =
        terminalStatus.textContent.trim();


    terminalStatus.textContent = "";


    let characterIndex = 0;


    function typeTerminalText() {

        if (characterIndex < originalText.length) {

            terminalStatus.textContent +=
                originalText.charAt(characterIndex);

            characterIndex++;

            setTimeout(typeTerminalText, 50);

        }

    }


    setTimeout(typeTerminalText, 700);

}


/* =========================================================
   4. ACTIVE NAVIGATION LINK
========================================================= */

const sections =
    document.querySelectorAll("section[id]");


const navItems =
    document.querySelectorAll(".nav-links a");


function updateActiveNavigation() {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;


        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach((link) => {

        link.classList.remove("active");


        const href =
            link.getAttribute("href");


        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();


/* =========================================================
   5. SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .about-content, .skill-card, .project-card, .contact-content"
    );


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

});


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   6. PROJECT CARD STAGGER EFFECT
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 100}ms`;

});


/* =========================================================
   7. SKILL CARD STAGGER EFFECT
========================================================= */

const skillCards =
    document.querySelectorAll(".skill-card");


skillCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 50}ms`;

});


/* =========================================================
   8. CURRENT YEAR
========================================================= */

const footerText =
    document.querySelector(".footer p");


if (footerText) {

    const currentYear =
        new Date().getFullYear();


    footerText.innerHTML =
        `© ${currentYear} Devanshi Shah. Built with HTML, CSS & JavaScript.`;

}


/* =========================================================
   9. SMOOTH SCROLL FALLBACK
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");


        const target =
            document.querySelector(targetId);


        if (target) {

            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================================
   10. CONSOLE MESSAGE
========================================================= */

console.log(
    "%cDevanshi Shah | DevOps Portfolio",
    "color: #22c55e; font-size: 18px; font-weight: bold;"
);

console.log(
    "Building. Learning. Automating."
);

/* =========================================================
   11. PROJECT DETAILS TOGGLE
========================================================= */

const projectButtons =
    document.querySelectorAll(".project-details-btn");


projectButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const projectId =
            button.getAttribute("data-project");

        const projectDetails =
            document.getElementById(projectId);

        if (!projectDetails) {
            return;
        }


        const isOpen =
            projectDetails.classList.contains("active");


        /* Close the current project */

        projectDetails.classList.toggle("active");


        /* Change button text */

        if (isOpen) {

            button.innerHTML =
                `View Details <span>+</span>`;

        } else {

            button.innerHTML =
                `Hide Details <span>−</span>`;

        }

    });

});