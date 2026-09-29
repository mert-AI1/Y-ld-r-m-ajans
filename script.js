document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     LOADING SCREEN
  ========================== */

  const loader = document.getElementById("loader");
  const progress = document.getElementById("loadingProgress");

  if (loader && progress) {

    let current = 0;

    const loadingInterval = setInterval(() => {

      current += 4;

      if (current >= 100) {
        current = 100;
        progress.style.width = "100%";

        clearInterval(loadingInterval);

        setTimeout(() => {
          loader.classList.add("finished");
          document.body.classList.remove("loading");
        }, 700);

      } else {
        progress.style.width = current + "%";
      }

    }, 80);

  } else {
    document.body.classList.remove("loading");
  }


  /* =========================
     MOBILE MENU
  ========================== */

  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".navbar nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  document.querySelectorAll(".navbar nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav?.classList.remove("open");
    });
  });


  /* =========================
     SCROLL REVEAL
  ========================== */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    revealElements.forEach(element => {
      observer.observe(element);
    });

  } else {

    revealElements.forEach(element => {
      element.classList.add("visible");
    });

  }


  /* =========================
     HERO PARALLAX
  ========================== */

  const hero = document.querySelector(".hero");
  const heroArt = document.getElementById("heroArt");

  if (
    hero &&
    heroArt &&
    window.innerWidth > 650
  ) {

    hero.addEventListener("mousemove", event => {

      const rect = hero.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      heroArt.style.transform =
        `translate(${x * 15}px, ${y * 15}px)`;

    });

    hero.addEventListener("mouseleave", () => {
      heroArt.style.transform = "translate(0, 0)";
    });

  }


  /* =========================
     SMOOTH SCROLL
  ========================== */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      const position =
        target.getBoundingClientRect().top +
        window.scrollY -
        75;

      window.scrollTo({
        top: position,
        behavior: "smooth"
      });

    });

  });

});
