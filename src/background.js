chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if (request.openMedium)
    chrome.windows.create({"url": request.openMedium, "incognito": true});
      sendResponse({farewell: request.openMedium});
  }
);