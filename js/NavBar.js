class SidebarToggle {
    constructor(toggleButtonId, sideBarId) {
      this.sideBarDiv = document.getElementById(sideBarId);
      this.toggleButton = document.getElementById(toggleButtonId);
      this.isSidebarOpen = false; // Track sidebar state
  
      this.toggleButton.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent click from bubbling to the document
        this.toggleSidebar();
      });
  
      document.addEventListener("click", (event) => {
        const isMediumDevice = window.matchMedia("(max-width: 992px)").matches;
        if (
          this.isSidebarOpen && // Only close if sidebar is open
          isMediumDevice && // Only close on medium devices
          !this.sideBarDiv.contains(event.target) && // Exclude clicks inside sidebar
          !this.toggleButton.contains(event.target) // Exclude clicks on toggle button
        ) {
          this.closeSidebar();
        }
      });
    }
  
    toggleSidebar() {
      const isMediumDevice = window.matchMedia("(max-width: 992px)").matches;
      if (!isMediumDevice) return; // Only toggle sidebar on medium devices
  
      if (this.isSidebarOpen) {
        this.closeSidebar();
      } else {
        this.openSidebar();
      }
    }
  
    openSidebar() {
      this.sideBarDiv.style.display = "block";
      this.sideBarDiv.classList.remove("collapsed");
      this.isSidebarOpen = true; // Update state
    }
  
    closeSidebar() {
      this.sideBarDiv.style.display = "none";
      this.sideBarDiv.classList.add("collapsed");
      this.isSidebarOpen = false; // Update state
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const sidebar = new SidebarToggle("close22", "sideBar");
  });
  
// document.addEventListener("DOMContentLoaded", () => {
//   const sidebar = new SidebarToggle("close22", "sideBar");
// });
