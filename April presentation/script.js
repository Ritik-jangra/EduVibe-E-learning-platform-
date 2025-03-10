// Hero-section
function searchCourse() {
    let searchInput = document.getElementById("searchInput").value.trim();

    if (searchInput === "") {
        alert("Please enter a course to search!");
    } else {
        alert("Searching for: " + searchInput);
        // You can integrate this with a search feature in the future
    }
}

// Service sliding bar
document.addEventListener("DOMContentLoaded", function () {
    const sliderTrack = document.querySelector(".slider-track");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Slide Width
    const slideWidth = document.querySelector(".slide").offsetWidth + 15;

    // Scroll Right
    nextBtn.addEventListener("click", () => {
        sliderTrack.scrollBy({ left: slideWidth, behavior: "smooth" });
    });

    // Scroll Left
    prevBtn.addEventListener("click", () => {
        sliderTrack.scrollBy({ left: -slideWidth, behavior: "smooth" });
    });
});

// Service sliding bar
document.addEventListener("DOMContentLoaded", function () {
    const sliderTrack = document.querySelector(".service-slider-track");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Slide Width
    const slideWidth = document.querySelector(".slide").offsetWidth + 15;

    // Scroll Right
    nextBtn.addEventListener("click", () => {
        sliderTrack.scrollBy({ left: slideWidth, behavior: "smooth" });
    });

    // Scroll Left
    prevBtn.addEventListener("click", () => {
        sliderTrack.scrollBy({ left: -slideWidth, behavior: "smooth" });
    });
});

// Services
const services = [
    { name: "Career and Growth", subservices: ["Boost your skills & opportunities"], link: "career-growth.html" },
    { name: "Coding Challenge", subservices: ["Solve, compete, excel"] },
    { name: "Community and Collaboration", subservices: ["Connect, share, grow"] },
    { name: "Courses", subservices: ["Learn anytime, anywhere"] },
    { name: "E-Certificate", subservices: ["Showcase your achievements", "Skill-Based Certificate"] },
    { name: "Freelancing", subservices: ["Earn with your skills"] },
    { name: "Hackathon", subservices: ["Innovate, build, compete"] },
    { name: "Internship", subservices: ["Gain real-world experience"] },
    { name: "Quiz Battle", subservices: ["Test knowledge, win"] },
    { name: "Study Room", subservices: ["Focus, learn, succeed"] },
    // { name: "Internet of Things (IoT)", subservices: ["Embedded Systems", "IoT Security", "Arduino & Raspberry Pi"] },
];

const serviceContainer = document.querySelector(".service-container");

// Live News
document.addEventListener("DOMContentLoaded", function () {
    const updatesBtn = document.getElementById("liveUpdatesBtn");
    const updatesModal = document.getElementById("updatesModal");
    const closeBtn = document.querySelector(".close-btn");
    const updatesList = document.getElementById("updatesList");

    // Example News Updates
    const updatesArray = [
        "📢 AI Chatbot Feature Now Available!",
        "🔥 New Leaderboard System - Compete with Peers!",
        "📝 Upcoming Coding Competition - Register Now!",
        "🚀 Advanced DSA Course Launched!",
        "🎯 New 'Daily Challenges' for Coding Practice!",
        "🔄 System Update: Performance Improved!",
        "📅 Live Q&A with Experts - This Friday!",
        "🏆 Scholarship Contest Open for Registration!",
        "💡 New UI Design Update Released!",
        "⚡ Faster Website Loading - Speed Boost!",
        "🎉 Congrats! 5000+ Students Joined EduVibe!",
        "📢 New Internship Opportunities for Top Performers!",
        "🎮 Hackathon Event Starts Next Week - Get Ready!"
    ];

        // Display the first few updates in the modal
        updatesArray.slice(0, 5).forEach((update) => {
            const newUpdate = document.createElement("li");
            newUpdate.innerText = update;
            updatesList.appendChild(newUpdate);
        });
    
        // Open modal on click
        updatesBtn.addEventListener("click", function () {
            updatesModal.style.display = "flex";
        });
    
        // Close modal on close button click
        closeBtn.addEventListener("click", function () {
            updatesModal.style.display = "none";
        });
    
        // Close modal when clicking outside
        window.addEventListener("click", function (event) {
            if (event.target === updatesModal) {
                updatesModal.style.display = "none";
            }
        });
    
        // Simulating new updates every few seconds
        setInterval(() => {
            const newUpdate = document.createElement("li");
            newUpdate.innerText = updatesArray[Math.floor(Math.random() * updatesArray.length)];
            updatesList.appendChild(newUpdate);
        }, 5000); // Adds a new update every 5 seconds
    });

    // Daily Goals
document.addEventListener("DOMContentLoaded", function () {
    const addGoalButton = document.querySelector("#add-goal-btn");
    const goalInput = document.getElementById("new-goal");
    const goalList = document.getElementById("goal-list");
    const completedCount = document.getElementById("completed-count");

    // Function to count completed goals
    function updateCompletedCount() {
        let completedTasks = document.querySelectorAll(".goal-check:checked").length;
        completedCount.textContent = completedTasks;
    }

    // Function to add a new goal
    function addGoal() {
        let newGoalText = goalInput.value.trim();

        if (newGoalText === "") {
            alert("Please enter a goal!");
            return;
        }

        // Create a new list item
        let newGoalItem = document.createElement("li");

        // Create a checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "goal-check";

        // Create a text span for the goal
        let goalText = document.createElement("span");
        goalText.textContent = newGoalText;

        // Append elements to the new goal item
        newGoalItem.appendChild(checkbox);
        newGoalItem.appendChild(goalText);

        // Append the new goal to the list
        goalList.appendChild(newGoalItem);

        // Clear input field
        goalInput.value = "";

        // Update completed count when a goal is checked/unchecked
        checkbox.addEventListener("change", updateCompletedCount);
    }

    // Event listener for the "Add Goal" button
    addGoalButton.addEventListener("click", addGoal);

    // Event delegation for marking tasks as completed or undone
    goalList.addEventListener("change", function (event) {
        if (event.target.classList.contains("goal-check")) {
            updateCompletedCount();
        }
    });
});

// Student achievements
document.addEventListener("DOMContentLoaded", function () {
    const addAchievementButton = document.querySelector("#add-achievement-btn");
    const achievementTitleInput = document.getElementById("new-achievement-title");
    const achievementDescInput = document.getElementById("new-achievement-desc");
    const achievementsList = document.getElementById("achievements-list");

    // Function to add a new achievement
    function addAchievement() {
        let title = achievementTitleInput.value.trim();
        let desc = achievementDescInput.value.trim();

        if (title === "" || desc === "") {
            alert("Please enter both title and description!");
            return;
        }

        // Create a new achievement wrapper
        let achievementWrapper = document.createElement("div");
        achievementWrapper.className = "achievement-wrapper";

        // Create small close button (❌)
        let closeButton = document.createElement("span");
        closeButton.className = "close-btn";
        closeButton.textContent = "❌";
        closeButton.addEventListener("click", function () {
            achievementsList.removeChild(achievementWrapper);
        });

        // Create new achievement card
        let newAchievement = document.createElement("div");
        newAchievement.className = "achievement-card";

        let achievementTitle = document.createElement("h3");
        achievementTitle.textContent = title;

        let achievementDesc = document.createElement("p");
        achievementDesc.textContent = desc;

        // Append elements
        newAchievement.appendChild(achievementTitle);
        newAchievement.appendChild(achievementDesc);
        achievementWrapper.appendChild(closeButton);
        achievementWrapper.appendChild(newAchievement);
        achievementsList.appendChild(achievementWrapper);

        // Clear input fields
        achievementTitleInput.value = "";
        achievementDescInput.value = "";
    }

    // Event listener for adding achievements
    addAchievementButton.addEventListener("click", addAchievement);

    // Event listener for removing existing achievements
    document.querySelectorAll(".close-btn").forEach(button => {
        button.addEventListener("click", function () {
            button.parentElement.remove();
        });
    });
});

// Community and Collaboration
const slider = document.querySelector('.community-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    slider.scrollLeft = scrollLeft - walk;
});


// Generate course boxes dynamically
services.forEach((service) => {
    let serviceDiv = document.createElement("div");
    serviceDiv.classList.add("service");
    serviceDiv.innerHTML = `<h3>${service.name}</h3>`;

    let subservicesDiv = document.createElement("div");
    subservicesDiv.classList.add("subservices");

    service.subservices.forEach((subservice) => {
        let subDiv = document.createElement("div");
        subDiv.classList.add("subservice");
        subDiv.innerText = subservice;
        subservicesDiv.appendChild(subDiv);
    });

    serviceDiv.appendChild(subservicesDiv);
    serviceContainer.appendChild(serviceDiv);
});

const useContainer = document.querySelector(".use-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let isDragging = false;
// let startX, scrollLeft;

// Left & Right Buttons
nextBtn.addEventListener("click", () => {
    useContainer.scrollBy({ left: 200, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
    useContainer.scrollBy({ left: -200, behavior: "smooth" });
});

// Drag to Scroll Feature
useContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - useContainer.offsetLeft;
    scrollLeft = useContainer.scrollLeft;
    useContainer.style.cursor = "grabbing";
});

useContainer.addEventListener("mouseleave", () => {
    isDragging = false;
    useContainer.style.cursor = "grab";
});

useContainer.addEventListener("mouseup", () => {
    isDragging = false;
    useContainer.style.cursor = "grab";
});

useContainer.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - useContainer.offsetLeft;
    const walk = (x - startX) * 2;
    useContainer.scrollLeft = scrollLeft - walk;
});

// Trending - topics
document.addEventListener("DOMContentLoaded", function () {
    const addTopicButton = document.querySelector("#add-topic-btn");
    const topicTitleInput = document.getElementById("new-topic-title");
    const topicDescInput = document.getElementById("new-topic-desc");
    const trendingList = document.getElementById("trending-list");

    // Function to add a new topic
    function addTopic() {
        let title = topicTitleInput.value.trim();
        let desc = topicDescInput.value.trim();

        if (title === "" || desc === "") {
            alert("Please enter both title and description!");
            return;
        }

        // Create new trending topic card
        let newTopic = document.createElement("div");
        newTopic.className = "trending-card";

        let topicTitle = document.createElement("h3");
        topicTitle.textContent = title;

        let topicDesc = document.createElement("p");
        topicDesc.textContent = desc;

        // Append elements
        newTopic.appendChild(topicTitle);
        newTopic.appendChild(topicDesc);
        trendingList.appendChild(newTopic);

        // Clear input fields
        topicTitleInput.value = "";
        topicDescInput.value = "";
    }

    // Event listener for adding topics
    addTopicButton.addEventListener("click", addTopic);
});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------


// FAQ
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".toggle-icon");

        question.addEventListener("click", () => {
            // Toggle active class
            item.classList.toggle("active");

            // Toggle answer visibility
            if (item.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.textContent = "−"; // Change icon to minus
            } else {
                answer.style.maxHeight = null;
                icon.textContent = "+"; // Change icon to plus
            }
        });
    });
});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------






// Back to top
document.addEventListener("DOMContentLoaded", function () {
    const backToTopBtn = document.getElementById("backToTop");

    // Show button when scrolling down 300px
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // Scroll to top when clicked
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
