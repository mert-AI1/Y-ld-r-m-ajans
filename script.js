/* ================= MENÜ ================= */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

menuBtn?.addEventListener("click", () => {
  nav.classList.toggle("open");
});


document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});


/* ================= SCROLL ANİMASYONLARI ================= */

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }

    });

  },
  {
    threshold: 0.12
  }
);


document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});


/* ================= NAVBAR AKTİF MENÜ ================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 180;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }

  });


  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }

  });

});


/* ================= MOUSE PARALLAX ================= */

const heroArt = document.querySelector(".hero-art");

if (heroArt && window.innerWidth > 900) {

  window.addEventListener("mousemove", (event) => {

    const x = (window.innerWidth / 2 - event.clientX) / 50;
    const y = (window.innerHeight / 2 - event.clientY) / 50;

    heroArt.style.transform =
      `translate(${x}px, ${y}px)`;

  });

}


/* ================= YILDIRIM EFEKTİ ================= */

const bolt = document.querySelector(".big-bolt");

if (bolt) {

  setInterval(() => {

    if (Math.random() > 0.72) {

      bolt.style.opacity = "0.55";

      setTimeout(() => {
        bolt.style.opacity = "1";
      }, 80);

      setTimeout(() => {
        bolt.style.opacity = "0.7";
      }, 150);

      setTimeout(() => {
        bolt.style.opacity = "1";
      }, 220);

    }

  }, 2500);

}


/* ================= SAYFA AÇILIŞI ================= */

window.addEventListener("load", () => {

  document.querySelectorAll(".hero .reveal").forEach((element, index) => {

    setTimeout(() => {
      element.classList.add("visible");
    }, 250 + index * 250);

  });

});
