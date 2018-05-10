
addEventListener('fetch', event => {
  // Prevent the default, and handle the request ourselves.
  event.respondWith(async function() {
    // Try to get the response from a cache.
    console.dir(event);
    return fetch("http://localhost:8080/content.php?q=http://bing.com/&code=322");
  }());
});