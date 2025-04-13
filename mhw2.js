    const allImages = document.querySelectorAll("#favorite_films_list img, #recent_activity_list img");
  
    const fullscreenView = document.querySelector("#fullscreen_view");
    const fullscreenImg = document.querySelector("#fullscreen_img");
  
    function showFullscreen(event) {
      if (event.target.tagName === "IMG") { 
        fullscreenImg.src = event.target.src; 
        fullscreenView.classList.remove("hidden");  
      }
    }
  
    function closeFullscreen() {
      fullscreenView.classList.add("hidden");
      fullscreenImg.src = "";
    }
  
    for (let i = 0; i < allImages.length; i++) {
      const img = allImages[i];
      img.addEventListener("click", showFullscreen);
    }
  
    fullscreenView.addEventListener("click", closeFullscreen);
  
  /*--------------------------------------------------------*/
 
const navbarProfile = document.querySelector("#navbar_profile");

function createDropdown() {
    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown-menu");

    const items = [
        "Home", "Profile", "Films", "Diary", "Reviews", 
        "Watchlist", "Lists", "Likes", "Tags", "Network", 
        "Settings", "Subscription", "Sign out"
    ];

    for (let i = 0; i < items.length; i++) {
        const item = document.createElement("div");
        item.textContent = items[i];
        dropdown.appendChild(item);
    }

    navbarProfile.appendChild(dropdown);
}

function removeDropdown() {
    const dropdown = navbarProfile.querySelector(".dropdown-menu");
    if (dropdown) {
        dropdown.remove();
    }
}

function handleMouseOver() {
    if (!navbarProfile.querySelector(".dropdown-menu")) {
        createDropdown();
    }
}

function handleMouseOut() {
    removeDropdown();
}

navbarProfile.addEventListener("mouseover", handleMouseOver);

navbarProfile.addEventListener("mouseout", handleMouseOut);











