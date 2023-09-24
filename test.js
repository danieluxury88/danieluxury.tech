document.addEventListener("DOMContentLoaded", () => {
  console.log("dom loaded");
  if ("Notification" in window) {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
      console.log("permission");
    }
    else {
        console.log("not permission");
    }
  }
});

// Display a notification
function showNotification(message) {
  if (Notification.permission === "granted") {
    new Notification(message);
  } else {
    // Fallback to a modal or another method if notifications are not allowed
    console.error("Notifications not allowed by user");
  }
}

function test(val) {
  console.log("test", val);
}
