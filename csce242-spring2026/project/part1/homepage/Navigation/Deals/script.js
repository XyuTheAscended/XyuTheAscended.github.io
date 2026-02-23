const sidebar = document.getElementById("sidebar");
const arrow = document.getElementById("desktopArrow");

if (arrow) {
  arrow.addEventListener("click", function () {
    sidebar.classList.toggle("closed");

    if (sidebar.classList.contains("closed")) {
      arrow.textContent = "►";
    } else {
      arrow.textContent = "◄";
    }
  });
}

const mobileBtn = document.getElementById("sidebarToggle");

if (mobileBtn) {
  mobileBtn.addEventListener("click", function () {
    sidebar.classList.toggle("show");
  });
}