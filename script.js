// CHARMS | Animações e interações
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll(".main-nav a");
  const progress = document.querySelector(".scroll-progress");
  const backToTop = document.querySelector(".back-to-top");
  const year = document.querySelector("#year");

  if (year) year.textContent = new Date().getFullYear();

  // Menu mobile: abre e fecha pelo botão, link ou tecla Escape.
  function closeMenu() {
    if (!menuButton || !nav) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
  }

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
      nav.classList.toggle("open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });
    navLinks.forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 650) closeMenu();
    });
  }

  // Revela os blocos quando entram na tela.
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }

  // Barra de progresso, botão de voltar ao topo e efeitos leves de rolagem.
  let ticking = false;
  function updateScrollUI() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    if (progress) progress.style.width = `${percent}%`;
    if (backToTop) backToTop.classList.toggle("visible", window.scrollY > 500);
    ticking = false;
  }
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollUI);
      ticking = true;
    }
  }, { passive: true });
  updateScrollUI();

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    });
  }

  // Pequeno efeito de inclinação nos cards em dispositivos com mouse.
  const cards = document.querySelectorAll(".product-card");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (finePointer) {
    cards.forEach(card => {
      card.addEventListener("mousemove", event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `translateY(-7px) perspective(900px) rotateX(${y * -2}deg) rotateY(${x * 2}deg)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }
});
