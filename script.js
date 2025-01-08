const menu = document.createElement("div");
menu.classList.add("visible");
const menuUl = document.querySelector(".nav-ul");
const btnArea = document.querySelector(".btn-contact");
menu.innerHTML = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
  <path fill="#ffffff" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"/>
</svg>`
btnArea.append(menu)
menu.onclick = () => {
    menuUl.classList.toggle("showMenu")
}