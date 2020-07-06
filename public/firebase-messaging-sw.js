importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
firebase.initializeApp({
  apiKey: "AIzaSyA0KSuEXMUASdslhEopeL90NcBuU35opFM",
  authDomain: "ink-grid.firebaseapp.com",
  databaseURL: "https://ink-grid.firebaseio.com",
  projectId: "ink-grid",
  storageBucket: "ink-grid.appspot.com",
  messagingSenderId: "665911529629",
  appId: "1:665911529629:web:a2e61ae4df737c4dbe0474",
  measurementId: "G-RRL0S08ZGF",
  // Project Settings => Add Firebase to your web app
  // messagingSenderId: "1062407524656",
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true,
    })
    .then((windowClients) => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification("my notification title");
    });
  return promiseChain;
});
self.addEventListener("notificationclick", function(event) {
  // do what you want
  console.log(event);
});
