//numer str pod scrolla
var limit = 1024;
if (window.innerWidth > limit) {
  //do

  let currentPage = 0;
  $(function () {
    //czas animacji
    const animTimeOpacity = 300;
    const animTimeLeftPos = 1200;
    //norwegia na wejsciu, jan pawel drugi
    $("#two").animate({ marginBottom: 150, marginTop: 150 }, 500);
    $(".pageone .photoname").animate(
      {
        left: 120,
      },
      animTimeLeftPos
    );
    $(".pageone").animate({ opacity: 1 });
    //listeners
    $("li#one").on("click", liOneChange);
    $("li#two").on("click", liTwoChange);
    $("li#three").on("click", liThreeChange);
    document.addEventListener("wheel", throttle(scrollChange, 300));
    //button one
    function liOneChange() {
      $(".pagetwo").animate(
        {
          opacity: 0,
        },
        animTimeOpacity
      );
      $("li#two").removeClass("active");
      $(".pagethree").animate(
        {
          opacity: 0,
        },
        animTimeOpacity
      );
      $("li#three").removeClass("active");
      $(".pageone").animate({ opacity: 1 });
      $("li#one").addClass("active");
    }
    // button two
    function liTwoChange() {
      $(".pageone").animate(
        {
          opacity: 0,
        },
        animTimeOpacity
      );
      $("li#one").removeClass("active");
      $(".pagethree").animate(
        {
          opacity: 0,
        },
        animTimeOpacity
      );
      $("li#three").removeClass("active");
      $(".pagetwo").animate({ opacity: 1 });
      $("li#two").addClass("active");
      $(".pagetwo .photoname").animate(
        {
          left: 120,
        },
        animTimeLeftPos
      );
    }
    // button three

    function liThreeChange() {
      $(".pageone").animate(
        {
          opacity: 0,
        },
        animTimeOpacity
      );
      $("li#one").removeClass("active");
      $(".pagetwo").animate(
        {
          opacity: 0,
        },
        animTimeOpacity
      );
      $("li#two").removeClass("active");
      $(".pagethree").animate({ opacity: 1 });
      $("li#three").addClass("active");
      $(".pagethree .photoname").animate(
        {
          left: 120,
        },
        animTimeLeftPos
      );
    }
    //scroll photo change
    function scrollChange(e) {
      if (currentPage === 0 && e.deltaY > 0) {
        liTwoChange();
        currentPage = 1;
      } else if (e.deltaY > 0 && currentPage === 1) {
        liThreeChange();
        currentPage = 2;
      } else if (e.deltaY > 0 && currentPage === 2) {
        liOneChange();
        currentPage = 0;
      }
      if (currentPage === 0 && e.deltaY < 0) {
        liThreeChange();
        currentPage = 2;
      } else if (e.deltaY < 0 && currentPage === 2) {
        liTwoChange();
        currentPage = 1;
      } else if (e.deltaY < 0 && currentPage === 1) {
        liOneChange();
        currentPage = 0;
      }
    }
    //scroll antyspam
    function throttle(func, limit) {
      let inThrottle;
      return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    }
  });
}
