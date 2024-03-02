(function () {
  'use strict';

  const svgIconEye =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" fill="#beb698"/></svg>';

  const svgIconEyeOff =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" fill="#beb698"/></svg>';

  const svgIconTrash =
    '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M296 64h-80a7.91 7.91 0 00-8 8v24h96V72a7.91 7.91 0 00-8-8z" fill="none"/><path d="M432 96h-96V72a40 40 0 00-40-40h-80a40 40 0 00-40 40v24H80a16 16 0 000 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 000-32zM192.57 416H192a16 16 0 01-16-15.43l-8-224a16 16 0 1132-1.14l8 224A16 16 0 01192.57 416zM272 400a16 16 0 01-32 0V176a16 16 0 0132 0zm32-304h-96V72a7.91 7.91 0 018-8h80a7.91 7.91 0 018 8zm32 304.57A16 16 0 01320 416h-.58A16 16 0 01304 399.43l8-224a16 16 0 1132 1.14z" fill="#beb698"/></svg>';

  const svgIconArrowR =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#beb698" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1c-4.2-4.5-10.1-7.1-16.3-7.1C266 128 256 138 256 150.3V208H160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96v57.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.3-7.1l99.9-107.1c3.5-3.8 5.5-8.7 5.5-13.8s-2-10.1-5.5-13.8L294.6 135.1z"/></svg>';

  const svgIconArrowL =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#beb698" d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9c4.2 4.5 10.1 7.1 16.3 7.1c12.3 0 22.3-10 22.3-22.3V304h96c17.7 0 32-14.3 32-32V240c0-17.7-14.3-32-32-32H256V150.3c0-12.3-10-22.3-22.3-22.3c-6.2 0-12.1 2.6-16.3 7.1L117.5 242.2c-3.5 3.8-5.5 8.7-5.5 13.8s2 10.1 5.5 13.8l99.9 107.1z"/></svg>';

  const svgIconArrowGoTo =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#beb698" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>';

  const svgIconNotePen =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V299.6l-94.7 94.7c-8.2 8.2-14 18.5-16.8 29.7l-15 60.1c-2.3 9.4-1.8 19 1.4 27.8H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM549.8 235.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417L441.1 287.8l71 71L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z" fill="#beb698"/></svg>';

  const svgIconMinimize =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM152 232H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z" fill="#beb698"/></svg>';

  const svgIconImport =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#beb698" d="M128 64c0-35.3 28.7-64 64-64H352V128c0 17.7 14.3 32 32 32H512V448c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V336H302.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H128V64zm0 224v48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H128zM512 128H384V0L512 128z"/></svg>';

  const svgIconExport =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#beb698" d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V288H216c-13.3 0-24 10.7-24 24s10.7 24 24 24H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM384 336V288H494.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H384zm0-208H256V0L384 128z"/></svg>';

  // decodeURIComponent is necessary for leagues separated by /
  const state = {
    challElMap: new Map(),
    challObjMap: new Map(),
    leagueStateGotLoaded: false,
    hasPoeInLS: false,
    defaultTagsChanged: false,
    defaultTagsSet: new Set(), // currently available in a league, not all from array below
    customTagsSet: new Set(),
    league: decodeURIComponent(
      document.querySelector('select[name="season"]').value
    ),
    hideCompleted: false,
    lastSelectedTagValue: '',
    defaultTags: [
      ['vendor', 'buy', 'recipe'],
      ['lab', 'labyrinth', 'divine font', 'transfigured', 'treasure key'],
      [
        'boss',
        'atziri, queen',
        'cortex',
        'the elder',
        'the shaper',
        'the maven',
        'catarina',
        'infinite hunger',
        'eater of worlds',
        'trialmaster',
        'oshabi',
        'omnitect',
        'lycia, unholy',
      ],
      ['affliction', 'wildwood', 'wisp', 'tincture', 'charm'],
      ['shrine'],
      ['essence'],
      ['einhar', 'beasts', 'bestiary'],
      ['delirium', 'simulacrum'],
      ['torment', 'touched', 'possessed'],
      [
        'leveling',
        'act 1',
        'act 2',
        'act 3',
        'act 4',
        'act 5',
        'act 6',
        'act 7',
        'act 8',
        'act 9',
      ],
      ['anarchy', 'rogue exile'],
      ['ambush', 'strongbox'],
      ['map', 'tier', 'quantity', 'rarity'],
      ['beyond', 'tainted'],
      ['blight', 'cassia', 'ravaged', ' oil'],
      ['expedition', 'remnant', 'logbook', 'artifact'],
      ['ultimatum', 'inscribed', 'trialmaster', 'catalyst'],
      ['alva', 'incursion', 'omnitect'],
      ['jun', 'betrayal', 'catarina', 'syndicate'],
      ['niko', 'delve', 'resonator', 'fossil'],
      ['divination', 'turn in'],
      ['scarab'],
      ['breach'],
      ['tempest'],
      ['harvest', 'lifeforce', 'oshabi'],
      ['kirac'],
      ['harbinger', 'fracturing', 'beachhead'],
      ['vaal'],
      ['monster'],
      ['memory'],
      ['essence'],
      ['heist', 'tempering', 'tailoring', 'blueprint', 'contract'],
      ['eldritch'],
      ['ritual', 'altar', 'vessel'],
      ['legion', 'timeless'],
      [
        'sanctum',
        'relic',
        'divinia',
        'lycia, unholy',
        'xenathar',
        'braom',
        'varakath',
      ],
      ['pinnacle'],
      ['atlas'],
    ],
    updatedDefaultTags: new Set(),
    pinOrdersSet: new Set([0]),
  };

  const checkDefaultTagsForDuplicates = () => {
    const allDefaultTagsSet = new Set(
      state.defaultTags.flatMap(tagArr => tagArr.join('#'))
    );
    state.defaultTags = [...allDefaultTagsSet].map(str => str.split('#'));
  };

  const setDifference = (set1, set2) => {
    set1 = new Set(set1);
    set2 = new Set(set2);
    for (let el of set2.values()) {
      set1.delete(el);
    }
    return set1;
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

  const getStateFromLS = () => {
    let poeLS = localStorage.getItem('poe');
    if (poeLS) {
      state.hasPoeInLS = true;
      const poeStateLS = JSON.parse(poeLS);
      if (!poeStateLS[state.league]) {
        state.leagueStateGotLoaded = false;
        return;
      }
      state.leagueStateGotLoaded = true;
      const leagueStateLS = poeStateLS[state.league];
      const { challsArrayLS, defaultTagsLS } = leagueStateLS;
      if (challsArrayLS) {
        state.challObjMap = new Map(JSON.parse(challsArrayLS));
      }
      if (defaultTagsLS) {
        checkForDefaultTagsChanges(
          JSON.parse(defaultTagsLS),
          state.defaultTags
        );
      }
    }
  };

  const updateLS = () => {
    const currentLeagueState = {
      challsArrayLS: JSON.stringify(Array.from(state.challObjMap)),
      defaultTagsLS: JSON.stringify(state.defaultTags),
    };
    if (state.hasPoeInLS) {
      const stateLS = JSON.parse(localStorage.getItem('poe'));
      stateLS[state.league] = currentLeagueState;
      localStorage.setItem('poe', JSON.stringify(stateLS));
    } else {
      localStorage.setItem(
        'poe',
        JSON.stringify({
          [state.league]: currentLeagueState,
        })
      );
    }
  };

  const getCoords = elem => {
    // coords relative to the viewport
    let box = elem.getBoundingClientRect();

    return {
      top: box.top + window.scrollY,
      right: box.right + window.scrollX,
      bottom: box.bottom + window.scrollY,
      left: box.left + window.scrollX,
    };
  };

  const insertSearchInputEl = parentEl => {
    parentEl.insertAdjacentHTML(
      'beforeend',
      '<div class="settings-option"><input type="search" name="search" id="search" class="input-search" placeholder="Search" /></div>'
    );
    return parentEl.querySelector('.input-search');
  };

  const insertHideButtonEl = parentEl => {
    parentEl.insertAdjacentHTML(
      'beforeend',
      `<div class="settings-option"><button class='button-settings button-hide'><div class="settings-icon icon-hide" title="hide completed">${svgIconEye}</div><div class="settings-icon icon-show" title="show completed">${svgIconEyeOff}</div></button></div>`
    );
    return parentEl.querySelector('.button-hide');
  };

  const insertClearButtonEl = parentEl => {
    parentEl.insertAdjacentHTML(
      'beforeend',
      `<div class="settings-option"><button class='button-settings button-clear'><div class="settings-icon icon-clear" title="clear league">${svgIconTrash}</div></button></div>`
    );
    return parentEl.querySelector('.button-clear');
  };

  const insertExportButtonEl = parentEl => {
    parentEl.insertAdjacentHTML(
      'beforeend',
      `<div class="settings-option"><button class='button-settings button-export'><div class="settings-icon icon-export" title="export tags and notes">${svgIconExport}</div></button></div>`
    );
    return parentEl.querySelector('.button-export');
  };

  const insertImportButtonEl = parentEl => {
    parentEl.insertAdjacentHTML(
      'beforeend',
      `<div class="settings-option"><button class='button-settings button-import'><div class="settings-icon icon-import" title="import tags and notes">${svgIconImport}</div></button></div>`
    );
    return parentEl.querySelector('.button-import');
  };

  const insertPinButtonEl = parentEl => {
    parentEl.insertAdjacentHTML(
      'afterbegin',
      `<button class='button-settings button-pin' title="pin challenge to the top"><div class="settings-icon icon-pin" ></div></button>`
    );
    return parentEl.querySelector('.button-pin');
  };

  const insertTagSelectEl = parentEl => {
    parentEl.insertAdjacentHTML(
      'beforeend',
      '<div class="settings-option"><select class="tag-select" name="tags" id="tags"><option class="tag-option" value="">— Tags —</option></select></div>'
    );
    return parentEl.querySelector('#tags');
  };

  const insertTagInputEl = (parentEl, id) => {
    parentEl.insertAdjacentHTML(
      'beforeend',
      `<input type="text" class="input-tag" placeholder="tag1, tag2, tag3.." data-id="${id}"/>`
    );
    return parentEl.querySelector('.input-tag');
  };

  const insertTagsDisplayEl = (parentEl, id) => {
    parentEl.insertAdjacentHTML(
      'beforeend',
      `<div class="display-tag" data-id="${id}"></div>`
    );
    return parentEl.querySelector('.display-tag');
  };

  const insertNoteTextareaEl = (parentEl, id) => {
    parentEl.insertAdjacentHTML(
      'beforeend',
      `<div class="note-container"><textarea name="textarea" class="note-textarea" placeholder="Write your note here" data-id="${id}" wrap="hard"></textarea>`
    );
    return parentEl.querySelector('.note-textarea');
  };

  // using this method because {element.innerHTML = ''}doesn't clear event handlers of the child nodes and might cause memory leak
  const removeAllChildNodes = parent => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  // needs to run on every change in the input tag
  const updateStateTagSets = () => {
    // update default tags
    state.defaultTagsSet.clear();
    state.customTagsSet.clear();
    for (let challObj of state.challObjMap.values()) {
      for (let tagObj of challObj.tags) {
        const { name, type } = tagObj;
        state[`${type}TagsSet`].add(name);
      }
    }
  };

  const getTagObjectsFromStateTagSets = () => {
    const tagObjectsArr = [];
    // get custom tags without tags that are already in default tags
    const customTagsPure = setDifference(
      state.customTagsSet,
      state.defaultTagsSet
    );

    for (let tagName of state.defaultTagsSet.values()) {
      tagObjectsArr.push({ name: tagName, type: 'default' });
    }
    for (let tagName of customTagsPure.values()) {
      tagObjectsArr.push({ name: tagName, type: 'custom' });
    }
    return tagObjectsArr;
  };

  // need to run on every tag input change
  const updateTagsDropdownHTML = () => {
    // has to run after changing tag inputs
    const selectEl = document.querySelector('.tag-select');
    removeAllChildNodes(selectEl);
    updateStateTagSets();
    const enteredTagObjectsArr = getTagObjectsFromStateTagSets();
    selectEl.insertAdjacentHTML(
      'afterbegin',
      '<option class="tag-option" value="">— tags —</option>'
    );
    const sortedTagsArray = [...enteredTagObjectsArr].sort((aObj, bObj) =>
      aObj.name.localeCompare(bObj.name)
    );

    for (let tagObj of sortedTagsArray) {
      selectEl.insertAdjacentHTML(
        'beforeend',
        `<option class="tag-option tag-${tagObj.type}" value="${tagObj.name}">${tagObj.name}</option>`
      );
    }
    let selectedTagIndex;

    const allTagsSet = new Set([
      ...state.defaultTagsSet,
      ...state.customTagsSet,
    ]);
    if (!allTagsSet.has(state.lastSelectedTagValue)) {
      // none chall has currently selected tag
      selectEl.selectedIndex = 0;
      for (let challEl of state.challElMap.values()) {
        challEl.classList.remove('tag-hidden');
      }
      state.lastSelectedTagValue = '';
    } else {
      let i = 0;
      for (let option of selectEl.options) {
        if (option.value === state.lastSelectedTagValue) {
          selectedTagIndex = i;
        }
        i++;
      }
    }

    selectEl.selectedIndex = selectedTagIndex;
    updateLS();
  };

  const updateSideNote = (noteID, newText) => {
    const noteEl = document.querySelector(`.side-note[data-id="${noteID}"]`);
    noteEl.textContent = newText;
    if (newText.length) {
      noteEl.closest('.side-challenge').classList.remove('hidden');
    } else {
      noteEl.closest('.side-challenge').classList.add('hidden');
    }
  };

  const clickToggleSideNotes = event => {
    const sideNotesEl = event.target.closest('.side-notes');
    if (sideNotesEl.classList.contains('hide-notes')) {
      sideNotesEl.classList.remove('hide-notes');
    } else {
      sideNotesEl.classList.add('hide-notes');
    }
  };

  const clickToggleSideNotesPosition = event => {
    const sideNotesEl = event.target.closest('.side-notes');
    if (sideNotesEl.classList.contains('right')) {
      sideNotesEl.classList.remove('right');
    } else {
      sideNotesEl.classList.add('right');
    }
  };

  const clickSideChallenges = event => {
    const target = event.target;
    if (
      target.closest('h3') &&
      target.closest('h3').className === 'side-challenge-header'
    ) {
      const id = target.closest('.side-challenge-header').dataset.id;
      const goToTarget = getCoords(state.challElMap.get(Number(id))).top;
      window.scrollTo({
        top: goToTarget - 51,
        behavior: 'smooth',
      });
    }
  };

  const createSideNotes = () => {
    document.querySelector('body').insertAdjacentHTML(
      'beforeend',
      `<div class='side-notes'>
        <div class="side-nav">
          <div class="settings-option"><button class="button-settings toggle-view"><div class="settings-icon icon-minimize" title="hide side-notes">${svgIconMinimize}</div><div class="settings-icon icon-show-notes" title="show side-notes">${svgIconNotePen}</div></button></div>
          <h2 class="side-header" title="scroll to the top">${state.league} league notes</h2>
          <div class="settings-option"><button class="button-settings toggle-side"><div class="settings-icon arrow-right" title="show on the right">${svgIconArrowR}</div><div class="settings-icon arrow-left" title="show on the left">${svgIconArrowL}</div></button></div>
        </div>
        <ul class='side-challenges'></ul>
      </div>`
    );
    const challengeSideList = document.querySelector('.side-challenges');
    for (let [id, challObj] of state.challObjMap.entries()) {
      const challEl = state.challElMap.get(id);
      const isComplete = !challEl.classList.contains('incomplete');
      const completionProgress = challEl.querySelector('.completion-detail')
        ? challEl.querySelector('.completion-detail').textContent
        : isComplete
        ? '1/1'
        : '0/1';
      const { note, name } = challObj;
      challengeSideList.insertAdjacentHTML(
        'beforeend',
        `<li class="side-challenge ${note.length ? '' : 'hidden'} ${
          isComplete ? 'complete' : 'incomplete'
        }" data-id="${id}"><h3 class="side-challenge-header" title="scroll to challenge" data-id="${id}"><span class="side-challenge-header--text">${name}</span><div class="goto-container"><div class="icon-goto">${svgIconArrowGoTo}</div></div><div class="note-completion"><span class="note-progress">${completionProgress}</span><span class="note-completion-check">${
          isComplete ? '✓' : '⨉'
        }</span></div></h3><div class="side-note" data-id="${id}">${note}</div></li>`
      );
    }
    document
      .querySelector('.side-nav .toggle-view')
      .addEventListener('click', event => clickToggleSideNotes(event));
    document
      .querySelector('.side-nav .toggle-side')
      .addEventListener('click', event => clickToggleSideNotesPosition(event));
    document
      .querySelector('.side-challenges')
      .addEventListener('click', event => clickSideChallenges(event));
    document.querySelector('.side-header').addEventListener('click', event => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  };

  const testAllValues = (testValues, str) => {
    const specialChars = new Set(['\\', '?', '[', ']', '*', '+', '(', ')']);
    let hasAllValues = true;
    // get rid of duplicates
    testValues = new Set(testValues);
    testValues = [...testValues];
    for (let value of testValues) {
      if (specialChars.has(value)) value = `\\${value}`;
      const re = new RegExp(value);
      if (!re.test(str)) {
        hasAllValues = false;
        break;
      }
    }
    return hasAllValues;
  };

  const searchChallHandler = event => {
    const searchEl = event.target;
    const searchValue = searchEl.value.toLowerCase();
    let searchValues = '';
    if (searchValue !== '') searchValues = [...searchValue.match(/\S+/g)];

    for (let [id, challObj] of state.challObjMap.entries()) {
      const challEl = state.challElMap.get(id);
      if (
        searchValue === '' ||
        testAllValues(searchValues, challObj.searchChars)
      ) {
        challEl.classList.remove('search-hidden');
      } else {
        challEl.classList.add('search-hidden');
      }
    }
  };

  const formatSearchInputHandler = event => {
    const searchEl = event.target;
    const searchValue = searchEl.value;
    if (searchValue === '') return;
    let searchValues = [...searchValue.match(/\S+/g)];
    searchValues = new Set(searchValues);
    searchEl.value = [...searchValues].join(' ');
  };

  const scrollToTop = () => {
    const achievementContainerTop = getCoords(
      document.querySelector('.achievement-container')
    ).top;
    if (document.querySelector('.info').classList.contains('sticky')) {
      window.scrollTo({
        top: achievementContainerTop,
        behavior: 'smooth',
      });
    }
  };

  const selectTagHandler = event => {
    const selectedTagValue = event.target.value;
    const selectedTagIndex = event.target.selectedIndex;
    state.lastSelectedTagValue = selectedTagValue;
    // hide challenges without selected tag
    for (let [id, challObj] of state.challObjMap.entries()) {
      const challEl = state.challElMap.get(id);
      if (
        selectedTagIndex === 0 ||
        challObj.tags.some(tagObj => tagObj.name === selectedTagValue)
      ) {
        // show chall if default value is selected('') or has selected tag
        challEl.classList.remove('tag-hidden');
      } else {
        challEl.classList.add('tag-hidden');
      }
    }
    scrollToTop();
  };

  const clickHideButtonHandler = event => {
    state.hideCompleted = !state.hideCompleted;
    const challengeContainerEl = document.querySelector(
      '.achievement-container'
    );
    const sideNotesEl = document.querySelector('.side-notes');
    if (state.hideCompleted) {
      challengeContainerEl.classList.add('hide-completed');
      sideNotesEl.classList.add('hide-completed');
    } else {
      challengeContainerEl.classList.remove('hide-completed');
      sideNotesEl.classList.remove('hide-completed');
    }
  };

  const clickClearButtonHandler = event => {
    const hasConfirmed = confirm(
      `Clear tags and notes for ${state.league} league?`
    );
    if (hasConfirmed) {
      const poeStateLS = JSON.parse(localStorage.getItem('poe'));
      delete poeStateLS[state.league];
      localStorage.setItem('poe', JSON.stringify(poeStateLS));
      location.reload();
    }
  };

  const addEventHandler = (element, eventType, handler) => {
    element.addEventListener(eventType, event => handler(event));
  };

  const changeTopLayout = () => {
    document.querySelector('.container').classList.add('poe-ca');
    document.querySelector('.btn-show-achievements').remove();
    const titleEl = document.querySelector('.title-bar');
    const infoEl = document.querySelector('.profile .info');
    const leagueSelectEl = document.querySelector('.challenge-list.poeForm');
    leagueSelectEl.classList.add('settings-option');
    leagueSelectEl.querySelector('select').classList.add('league-select');
    titleEl.textContent = `${infoEl.textContent}`;
    infoEl.textContent = '';
    infoEl.insertAdjacentHTML('beforeend', '<div class="settings"></div>');
    const settingsEl = infoEl.querySelector('.settings');

    const searchInputEl = insertSearchInputEl(settingsEl);
    const tagSelectEl = insertTagSelectEl(settingsEl);
    settingsEl.insertAdjacentElement('beforeend', leagueSelectEl);
    const hideButtonEl = insertHideButtonEl(settingsEl);
    const clearButtonEl = insertClearButtonEl(settingsEl);
    const importButtonEl = insertImportButtonEl(settingsEl);
    const exportButtonEl = insertExportButtonEl(settingsEl);
    titleEl.textContent = titleEl.textContent.replace('Challenges', '').trim();
    settingsEl.insertAdjacentElement('beforeend', titleEl);

    addEventHandler(searchInputEl, 'input', searchChallHandler);
    addEventHandler(searchInputEl, 'change', formatSearchInputHandler);
    addEventHandler(tagSelectEl, 'change', selectTagHandler);
    addEventHandler(hideButtonEl, 'click', clickHideButtonHandler);
    addEventHandler(clearButtonEl, 'click', clickClearButtonHandler);
    exportButtonEl.addEventListener(
      'click',
      async event => await clickExportButtonHandler(event)
    );
    importButtonEl.addEventListener('click', async event => {
      const file = await openFileOrFiles();
      if (!file) {
        return;
      }

      const reader = new FileReader();
      reader.addEventListener('load', event => {
        const fileContent = event.target.result;
        const importedStateJSON = atob(fileContent);
        const shouldLoadImportedState = confirm(
          'Load external tags and notes for all leagues?'
        );
        if (shouldLoadImportedState) {
          localStorage.setItem('poe', importedStateJSON);
          location.reload();
        }
      });
      reader.readAsText(file);
    });
  };

  const changeChallStyle = (id, challEl) => {
    challEl.setAttribute('data-id', id);
    // create header
    const headerEl = challEl.querySelector('h2');
    headerEl.classList.add('challenge-header-text');
    headerEl.textContent = `${id}. ${headerEl.textContent}`;
    const completionEl = challEl.querySelector('.completion-detail');
    const completionImgEl = challEl.querySelector('img.completion');
    let detailEl = challEl.querySelector('.detail');
    challEl.innerHTML = `<div class="achievement-header"></div>`;
    const headerContainerEl = challEl.querySelector('.achievement-header');
    headerContainerEl.insertAdjacentElement('beforeend', headerEl);
    // add tag input
    insertTagInputEl(headerContainerEl, id);
    insertTagsDisplayEl(headerContainerEl, id);
    if (completionEl) {
      headerContainerEl.insertAdjacentElement('beforeend', completionEl);
      completionEl.insertAdjacentElement('beforeend', completionImgEl);
    } else {
      headerContainerEl.insertAdjacentElement('beforeend', completionImgEl);
      completionImgEl.style.paddingRight = '26px';
    }
    // fix bug where is no detail el
    if (!detailEl) {
      challEl.insertAdjacentHTML(
        'beforeend',
        `<div class='detail'>
              <div class='detail-inner'>
                <span class='text'></span>
              </div>
            </div>`
      );
      detailEl = challEl.querySelector('.detail');
    }
    // add detail element
    challEl.insertAdjacentElement('beforeend', detailEl);
    // add note input
    const taskList = challEl.querySelector('.items');
    if (taskList) {
      insertNoteTextareaEl(taskList, id);
    } else {
      const detailInnerEl = challEl.querySelector('.detail-inner');
      detailEl.querySelector('.text').classList.add('inner-block');
      insertNoteTextareaEl(detailInnerEl, id);
    }
    // add pin button
    const pinButtonEl = insertPinButtonEl(headerContainerEl);
  };

  const updateDisplayedTagsHTML = (tagDisplayEl, challObj) => {
    removeAllChildNodes(tagDisplayEl);
    let i = 1;
    for (let tagObj of challObj.tags) {
      tagDisplayEl.insertAdjacentHTML(
        'beforeend',
        `<span class="${tagObj.type}">${tagObj.name}${
          i < challObj.tags.length ? ',&nbsp;' : ''
        }</span>`
      );
      i++;
    }
  };

  const toggleDisplayAndInput = (tagInputEl, tagDisplayEl, challObj) => {
    if (challObj.tags.length) {
      tagInputEl.classList.add('hidden');
      tagDisplayEl.classList.remove('hidden');
    } else {
      tagInputEl.classList.remove('hidden');
      tagDisplayEl.classList.add('hidden');
    }
  };

  const clickTagDisplayHandler = event => {
    const tagDisplayEl = event.target.closest('.display-tag');
    tagDisplayEl.classList.add('hidden');
    const tagInputEl = tagDisplayEl.previousSibling;
    tagInputEl.classList.remove('hidden');
    tagInputEl.focus();
  };

  const getChallengeSearchChars = challEl => {
    const header = challEl.querySelector('h2');
    const singleTask = challEl.querySelector('.text');
    const subTasks = challEl.querySelectorAll('.items ul li');
    let subTasksString;
    if (subTasks.length !== 0) {
      subTasksString = [...subTasks]
        .map(taskEl => taskEl.textContent)
        .join(' ');
    } else {
      subTasksString = '';
    }

    const searchChars = (
      header.textContent +
      ' ' +
      singleTask.textContent +
      ' ' +
      subTasksString
    )
      .trim()
      .toLowerCase();
    return searchChars;
  };

  const getDefaultTagsFromText = challText => {
    const defaultTags = [];
    for (let tagArray of state.defaultTags) {
      if (tagArray.some(key => challText.indexOf(key.toLowerCase()) !== -1)) {
        defaultTags.push(tagArray[0].toLowerCase());
        state.defaultTagsSet.add(tagArray[0].toLowerCase());
      }
    }
    return [...new Set(defaultTags)];
  };

  const createTagObjectsFromArr = (tagsArr, type) => {
    if (!tagsArr.length) return [];
    return tagsArr.map(tag => ({
      name: tag,
      type,
    }));
  };

  const createChallObj = (id, challEl) => {
    const challText = getChallengeSearchChars(challEl);
    const challDefaultTags = getDefaultTagsFromText(challText);
    const challengeName = challEl.querySelector('h2').textContent;
    const newChallObj = {
      name: challengeName,
      searchChars: challText,
      note: '',
      defaultTags: challDefaultTags,
      tags: [...createTagObjectsFromArr(challDefaultTags, 'default')], // eg. tag objects {name: 'boss', type: 'default' || 'custom'}
      order: 0,
    };
    state.challObjMap.set(id, newChallObj);
    // add default tags to chall tag display when there is no local storage fetch
    const tagInputEl = challEl.querySelector('.input-tag');
    const tagDisplayEl = challEl.querySelector('.display-tag');
    const tagsString = newChallObj.tags.map(tagObj => tagObj.name).join(', ');
    tagInputEl.value = tagsString;
    updateDisplayedTagsHTML(tagDisplayEl, newChallObj);
    toggleDisplayAndInput(tagInputEl, tagDisplayEl, newChallObj);
  };

  const updateChallTags = challObj => {
    const challDefaultTagsSet = new Set(challObj.defaultTags);
    for (let tagObj of challObj.tags) {
      const { name, type } = tagObj;
      // change deleted default tags to custom
      if (!challDefaultTagsSet.has(name)) {
        tagObj.type = 'custom';
      }
      if (state.updatedDefaultTags.has(name)) {
        tagObj.type = 'default';
      }
    }

    for (let defaultTag of challObj.defaultTags) {
      if (state.updatedDefaultTags.has(defaultTag)) {
        if (!challObj.tags.some(tagObj => tagObj.name === defaultTag)) {
          challObj.tags.push({ name: defaultTag, type: 'default' });
        }
      }
    }
  };

  const updateChallEl = (id, challEl) => {
    const challObj = state.challObjMap.get(id);
    // change order if was pinned
    const challOrder = Number(challObj.order);
    if (challOrder !== 0) {
      challEl.style.order = challOrder;
      challEl.classList.add('pinned');
      state.pinOrdersSet.add(challOrder);
      const pinButton = challEl.querySelector('.button-pin');
      pinButton.setAttribute('title', 'unpin this challenge');
    }
    // in case they are changing challenge text
    const challengeName = challEl.querySelector('h2').textContent;
    challObj.name = challengeName;
    const challText = getChallengeSearchChars(challEl);
    challObj.searchChars = challText;
    const noteTextareaEl = challEl.querySelector('.note-textarea');
    noteTextareaEl.value = challObj.note;
    const newDefaultTags = getDefaultTagsFromText(challText);
    challObj.defaultTags = newDefaultTags;
    if (state.defaultTagsChanged) {
      // change default tags to custom tags in case they are removed from state.defaultTags
      updateChallTags(challObj);
    }

    for (let tagObj of challObj.tags) {
      state[`${tagObj.type}TagsSet`].add(tagObj.name);
    }
    const tagInputEl = challEl.querySelector('.input-tag');
    const tagDisplayEl = challEl.querySelector('.display-tag');
    const tagsString = challObj.tags.map(tagObj => tagObj.name).join(', ');
    tagInputEl.value = tagsString;
    updateDisplayedTagsHTML(challEl.querySelector('.display-tag'), challObj);
    toggleDisplayAndInput(tagInputEl, tagDisplayEl, challObj);
  };

  const removeBrs = () => {
    const brEls = document.querySelectorAll('br');
    for (let br of brEls.values()) {
      br.remove();
    }
  };

  const processChallenges = () => {
    const challListEl = document.querySelectorAll('.achievement');
    removeBrs();
    for (let [index, challEl] of challListEl.entries()) {
      const id = index + 1;
      state.challElMap.set(id, challEl);
      changeChallStyle(id, challEl);
      state.leagueStateGotLoaded
        ? updateChallEl(id, challEl)
        : createChallObj(id, challEl);
    }
  };

  const checkForDefaultRemoval = (challObj, enteredTagsSet) => {
    // from chall default tags delete those that were manually removed by the user
    const challDefaultTagsSet = new Set(challObj.defaultTags);
    const defaultTagsRemoved = setDifference(
      challDefaultTagsSet,
      enteredTagsSet
    );
    for (let removedTag of defaultTagsRemoved) {
      challDefaultTagsSet.delete(removedTag);
    }
    challObj.defaultTags = [...challDefaultTagsSet];
  };

  const updateTagInputHTML = (challObj, tagInputEl) => {
    const tagObjArr = challObj.tags;
    const tagsString = tagObjArr.map(tagObj => tagObj.name).join(', ');
    tagInputEl.value = tagsString;
  };

  // multi element events
  const tagInputHandler = event => {
    const tagInputEl = event.target;
    const inputValue = tagInputEl.value.trim();
    const validatedInputValue = inputValue.match(/[^\s,]+/g);
    const challId = Number(tagInputEl.dataset.id);
    const challObj = state.challObjMap.get(challId);

    let enteredTags, curChallTagsSet, formattedTags;
    if (validatedInputValue) {
      enteredTags = validatedInputValue;
      // create Set from array to get rid of duplicates
      curChallTagsSet = new Set([...enteredTags]);
      // if deleted default tag, remove it from default tags until reset
      checkForDefaultRemoval(challObj, curChallTagsSet);
      enteredTags = [...curChallTagsSet];
      // tag max length: 16 characters
      formattedTags = enteredTags.map(tag => tag.slice(0, 16));
    } else {
      challObj.defaultTags = [...getDefaultTagsFromText(challObj.searchChars)];
      formattedTags = challObj.defaultTags;
    }

    challObj.tags = [];
    const challDefaultTagsSet = new Set(challObj.defaultTags);
    for (let tag of formattedTags) {
      challObj.tags.push(
        challDefaultTagsSet.has(tag)
          ? { name: tag, type: 'default' }
          : { name: tag, type: 'custom' }
      );
      // no need to add to allTags set because allTags will be updated in updateTagsDropdownHTML()
    }

    updateTagInputHTML(challObj, tagInputEl);
    updateDisplayedTagsHTML(tagInputEl.nextSibling, challObj);
    toggleDisplayAndInput(tagInputEl, tagInputEl.nextSibling, challObj);
    updateTagsDropdownHTML();
    // hide challenge after deleting currently selected tag from its tag input
    if (
      state.lastSelectedTagValue !== '' &&
      !curChallTagsSet.has(state.lastSelectedTagValue)
    ) {
      state.challElMap.get(challId).classList.add('tag-hidden');
    }
    updateLS();
  };

  const noteChangeHandler = event => {
    const textareaEl = event.target;
    const formattedNote = textareaEl.value.trim();
    textareaEl.value = formattedNote;
    const id = Number(textareaEl.dataset.id);
    const chall = state.challObjMap.get(id);
    chall.note = formattedNote;
    updateSideNote(id, formattedNote);
    updateLS();
  };

  const pinChallengeHandler = event => {
    const target = event.target;
    const challEl = target.closest('.achievement');
    const button = target.closest('.button-pin');
    const id = Number(challEl.dataset.id);
    const challObj = state.challObjMap.get(id);

    if (challEl.classList.contains('pinned')) {
      challEl.classList.remove('pinned');
      state.pinOrdersSet.delete(challObj.order);
      challObj.order = 0;
      challEl.style.order = 0;
      button.setAttribute('title', 'pin challenge to the top');
    } else {
      const minCurOrder = Math.min(...state.pinOrdersSet);
      const newMinOrder = minCurOrder - 1;
      challObj.order = newMinOrder;
      challEl.style.order = newMinOrder;
      state.pinOrdersSet.add(newMinOrder);
      challEl.classList.add('pinned');
      button.setAttribute('title', 'unpin this challenge');
    }
    updateLS();
  };

  const delegateEventHandlers = () => {
    const challsContainerEl = document.querySelector('.achievement-list');
    challsContainerEl.addEventListener('change', event => {
      // event delegation
      const target = event.target;
      if (target.classList.contains('input-tag')) {
        tagInputHandler(event);
      }
      if (target.classList.contains('note-textarea')) {
        noteChangeHandler(event);
      }
    });

    challsContainerEl.addEventListener('focusout', event => {
      // event delegation
      const target = event.target;
      if (target.classList.contains('input-tag')) {
        if (!target.value) return;
        // hide input and show display on focusout only if there is a value to display
        target.classList.add('hidden');
        target.nextSibling.classList.remove('hidden');
      }
    });

    challsContainerEl.addEventListener('click', event => {
      // event delegation
      const target = event.target;
      if (
        target.closest('div').className === 'display-tag' ||
        target.classList.contains('display-tag')
      ) {
        clickTagDisplayHandler(event);
      }

      if (
        target.closest('.button-pin')?.classList.contains('button-pin') ||
        target.classList.contains('icon-pin')
      ) {
        pinChallengeHandler(event);
      }
    });
  };

  const makeInfoNavSticky = () => {
    // get coords relative to document (viewport + current scroll)

    const container = document.querySelector('.achievement-container');
    const nav = container.querySelector('.info');
    const containerCoords = getCoords(container);
    const containerTop = containerCoords.top;

    const makeSticky = () => {
      let scrollPos = window.scrollY;
      if (scrollPos > containerTop) {
        nav.classList.add('sticky');
        container.classList.add('stickyOffsetMargin');
      } else {
        nav.classList.remove('sticky');
        container.classList.remove('stickyOffsetMargin');
      }
    };
    makeSticky();
    window.addEventListener('scroll', event => {
      makeSticky();
    });
  };

  const saveFile = async (blob, suggestedName) => {
    // Fallback if the File System Access API is not supported…
    // Create the blob URL.
    const blobURL = URL.createObjectURL(blob);
    // Create the `<a download>` element and append it invisibly.
    const a = document.createElement('a');
    a.href = blobURL;
    a.download = suggestedName;
    a.style.display = 'none';
    document.body.append(a);
    // Programmatically click the element.
    a.click();
    // Revoke the blob URL and remove the element.
    setTimeout(() => {
      URL.revokeObjectURL(blobURL);
      a.remove();
    }, 1000);
  };

  const openFileOrFiles = async (multiple = false) => {
    // Fallback if the File System Access API is not supported.
    return new Promise(resolve => {
      // Append a new `<input type="file" multiple? />` and hide it.
      const input = document.createElement('input');
      input.style.display = 'none';
      input.type = 'file';
      document.body.append(input);
      if (multiple) {
        input.multiple = true;
      }
      // The `change` event fires when the user interacts with the dialog.
      input.addEventListener('change', () => {
        // Remove the `<input type="file" multiple? />` again from the DOM.
        input.remove();
        // If no files were selected, return.
        if (!input.files) {
          return;
        }
        // Return all files or just one file.
        resolve(multiple ? Array.from(input.files) : input.files[0]);
      });
      // Show the picker.
      if ('showPicker' in HTMLInputElement.prototype) {
        input.showPicker();
      } else {
        input.click();
      }
    });
  };

  const clickExportButtonHandler = async event => {
    let poeStateString = localStorage.getItem('poe');
    const blob = new Blob([btoa(poeStateString)], { type: 'text/plain' });
    const date = new Date();
    const nowStr = date
      .toLocaleString(navigator.language)
      .replace(', ', '_')
      .replaceAll(':', '-');
    await saveFile(blob, `poe_${nowStr}.txt`);
  };

  const init = () => {
    checkDefaultTagsForDuplicates();
    getStateFromLS();
    processChallenges();
    changeTopLayout();
    createSideNotes();
    delegateEventHandlers();
    updateTagsDropdownHTML();
    makeInfoNavSticky();
  };
  init();
})();
