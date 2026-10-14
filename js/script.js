
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

document.getElementById("year").textContent =
    new Date().getFullYear();

document.getElementById("enquiryForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const subject =
        `Mathematics lesson enquiry - ${formData.get("topic")}`;

    const body = [
        `Name: ${formData.get("name")}`,
        `Reply email: ${formData.get("email")}`,
        `Study level: ${formData.get("level")}`,
        `Topic: ${formData.get("topic")}`,
        "",
        `Message: ${formData.get("message") || "I would like to discuss lessons."}`
    ].join("\n");

    const emailLink =
        `mailto:stephenmomanyi545@gmail.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

    window.location.href = emailLink;
});
