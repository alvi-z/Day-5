/* =====================================================
   DAY 5 — COTTON CANDY
===================================================== */


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function goToPage(pageNumber) {

  const pages =
    document.querySelectorAll(".page");


  pages.forEach(function(page) {

    page.classList.add("hidden");

  });


  const selectedPage =
    document.getElementById(
      "page" + pageNumber
    );


  if (selectedPage) {

    selectedPage.classList.remove(
      "hidden"
    );

  }


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}



/* =====================================================
   COTTON-CANDY CLOUDS
===================================================== */

function createClouds(
  containerId,
  amount
) {

  const container =
    document.getElementById(
      containerId
    );


  if (!container) {
    return;
  }


  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const cloud =
      document.createElement(
        "div"
      );


    cloud.className =
      "cloud";


    cloud.textContent =
      "☁";


    cloud.style.left =
      Math.random() * 92 +
      "%";


    cloud.style.top =
      Math.random() * 92 +
      "%";


    cloud.style.fontSize =
      (
        35 +
        Math.random() * 55
      ) + "px";


    cloud.style.transform =
      "rotate(" +
      (
        -8 +
        Math.random() * 16
      ) +
      "deg)";


    cloud.style.opacity =
      (
        0.45 +
        Math.random() * 0.4
      );


    container.appendChild(
      cloud
    );

  }

}


createClouds(
  "clouds1",
  12
);

createClouds(
  "clouds2",
  10
);

createClouds(
  "clouds3",
  10
);

createClouds(
  "clouds4",
  12
);



/* =====================================================
   DATE RIDDLE
===================================================== */

function checkDate() {

  const input =
    document.getElementById(
      "dateAnswer"
    );


  const result =
    document.getElementById(
      "dateResult"
    );


  /*
     Remove spaces so that
     04 - 07 - 2026 and
     04-07-2026 both work.
  */

  const entered =
    input.value
      .trim()
      .replace(
        /\s/g,
        ""
      );


  /*
     Correct answer:
     04 - 07 - 2026
  */

  const correct =
    "04-07-2026";


  if (
    entered === correct
  ) {

    result.innerHTML =
      "Correct! Good job.";

    input.style.borderColor =
      "#8eaf87";


    setTimeout(function() {

      goToPage(3);

    }, 1400);

  }

  else {

    result.innerHTML =
      "Nope. Think carefully.";

    input.style.borderColor =
      "#d99aaa";

  }

}



/* =====================================================
   ALLOW ENTER KEY
===================================================== */

document
  .getElementById(
    "dateAnswer"
  )
  .addEventListener(
    "keydown",
    function(event) {

      if (
        event.key ===
        "Enter"
      ) {

        checkDate();

      }

    }
  );



/* =====================================================
   LETTER OPENING
===================================================== */

function openLetter() {

  const cover =
    document.getElementById(
      "letterCover"
    );


  /*
     Small opening effect
  */

  cover.style.transform =
    "scale(0.92)";


  cover.style.opacity =
    "0";


  setTimeout(
    function() {

      goToPage(4);

    },
    500
  );

}
