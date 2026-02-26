document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const desktopArrow = document.getElementById("desktopArrow");
  const menuBtn = document.getElementById("sidebarToggle");

  if (!sidebar) return;

  function isMobile() {
    return window.innerWidth <= 767;
  }

  function updateButtons() {
    /*desktop arrow*/
    if (desktopArrow) {
      desktopArrow.textContent = sidebar.classList.contains("closed") ? "►" : "◄";
    }

    /*mobile menu text*/
    if (menuBtn) {
      menuBtn.textContent = sidebar.classList.contains("show") ? "▲ Menu" : "▼ Menu";
    }
  }

  /*desktop sidebar toggle*/
  if (desktopArrow) {
    desktopArrow.addEventListener("click", function () {
      if (isMobile()) return; /*dont use arrow on mobile*/
      sidebar.classList.toggle("closed");
      updateButtons();
    });
  }

  /*mobile sidebar toggle*/
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      if (!isMobile()) return; /*dont use menu button on desktop*/
      sidebar.classList.toggle("show");
      updateButtons();
    });
  }

  /*reset states when switching sizes*/
  window.addEventListener("resize", function () {
    if (isMobile()) {
      sidebar.classList.remove("closed"); /*desktop state off*/
    } else {
      sidebar.classList.remove("show");   /*mobile state off*/
    }
    updateButtons();
  });

  updateButtons();
});