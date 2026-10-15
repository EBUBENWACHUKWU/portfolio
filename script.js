
document.addEventListener("DOMContentLoaded", function () {
    // Project descriptions shown in the Details modal.
    const projectInformation = {
        portfolio: {
            title: "Portfolio Website",
            description:
                "A personal portfolio built with HTML, CSS, and JavaScript to showcase projects, skills, certification, and experience."
        },
        ecommerce: {
            title: "E-Commerce Scrum Project",
            description:
                "An e-commerce project organized using Scrum and Jira, including backlog management, Sprint Planning, Sprint Reviews, and progress tracking."
        },
        staking: {
            title: "Scrum Staking DApp Project",
            description:
                "A blockchain staking DApp project documented through Scrum planning, Sprint tracking, Reviews, and Retrospectives."
        },
        remittance: {
            title: "AI Remittance Document Processing Automation",
            description:
                "An n8n workflow for processing remittance PDFs, validating payment data, detecting duplicates, routing records for human review, logging results, and sending email notifications."
        },
        "customer-support": {
            title: "AI Customer Support Ticket Management",
            description:
                "An AI-powered customer support automation project using n8n, AI agents, Supabase, and a ticket management dashboard."
        },
        "scrum-ai": {
            title: "AI Scrum Retrospective Assistant",
            description:
                "An AI-powered n8n workflow that analyzes Sprint Retrospective feedback and generates structured insights and action items."
        },
        "lead-crm": {
            title: "AI Lead Qualification & CRM Agent",
            description:
                "An n8n automation that classifies leads as Hot, Warm, or Cold, records results in Google Sheets, and sends email notifications."
        }
    };

    // Modal elements.
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeButton = document.getElementById("close-modal");

    // Gallery IDs must match the IDs in index.html.
    const galleryIds = {
        remittance: "remittance-gallery",
        "customer-support": "customer-support-gallery",
        "scrum-ai": "scrum-ai-gallery",
        "lead-crm": "lead-crm-gallery"
    };

    function hideAllGalleries() {
        Object.values(galleryIds).forEach(function (galleryId) {
            const gallery = document.getElementById(galleryId);
            if (gallery) {
                gallery.hidden = true;
            }
        });
    }

    function openProjectModal(projectKey, galleryKey = null) {
        if (!modal || !modalTitle || !modalDescription) {
            console.error("Project modal elements are missing from index.html.");
            return;
        }

        const project = projectInformation[projectKey];

        if (!project) {
            console.error("Project information not found:", projectKey);
            return;
        }

        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;

        // Hide previous galleries before showing the selected gallery.
        hideAllGalleries();

        if (galleryKey && galleryIds[galleryKey]) {
            const gallery = document.getElementById(galleryIds[galleryKey]);

            if (gallery) {
                gallery.hidden = false;
            }
        }

        const modalContent = modal.querySelector(".modal-content");

        if (modalContent) {
            modalContent.scrollTop = 0;
        }

        modal.style.display = "flex";
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");

        if (closeButton) {
            closeButton.focus();
        }
    }

    function closeProjectModal() {
        if (!modal) return;

        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
        hideAllGalleries();
    }

    // Details buttons: open the project description without a gallery.
    document.querySelectorAll(".details-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            openProjectModal(button.dataset.project);
        });
    });

    // Screenshot buttons: each button opens only its own project gallery.
    const galleryButtons = {
        "remittance-screenshots": "remittance",
        "customer-support-screenshots": "customer-support",
        "scrum-ai-screenshots": "scrum-ai",
        "lead-crm-screenshots": "lead-crm"
    };

    Object.entries(galleryButtons).forEach(function ([buttonId, projectKey]) {
        const button = document.getElementById(buttonId);

        if (button) {
            button.addEventListener("click", function () {
                openProjectModal(projectKey, projectKey);
            });
        }
    });

    // Also support gallery buttons that use data-gallery attributes.
    document.querySelectorAll(".gallery-btn[data-gallery]").forEach(function (button) {
        button.addEventListener("click", function () {
            const projectKey = button.dataset.gallery;

            if (galleryIds[projectKey]) {
                openProjectModal(projectKey, projectKey);
            }
        });
    });

    // Close modal using the close button.
    if (closeButton) {
        closeButton.addEventListener("click", closeProjectModal);
    }

    // Close modal by clicking its backdrop.
    if (modal) {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeProjectModal();
            }
        });

        // Start with modal closed.
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
    }

    // Close modal with Escape.
    document.addEventListener("keydown", function (event) {
        if (
            event.key === "Escape" &&
            modal &&
            modal.style.display === "flex"
        ) {
            closeProjectModal();
        }
    });

    // Project category filters.
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedFilter = button.dataset.filter;

            filterButtons.forEach(function (filterButton) {
                filterButton.classList.toggle(
                    "active",
                    filterButton === button
                );
            });

            projectCards.forEach(function (card) {
                const categories = (card.dataset.category || "")
                    .split(/\s+/)
                    .filter(Boolean);

                const shouldShow =
                    selectedFilter === "all" ||
                    categories.includes(selectedFilter);

                card.style.display = shouldShow ? "" : "none";
            });
        });
    });

    // Dark mode.
    const darkModeButton = document.getElementById("dark-mode-btn");

    if (darkModeButton) {
        darkModeButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            const darkModeEnabled =
                document.body.classList.contains("dark-mode");

            darkModeButton.textContent = darkModeEnabled
                ? "Light Mode"
                : "Dark Mode";

            darkModeButton.setAttribute(
                "aria-pressed",
                String(darkModeEnabled)
            );
        });
    }

    // Learn More button.
    const learnMoreButton = document.getElementById("change-text-btn");
    const mainHeading = document.getElementById("main-heading");

    if (learnMoreButton && mainHeading) {
        learnMoreButton.addEventListener("click", function () {
            mainHeading.textContent =
                "Building Practical Solutions with Scrum, AI, and Technology";

            const about = document.getElementById("about");

            if (about) {
                about.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    }

    // Show and hide About section.
    const toggleAboutButton = document.getElementById("toggle-about-btn");
    const aboutSection = document.getElementById("about");

    if (toggleAboutButton && aboutSection) {
        toggleAboutButton.addEventListener("click", function () {
            const isHidden =
                window.getComputedStyle(aboutSection).display === "none";

            aboutSection.style.display = isHidden ? "" : "none";
            toggleAboutButton.textContent = isHidden
                ? "Hide About"
                : "Show About";
        });
    }

    // Back to top.
    const topButton = document.getElementById("top-btn");

    if (topButton) {
        topButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Smooth navigation.
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Report image errors in the browser console.
    document.querySelectorAll("img").forEach(function (image) {
        image.addEventListener("error", function () {
            console.error(
                "Image failed to load. Check this exact path:",
                image.getAttribute("src")
            );

            image.classList.add("image-load-error");
        });
    });
});
