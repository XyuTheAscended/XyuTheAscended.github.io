document.addEventListener("DOMContentLoaded", function () {

  const sidebar = document.getElementById("sidebar");
  const desktopArrow = document.getElementById("desktopArrow");
  const menuBtn = document.getElementById("sidebarToggle");

  /*desktop sidebar toggle*/
  if (sidebar && desktopArrow) {
    desktopArrow.addEventListener("click", function () {
      sidebar.classList.toggle("closed");
      desktopArrow.textContent = sidebar.classList.contains("closed") ? "►" : "◄";
    });
  }

  /*mobile sidebar toggle*/
  if (sidebar && menuBtn) {
    menuBtn.addEventListener("click", function () {
      sidebar.classList.toggle("show");
      menuBtn.textContent = sidebar.classList.contains("show") ? "▲ Menu" : "▼ Menu";
    });
  }

  /*fix header if it ever turns into tags*/
  (function fixHeaderNav() {
    const topnav = document.getElementById("topnav");
    if (!topnav) return;

    const links = topnav.querySelectorAll("a");
    if (!links.length) return;

    const tagWords = [
      "horror", "horror games",
      "multiplayer",
      "visual novels", "visual novel",
      "simulation",
      "roguelike",
      "browse all tags", "browse all tags →"
    ];

    let looksLikeTags = false;
    for (let i = 0; i < links.length; i++) {
      const t = (links[i].textContent || "").trim().toLowerCase();
      if (tagWords.includes(t)) {
        looksLikeTags = true;
        break;
      }
    }

    if (!looksLikeTags) return;

    const path = window.location.pathname.replace(/\\/g, "/").toLowerCase();
    const inNav = path.includes("/navigation/");
    const base = inNav ? "../" : "Navigation/";

    const navItems = [
      { text: "About Us", href: base + "About/index.html" },
      { text: "Genres", href: base + "Genres/index.html" },
      { text: "Deals", href: base + "Deals/index.html" },
      { text: "Browse Games", href: base + "Browse/index.html" },
      { text: "Developer Logs", href: base + "Devlogs/index.html" }
    ];

    const ul = topnav.querySelector("ul");
    if (!ul) return;

    ul.innerHTML = "";
    for (let i = 0; i < navItems.length; i++) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = navItems[i].text;
      a.href = navItems[i].href;
      li.appendChild(a);
      ul.appendChild(li);
    }
  })();

  
/*browse tag system (FINAL FIX)*/
  const title = document.getElementById("browseTitle");
  const tagList = document.getElementById("tagList");
  const grid = document.getElementById("browseGrid");

/*if this page does not have browseTitle, do nothing*/
if (title) {

  function applyBrowseState() {
    const params = new URLSearchParams(window.location.search);
    const tag = params.get("tag");

    /*default state*/
    title.textContent = "BROWSE GAMES";
    if (tagList) tagList.style.display = "none";
    if (grid) grid.style.display = "grid";

    if (!tag) return;

    if (tag === "all") {
      title.textContent = "TAGS";
      if (tagList) tagList.style.display = "block";
      if (grid) grid.style.display = "none";
      return;
    }

    title.textContent = tag.toUpperCase();
  }

  /*run on load*/
  applyBrowseState();

  /*when clicking Browse Games while already on Browse page*/
  document.addEventListener("click", function (e) {
    const link = e.target.closest("#topnav a");
    if (!link) return;

    const text = link.textContent.trim().toLowerCase();
    if (text !== "browse games") return;

    e.preventDefault();

    /*remove tag from URL*/
    history.pushState({}, "", window.location.pathname);

    applyBrowseState();
  });

  /*handle back/forward browser buttons*/
  window.addEventListener("popstate", applyBrowseState);
}
});