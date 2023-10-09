const sections = document.querySelectorAll("section, article");
const anchor = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    if (current != "" && current != null && current != "profile" && current != "contact") {
        changeActiveNav(current);
    }
});

function changeActiveNav(current) {
    anchor.forEach((a) => {
        console.log(current);
        a.classList.remove("nav-active");
        if (a.href.includes(current)) {
            a.classList.add("nav-active");
        }
    });
}