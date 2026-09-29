document.addEventListener("DOMContentLoaded", () => {

  document.body.classList.add("loading");


  /* =========================
     LOADING SCREEN
  ========================== */

  const loader = document.getElementById("loader");
  const progress = document.getElementById("loadingProgress");

  let currentProgress = 0;

  const loadingInterval = setInterval(() => {

    currentProgress += Math.floor(Math.random() * 5) + 2;

    if (currentProgress >= 100) {
      currentProgress = 100;
      clearInterval(loadingInterval);

      progress.style.width = "100%";

      setTimeout(() => {
        loader.classList.add("finished");
        document.body.classList.remove("loading");
      }, 500);
    } else {
      progress.style.width = currentProgress + "%";
    }

  }, 65);


  /* =========================
     MOBILE MENU
  ========================== */

  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".navbar nav");

  menuBtn?.addEventListener("click", () => {
    nav?.classList.toggle("open");
  });


  document.querySelectorAll(".navbar nav a").forEach(link => {

    link.addEventListener("click", () => {
      nav?.classList.remove("open");
    });

  });


  /* =========================
     SCROLL REVEAL
  ========================== */

  const revealElements = document.querySelectorAll(".reveal");

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
      threshold: 0.12
    }
  );


  revealElements.forEach(element => {
    observer.observe(element);
  });


  /* =========================
     HERO PARALLAX
  ========================== */

  const hero = document.querySelector(".hero");
  const heroArt = document.getElementById("heroArt");

  if (
    hero &&
    heroArt &&
    window.matchMedia("(min-width: 651px)").matches
  ) {

    hero.addEventListener("mousemove", event => {

      const rect = hero.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      heroArt.style.transform = `
        translate(${x * 18}px, ${y * 18}px)
      `;

    });


    hero.addEventListener("mouseleave", () => {

      heroArt.style.transform = "translate(0, 0)";

    });

  }


  /* =========================
     SMOOTH ANCHOR OFFSET
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

      const offset = 75;

      const position =
        target.getBoundingClientRect().top +
        window.scrollY -
        offset;

      window.scrollTo({
        top: position,
        behavior: "smooth"
      });

    });

  });

});
