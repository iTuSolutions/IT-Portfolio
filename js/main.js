
document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const saved = localStorage.getItem("itu-theme");
  if (saved === "dark") root.classList.add("dark");

  document.querySelectorAll("[data-theme-toggle]").forEach(btn => {
    btn.addEventListener("click", () => {
      root.classList.toggle("dark");
      localStorage.setItem("itu-theme", root.classList.contains("dark") ? "dark" : "light");
      document.querySelectorAll("[data-theme-icon]").forEach(i => {
        i.className = root.classList.contains("dark") ? "fa-solid fa-sun" : "fa-solid fa-moon";
      });
    });
  });

  document.querySelectorAll("[data-mobile-toggle]").forEach(btn => {
    btn.addEventListener("click", () => {
      const menu = document.querySelector("[data-mobile-menu]");
      if (menu) menu.classList.toggle("mobile-open");
    });
  });

  document.querySelectorAll("[data-mobile-services]").forEach(btn => {
    btn.addEventListener("click", () => {
      const sub = document.querySelector("[data-mobile-services-menu]");
      if (sub) sub.classList.toggle("hidden");
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("show"); });
  }, {threshold:.12});
  document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  document.querySelectorAll("form[data-demo-form]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const msg = form.querySelector("[data-form-message]");
      if (msg) {
        msg.textContent = "Thank you. Your enquiry has been captured. Connect this form to your preferred email/form service to receive submissions.";
        msg.classList.remove("hidden");
      }
      form.reset();
    });
  });
});
