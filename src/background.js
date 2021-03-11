chrome.runtime.onMessage.addListener(
  function(request) {
    if (request.openMedium) chrome.windows.create({"url": request.openMedium, "incognito": true});
  }
);