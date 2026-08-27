// ===============================
// MAIN HEADING
// ===============================

let heading = document.getElementById("main-heading");

heading.textContent = "Welcome to My Portfolio!";
heading.style.color = "blue";
heading.style.fontSize = "60px";


// ===============================
// GITHUB BUTTON
// ===============================

let githubButton = document.getElementById("github-btn");

githubButton.addEventListener("click", function () {

    alert("Opening my GitHub profile!");

});


// ===============================
// CAREER PARAGRAPH
// ===============================

let career = document.getElementById("career");


// ===============================
// LEARN MORE BUTTON
// ===============================

let changeButton = document.getElementById("change-text-btn");

function changeCareerText() {

    career.textContent = "Thanks for visiting my portfolio! 👋";

}

changeButton.addEventListener("click", changeCareerText);


// ===============================
// DARK MODE
// ===============================

let darkModeButton = document.getElementById("dark-mode-btn");

let isDarkMode = false;

darkModeButton.addEventListener("click", function () {

    if (isDarkMode) {

        document.body.style.backgroundColor = "#E0F2FE";
        document.body.style.color = "#1F2937";

        darkModeButton.textContent = "Dark Mode";

        isDarkMode = false;

    } else {

        document.body.style.backgroundColor = "#1F2937";
        document.body.style.color = "white";

        darkModeButton.textContent = "Light Mode";

        isDarkMode = true;

    }

});


// ===============================
// SHOW / HIDE ABOUT SECTION
// ===============================

let aboutSection = document.getElementById("about");

let toggleButton = document.getElementById("toggle-about-btn");

let isAboutHidden = false;

toggleButton.addEventListener("click", function () {

    if (isAboutHidden) {

        aboutSection.style.display = "block";

        toggleButton.textContent = "Hide About";

        isAboutHidden = false;

    } else {

        aboutSection.style.display = "none";

        toggleButton.textContent = "Show About";

        isAboutHidden = true;

    }

});


// ===============================
// TYPING ANIMATION
// ===============================

let typingText =
    "Professional Scrum Master (PSM I) | AI Automation Specialist | Front-End Developer Experience";

career.textContent = "";

let index = 0;

function typeText() {

    career.textContent += typingText.charAt(index);

    index++;

}

setInterval(function () {

    if (index < typingText.length) {

        typeText();

    }

}, 100);


// ===============================
// PROJECT FILTER BUTTONS
// ===============================

let allButton = document.getElementById("all-btn");

let htmlButton = document.getElementById("html-btn");

let jsButton = document.getElementById("js-btn");

let scrumButton = document.getElementById("scrum-btn");

let aiButton = document.getElementById("ai-btn");


// ===============================
// PROJECTS
// ===============================

let project1 = document.getElementById("project1");

let project2 = document.getElementById("project2");

let project3 = document.getElementById("project3");

let project4 = document.getElementById("project4");

let project5 = document.getElementById("project5");


// ===============================
// ALL PROJECTS
// ===============================

allButton.addEventListener("click", function () {

    project1.style.display = "flex";
    project2.style.display = "flex";
    project3.style.display = "flex";
    project4.style.display = "flex";
    project5.style.display = "flex";

});


// ===============================
// HTML / CSS PROJECTS
// ===============================

htmlButton.addEventListener("click", function () {

    project1.style.display = "flex";
    project2.style.display = "none";
    project3.style.display = "none";
    project4.style.display = "none";
    project5.style.display = "none";

});


// ===============================
// JAVASCRIPT PROJECTS
// ===============================

jsButton.addEventListener("click", function () {

    project1.style.display = "none";
    project2.style.display = "flex";
    project3.style.display = "none";
    project4.style.display = "none";
    project5.style.display = "none";

});


// ===============================
// SCRUM PROJECTS
// ===============================

scrumButton.addEventListener("click", function () {

    project1.style.display = "none";
    project2.style.display = "flex";
    project3.style.display = "flex";
    project4.style.display = "none";
    project5.style.display = "flex";

});


// ===============================
// AI AUTOMATION PROJECTS
// ===============================

aiButton.addEventListener("click", function () {

    project1.style.display = "none";
    project2.style.display = "none";
    project3.style.display = "none";
    project4.style.display = "flex";
    project5.style.display = "flex";

});


// ===============================
// BACK TO TOP BUTTON
// ===============================

let topButton = document.getElementById("top-btn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

let hiddenSections =
    document.querySelectorAll(".hidden");

window.addEventListener("scroll", revealSections);

function revealSections() {

    hiddenSections.forEach(function (section) {

        let sectionTop =
            section.getBoundingClientRect().top;

        let screenHeight =
            window.innerHeight;

        if (sectionTop < screenHeight - 100) {

            section.classList.add("show");

        }

    });

}


// Run once when page loads
revealSections();


// ===============================
// PROJECT DETAILS MODAL
// ===============================

let modal =
    document.getElementById("project-modal");

let closeModal =
    document.getElementById("close-modal");

let modalTitle =
    document.getElementById("modal-title");

let modalDescription =
    document.getElementById("modal-description");


// ===============================
// PORTFOLIO DETAILS
// ===============================

document
    .getElementById("portfolio-details")
    .addEventListener("click", function (event) {

        event.preventDefault();

        modal.style.display = "flex";

        modalTitle.textContent =
            "Portfolio Website";

        modalDescription.textContent =
            "Designed and developed a fully responsive personal portfolio using HTML, CSS and JavaScript. The website includes project filtering, dark mode, smooth scrolling, animations, responsive layouts and interactive components.";

    });


// ===============================
// E-COMMERCE DETAILS
// ===============================

document
    .getElementById("ecommerce-details")
    .addEventListener("click", function (event) {

        event.preventDefault();

        modal.style.display = "flex";

        modalTitle.textContent =
            "E-Commerce Scrum Project";

        modalDescription.textContent =
            "Managed an Agile e-commerce project using Scrum and Jira. Planned sprints, managed the Product Backlog, tracked sprint progress, facilitated Scrum events and documented Sprint Reviews and Retrospectives.";

    });


// ===============================
// STAKING DAPP DETAILS
// ===============================

document
    .getElementById("staking-details")
    .addEventListener("click", function (event) {

        event.preventDefault();

        modal.style.display = "flex";

       modalTitle.textContent =
    "Scrum Staking DApp Project";

        modalDescription.textContent =
    "Managed a blockchain staking DApp project using Agile and Scrum practices. Used Jira to organize and manage the Product Backlog, plan and track Sprints, monitor progress, facilitate Scrum events, track impediments, and support continuous improvement through Sprint Reviews and Retrospectives.";

    });


// ===============================
// AI CUSTOMER SUPPORT AUTOMATION DETAILS
// ===============================

document
    .getElementById("ai-project-details")
    .addEventListener("click", function (event) {

        event.preventDefault();

        modal.style.display = "flex";

        modalTitle.textContent =
            "AI Customer Support Automation";

        modalDescription.textContent =
            "Built an AI-powered customer-support automation using n8n. The workflow receives customer emails, analyzes customer requests using AI, classifies intent and priority, routes requests based on intent, generates an AI-assisted response, and logs structured support tickets in Google Sheets.";

    });


// ===============================
// AI SCRUM RETROSPECTIVE ASSISTANT DETAILS
// ===============================

document
    .getElementById("scrum-ai-details")
    .addEventListener("click", function (event) {

        event.preventDefault();

        modal.style.display = "flex";

        modalTitle.textContent =
            "AI Scrum Retrospective Assistant";

        // Show project details first.
        // Screenshots remain hidden until the button is clicked.

        modalDescription.innerHTML = `

            <h3>About This Project</h3>

            <p>
                An AI-powered n8n automation designed to help Scrum
                Teams analyze Sprint Retrospective feedback more
                efficiently.
            </p>

            <h3>How It Works</h3>

            <p>
                <strong>1.</strong>
                Sprint Retrospective feedback is entered into the
                n8n workflow.
            </p>

            <p>
                <strong>2.</strong>
                An AI Agent analyzes the feedback.
            </p>

            <p>
                <strong>3.</strong>
                The workflow identifies the feedback category,
                main theme and priority.
            </p>

            <p>
                <strong>4.</strong>
                The AI generates a concise summary and a
                recommended action item.
            </p>

            <p>
                <strong>5.</strong>
                The structured results are automatically stored
                in Google Sheets.
            </p>

            <h3>Technologies Used</h3>

            <p>
                n8n • OpenRouter • AI Agent •
                Structured Output Parser • Google Sheets •
                Google OAuth 2.0
            </p>

            <button
                class="btn"
                id="view-scrum-screenshots"
                style="margin-top: 15px;">

                View Project Screenshots

            </button>

            <div
                id="scrum-screenshots"
                style="display: none; margin-top: 30px;">

                <hr>

                <h3>1. n8n Workflow</h3>

                <img
                    src="screenshots/scrum-retro-workflow.png"
                    alt="AI Scrum Retrospective Assistant Workflow"
                    style="width: 100%; height: auto; margin-bottom: 30px;"
                >

                <h3>2. AI Analysis Output</h3>

                <img
                    src="screenshots/scrum-retro-ai-output.png"
                    alt="AI Analysis Output"
                    style="width: 100%; height: auto; margin-bottom: 30px;"
                >

                <h3>3. Google Sheets Results</h3>

                <img
                    src="screenshots/scrum-retro-sheets.png"
                    alt="Google Sheets Results"
                    style="width: 100%; height: auto; margin-bottom: 20px;"
                >

            </div>

        `;


        // ===============================
        // SHOW / HIDE SCREENSHOTS
        // ===============================

        let screenshotsButton =
            document.getElementById("view-scrum-screenshots");

        let screenshotsSection =
            document.getElementById("scrum-screenshots");


        screenshotsButton.addEventListener("click", function () {

            if (screenshotsSection.style.display === "none") {

                screenshotsSection.style.display = "block";

                screenshotsButton.textContent =
                    "Hide Project Screenshots";

            } else {

                screenshotsSection.style.display = "none";

                screenshotsButton.textContent =
                    "View Project Screenshots";

            }

        });

    });


// ===============================
// CLOSE MODAL
// ===============================

closeModal.addEventListener("click", function () {

    modal.style.display = "none";

    modalDescription.innerHTML = "";

});


// ===============================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ===============================

window.addEventListener("click", function (event) {

    if (event.target === modal) {

        modal.style.display = "none";

        modalDescription.innerHTML = "";

    }

});