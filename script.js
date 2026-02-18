const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const pageId = tab.dataset.page;

    tabs.forEach(t => t.classList.remove("tab-active"));
    pages.forEach(p => p.classList.remove("page-active"));

    tab.classList.add("tab-active");
    document.getElementById(pageId).classList.add("page-active");
  });
});
document.querySelectorAll(".circle-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const pageId = btn.dataset.page;

    tabs.forEach(t => t.classList.remove("tab-active"));
    pages.forEach(p => p.classList.remove("page-active"));

    document.querySelector(`.tab[data-page="${pageId}"]`).classList.add("tab-active");
    document.getElementById(pageId).classList.add("page-active");
  });
});
document.querySelector(".pb-btn").addEventListener("click", () => {
  const selected = document.querySelector(".pb-select-display span").textContent.toLowerCase();
  document.body.className = "theme-" + selected;
});
const clippyMessages = [
  "Wsg twin",
  "Epstein coin is going up",
  "Scanning… you're HIM",
  "Your aura is grayscale today",
  "Firmware update recommended",
  "You look like you need a reboot",
  "Your drip is OS-level"
];

setInterval(() => {
  document.getElementById("clippy-bubble").textContent =
    clippyMessages[Math.floor(Math.random() * clippyMessages.length)];
}, 3000);
document.addEventListener("mousemove", e => {
  const pupils = document.querySelectorAll(".pupil");

  pupils.forEach(pupil => {
    const rect = pupil.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const angle = Math.atan2(e.pageY - y, e.pageX - x);
    const moveX = Math.cos(angle) * 3;
    const moveY = Math.sin(angle) * 3;

    pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});
