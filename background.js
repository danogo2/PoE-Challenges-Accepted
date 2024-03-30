// Listen for messages from content scripts
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'getData') {
    // Retrieve data from local storage
    chrome.storage.local.get([...request.dataKeys], function (items) {
      // Send the retrieved data back to the content script
      sendResponse({ data: items });
    });
    return true; // Required for asynchronous response
  }

  if (request.action === 'saveItem') {
    // Save data to local storage
    chrome.storage.local.set(
      { [request.data.key]: request.data.value },
      function () {
        sendResponse({ message: 'Item saved successfully!' });
      }
    );
    return true; // Required for asynchronous response
  }

  if (request.action === 'saveData') {
    chrome.storage.local.set(request.data, function () {
      sendResponse({ message: 'Data saved successfully!' });
    });
    return true;
  }

  if (request.action === 'deleteItems' && Array.isArray(request.keys)) {
    // Remove the specified keys from local storage
    chrome.storage.local.remove(request.keys, function () {
      sendResponse({ message: 'Items deleted successfully!' });
    });
    return true; // Required for asynchronous response
  }

  if (request.action === 'fetchTagsJSON') {
    fetchDefaultTags(sendResponse);
    return true; // Required for asynchronous response
  }

  if (request.action === 'getTimestamp') {
    // Check last fetch timestamp on page load
    chrome.storage.local.get(['lastFetchTimestamp'], function (result) {
      const lastFetchTimestamp = result.lastFetchTimestamp || 0;
      sendResponse({ lastFetchTimestamp });
    });
    return true; // Required for asynchronous response
  }

  if (request.action === 'getAllItems') {
    chrome.storage.local.get(null, function (items) {
      // Send the retrieved items back to the content script
      sendResponse({ success: true, items: items });
    });
    return true; // Required for asynchronous response
  }

  if (request.action === 'clearAllData') {
    // Clear data from local storage
    chrome.storage.local.clear(function () {
      sendResponse({ message: 'All data cleared.' });
    });
    return true; // Required for asynchronous response
  }
  // Add other actions as needed
});

// Fetch data using async/await
async function fetchDefaultTags(sendResponse) {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/danogo2/PoE-Challenges-Accepted/main/json/default_tags.json'
    );
    if (response.status === 200) {
      const data = await response.json();
      // Process the fetched data
      const timestamp = Date.now();
      chrome.storage.local.set({ lastFetchTimestamp: timestamp });
      sendResponse({ data });
    } else {
      sendResponse({ error: response.status });
    }
  } catch (error) {
    sendResponse({ error });
  }
}
