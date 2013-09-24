chrome.omnibox.onInputEntered.addListener(
  function(text) {
    console.log('inputEntered: ' + text);
    //alert('Make QR of "' + text + '"');
    chrome.tabs.create({
        'url': chrome.extension.getURL('qr.html#'+text)
        }, function(tab) {

		});
  });
