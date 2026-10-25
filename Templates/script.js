const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function openMenu() {
  menuToggle.classList.add("active");
  sideMenu.classList.add("active");
  overlay.classList.add("active");

  document.body.classList.add("menu-open");

  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close menu");

  sideMenu.setAttribute("aria-hidden", "false");
  sideMenu.removeAttribute("inert");
}

function closeMenu() {
  menuToggle.classList.remove("active");
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");

  document.body.classList.remove("menu-open");

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");

  sideMenu.setAttribute("aria-hidden", "true");
  sideMenu.setAttribute("inert", "");

  menuToggle.focus();
}

// Open and close using the hamburger button
menuToggle.addEventListener("click", function () {
  const isOpen =
    menuToggle.getAttribute("aria-expanded") === "true";

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});
// Search Bar Functionality
const searchInput = document.getElementById('siteSearchInput');
const searchBtn = document.getElementById('siteSearchBtn');

function performSearch() {
  const query = searchInput.value.trim();
  if (query !== "") {
    // Yahan aap apni marzi ka search action ya filtering laga sakti hain
    alert("Searching for: " + query);
  }
}

searchBtn.addEventListener('click', performSearch);

searchInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    performSearch();
  }
});
document.getElementById('search-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Page ko reload hone se rokne ke liye
  let query = document.getElementById('search-input').value.toLowerCase().trim();
  
  if (query === '') return;

  // Website ke headings aur paragraphs mein text dhoondna
  let elements = document.querySelectorAll('h2, h3, p');
  let found = false;
  
  elements.forEach(function(el) {
    if (el.innerText.toLowerCase().includes(query)) {
      // Us section par smooth scroll karna aur highlight karna
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.style.backgroundColor = '#ffeb3b'; // Yellow highlight
      setTimeout(() => {
        el.style.backgroundColor = '';
      }, 2000); // 2 second baad highlight khatam ho jayega
      found = true;
    }
  });
  
  if (!found) {
    alert('Aap ki talash ke mutabiq kuch nahi mila. Baraye meharbani sahi keyword likhein!');
  }
});