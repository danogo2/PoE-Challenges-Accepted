const fetchDefaultTags = async () => {
  // Request data from background script
  chrome.runtime.sendMessage({ action: 'fetchTagsJSON' }, function (response) {
    // Handle the retrieved data
    if (response?.data) {
      // Do something with the data (e.g., update the page)
      chrome.runtime.sendMessage(
        {
          action: 'saveItem',
          data: { key: 'defaultTags', value: response.data },
        },
        function (response) {
          console.log(response.message);
        }
      );
    } else {
      console.log('Data not found.');
    }
  });
};

const checkDefaultTagsForDuplicates = () => {
  const allDefaultTagsSet = new Set(
    state.defaultTags.flatMap(tagArr => tagArr.join('#'))
  );
  state.defaultTags = [...allDefaultTagsSet].map(str => str.split('#'));
};

const checkForDefaultTagsChanges = (tagsLS, tagsState) => {
  const tagNamesLS = new Set();
  const tagNamesState = new Set();
  const tagsStringsLS = new Set(
    tagsLS.map(tagArr => {
      tagNamesLS.add(tagArr[0]);
      return tagArr.join('#');
    })
  );
  const tagsStringsState = new Set(
    tagsState.map(tagArr => {
      tagNamesState.add(tagArr[0]);
      return tagArr.join('#');
    })
  );
  const tagsSetLS = new Set(tagsStringsLS);
  const tagsSetState = new Set(tagsStringsState);
  const tagsSetUpdated = setDifference(tagsSetState, tagsSetLS);

  if (tagsSetUpdated.size || tagsSetLS.size !== tagsSetState.size) {
    const tagsArrsUpdated = [...tagsSetUpdated].map(str => str.split('#')[0]);
    state.defaultTagsChanged = true;
    state.updatedDefaultTags = new Set(tagsArrsUpdated);
  }
};

const checkLastFetchTimestamp = () => {
  chrome.runtime.sendMessage({ action: 'getTimestamp' }, function (response) {
    const lastFetchTimestamp = response.lastFetchTimestamp;
    const currentTime = Date.now();
    const timeSinceLastFetch = currentTime - lastFetchTimestamp;

    if (timeSinceLastFetch >= 24 * 60 * 60 * 1000) {
      fetchDefaultTags();
    }
  });
};

const clearAllData = () => {
  chrome.runtime.sendMessage({ action: 'clearAllData' }, function (response) {
    console.log(response.message);
  });
};

const getAllItems = () => {
  chrome.runtime.sendMessage({ action: 'getAllItems' }, function (response) {
    if (response.success) {
      console.log('All items retrieved:', response);
      // Handle the retrieved data (e.g., update the page)
    } else {
      console.log('Error retrieving items.');
    }
  });
};

checkLastFetchTimestamp();
