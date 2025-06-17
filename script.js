
document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully!");
});

function learnMore() {
    alert("Explore our services and products!");
}

document.querySelector(".fa-search").addEventListener("click", function() {
    let searchQuery = document.querySelector("#search-box").value;
    alert("Searching for: " + searchQuery);
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".hero-slide");
    const button = document.getElementById("shopBtn");
    let index = 0;

    function showSlide(i) {
        slides.forEach((slide, idx) => {
            slide.classList.remove("active");
            if (idx === i) slide.classList.add("active");
        });

        // Show button only on first slide
        button.style.display = i === 0 ? "block" : "none";
    }

    showSlide(index);

    setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 4000);
});




