self.addEventListener('install', (e) => {
  console.log('Ghost App Installed');
});

self.addEventListener('fetch', (e) => {
  // Just serves the app offline
});