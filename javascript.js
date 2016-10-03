chrome.contextMenus.create({
 'title': 'Search Rotten Tomatoes for "%s"',
 'contexts': ['selection'],
 'onclick': function(info, tab) {
    console.log('Selected link: ' + info.selectionText);
    chrome.tabs.create({url: 'https://www.rottentomatoes.com/search/?search=' + info.selectionText});
  }
});
