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
  "Wsg twin that was dih-Epstein energy 🫩✌️.",
  "Bro movin like Charlie Kirk lost the map 😭.",
  "Nah cause Epstein said goonshoklight and you listened 🥀✌️.",
  "Twin you got that dih-Kirk turbulence 💔.",
  "Goonshoklight behavior twin you unstable 🙏.",
  "Bro typed that like Epstein whispered REAL 😭✌️.",
  "Charlie Kirk lookin at you like huh 🥹.",
  "Twin movin like dih was invented today 🫩.",
  "Epstein said lock in twin and you DID 🙏✌️.",
  "Bro you got that Kirk side-quest aura 😭.",
  "Nah cause twin spawned in with goonshocklight 🥀.",
  "Dih twin you moving wild 💔✌️.",
  "Epstein watching you like a TikTok live 🫩.",
  "Charlie Kirk lagging tryna keep up with you 😭.",
  "Twin got that dih-Epstein overdrive 🙏.",
  "Bro movin like goonshoknight lore dropped 🥀✌️.",
  "Nah cause Epstein pressed enter for you 😭.",
  "Twin you got that Kirk glitch energy 🫩.",
  "Bro spawned in like dih was the password 💔.",
  "Epstein said SO REAL and you delivered 🙏✌️.",
  "Charlie Kirk confused by your existence ❤️‍🩹.",
  "Twin movin like goonshoklight hit him first 😭.",
  "Bro got that dih-Epstein rhythm 🥀.",
  "Nah cause you typed that like Kirk unplugged reality 💔✌️.",
  "Twin spawned with forbidden Epstein lore 🫩.",
  "Bro movin like dih was on cooldown 😭.",
  "Epstein said lock in and twin OVER-locked 🙏✌️.",
  "Charlie Kirk spectating your downfall arc 🥀.",
  "Twin got that goonshocklight velocity 💔.",
  "Bro typed that like dih was chasing him 😭✌️.",
  "Nah cause Epstein dropped patch notes on you 🫩.",
  "Twin movin like Kirk lost the tutorial 🙏.",
  "Bro got that dih-Epstein combo pack 😭.",
  "Epstein watching you like a documentary intro 🥀.",
  "Charlie Kirk buffering tryna understand you ❤️‍🩹.",
  "Twin spawned in with goonshoknight genetics 💔.",
  "Bro movin like dih was the prophecy 🙏.",
  "Nah cause Epstein hit the gritty behind you 😭.",
  "Twin got that Kirk turbulence IRL 🫩.",
  "Bro typed that like goonshoklight possessed him 💔.",
  "Epstein said REAL twin and you ascended 🙏.",
  "Charlie Kirk arguing with your aura ❤️‍🩹.",
  "Twin movin like dih was the final boss 😭.",
  "Bro got that Epstein remix energy 🥀.",
  "Nah cause goonshoknight twin you feral 💔.",
  "Twin spawned in like Kirk unplugged the keyboard 🫩.",
  "Bro movin like dih-Epstein fusion 🙏.",
  "Epstein said lock in twin and you OVERDID it 😭."
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
