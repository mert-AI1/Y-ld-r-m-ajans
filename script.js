document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     LOADING SCREEN
  ===================================================== */

  const loader =
    document.getElementById("loader");

  const progress =
    document.getElementById("loadingProgress");


  if (loader && progress) {

    let current = 0;

    const loading =
      setInterval(() => {

        current += 2;

        if (current >= 100) {

          current = 100;

          progress.style.width =
            "100%";

          clearInterval(loading);


          setTimeout(() => {

            loader.classList.add(
              "finished"
            );

          }, 500);

        } else {

          progress.style.width =
            current + "%";

        }

      }, 35);

  }


  /* =====================================================
     GERÇEK KAR YAĞIŞI
  ===================================================== */

  const snow =
    document.querySelector(".snow");


  if (snow) {

    const amount =
      window.innerWidth <= 650
        ? 55
        : 90;


    for (let i = 0; i < amount; i++) {

      const flake =
        document.createElement("span");


      flake.className =
        "snowflake";

      flake.textContent =
        "❄";


      const size =
        Math.random() * 10 + 5;

      const opacity =
        Math.random() * .55 + .25;

      const duration =
        Math.random() * 9 + 9;

      const delay =
        Math.random() * -18;


      const drift1 =
        Math.random() * 100 - 50;

      const drift2 =
        Math.random() * 160 - 80;

      const drift3 =
        Math.random() * 100 - 50;

      const drift4 =
        Math.random() * 180 - 90;


      const blur =
        Math.random() > .75
          ? (Math.random() * 1.2)
          : 0;


      flake.style.left =
        Math.random() * 100 + "%";


      flake.style.setProperty(
        "--snow-size",
        size + "px"
      );


      flake.style.setProperty(
        "--snow-opacity",
        opacity
      );


      flake.style.setProperty(
        "--snow-duration",
        duration + "s"
      );


      flake.style.setProperty(
        "--snow-delay",
        delay + "s"
      );


      flake.style.setProperty(
        "--snow-drift-1",
        drift1 + "px"
      );


      flake.style.setProperty(
        "--snow-drift-2",
        drift2 + "px"
      );


      flake.style.setProperty(
        "--snow-drift-3",
        drift3 + "px"
      );


      flake.style.setProperty(
        "--snow-drift-4",
        drift4 + "px"
      );


      flake.style.setProperty(
        "--snow-blur",
        blur + "px"
      );


      snow.appendChild(flake);

    }

  }


  /* =====================================================
     MOBİL MENÜ
  ===================================================== */

  const menu =
    document.querySelector(".menu-btn");

  const nav =
    document.querySelector(".navbar nav");


  if (menu && nav) {

    menu.addEventListener(
      "click",
      () => {

        nav.classList.toggle(
          "open"
        );

      }
    );

  }


  document
    .querySelectorAll(
      ".navbar nav a"
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          if (nav) {
            nav.classList.remove(
              "open"
            );
          }

        }
      );

    });


  /* =====================================================
     REVEAL
  ===================================================== */

  const elements =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    "IntersectionObserver"
    in window
  ) {

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(
            entry => {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "visible"
                );

                observer.unobserve(
                  entry.target
                );

              }

            }
          );

        },
        {
          threshold: .12
        }
      );


    elements.forEach(
      element => {

        observer.observe(
          element
        );

      }
    );

  } else {

    elements.forEach(
      element => {

        element.classList.add(
          "visible"
        );

      }
    );

  }


  /* =====================================================
     SMOOTH SCROLL
  ===================================================== */

  document
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const id =
            link.getAttribute(
              "href"
            );


          if (
            !id ||
            id === "#"
          ) {
            return;
          }


          const target =
            document.querySelector(
              id
            );


          if (!target) {
            return;
          }


          event.preventDefault();


          const top =
            target.getBoundingClientRect()
              .top +
            window.scrollY -
            86;


          window.scrollTo({

            top: top,

            behavior: "smooth"

          });

        }
      );

    });

});
