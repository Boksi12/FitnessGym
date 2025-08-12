document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop().toLowerCase();

    if (currentPage === "" || currentPage === "index.html") {
        currentPage = "pocetna.html";
    }

    document.querySelectorAll("nav a").forEach(link => {
        if (link.getAttribute("href").toLowerCase() === currentPage) {
            link.classList.add("active");
        }
    });
});
