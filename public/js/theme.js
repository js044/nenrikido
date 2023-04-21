// When the page loads, do this.
document.addEventListener("DOMContentLoaded", () => {

    // Get the theme from local storage, then apply it.
    const theme = getTheme();
    applyTheme(theme);
  
  }); 
  
  // Apply the theme by changing icon, activating button, changing document class.
  // Still need to save to local storage explicitly.
  function applyTheme(color) {
    console.log(`Applying theme "${color}".`);
  
    const button = getColorButton(color);
    activateButton(button);
    document.documentElement.className = color;
  }
  
  // Called when you actually click the button.
  function handleThemeButtonClick(color, element) {
    element.blur();  // Remove focus from the button that was just clicked.
  
    saveThemeToLocalStorage(color);  // Save it to local storage.
  
    applyTheme(color);
  }
  
  /* Bunch of little functions below */
  
  // Get the theme from local storage, return "pink" if not present.
  function getTheme() {
    return localStorage.getItem("theme") || "pink";
  }
  
  // Get the button element that corresponds with a given color.
  function getColorButton(color) {
    return document.getElementById(color);
  }
  
  // Make sure none of the buttons have .btn-border.
  function deactivateAllButtons() {
    const buttons = Array.from(document.querySelectorAll(".theme-button"));
  
    for (let button of buttons) {
      button.classList.remove("btn-border");
    }
  }
  
  // Apply .btn-border to a specific button.
  function activateButton(button) {
    deactivateAllButtons();
    button.classList.add("btn-border");
  }
  
  // Save the selected theme to local storage.
  function saveThemeToLocalStorage(color) {
    localStorage.setItem("theme", color);
  }
  