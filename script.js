
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navigationItems = document.querySelectorAll(".nav-links a");

// Deschide și închide meniul pe telefon
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Închide meniul după alegerea unei secțiuni
navigationItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Anul curent în footer
document.querySelector("#year").textContent = new Date().getFullYear();

// WhatsApp — înlocuiește numărul demonstrativ cu cel real
const whatsappNumber = "";
const whatsappMessage = encodeURIComponent(
    "Salut! Aș dori să fac o programare la NOIR BARBER CLUB."
);

document.querySelectorAll(".whatsapp-link").forEach((button) => {
    button.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
});
