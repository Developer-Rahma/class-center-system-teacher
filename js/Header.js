document
  .getElementById("notificationButton")
  ?.addEventListener("click", function () {
    document.getElementById("NotificationDiv").classList.toggle("none");
  });
document.getElementById("ContactUsButton")?.addEventListener("click", () => {
  window.location.href = "index.php?section=ContactUs";
});

// document.getElementById("close22")?.addEventListener("click", () => {
//   document.getElementById("sideBar").classList.toggle("none");
// });
