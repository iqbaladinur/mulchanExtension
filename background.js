function storeStyle() {
    const value = `.conversation-item:has(+ .waiting-active){ background: red;}`;
    chrome.storage.local.set({ 'mulchan_ext': value }, function() {
        console.log('Value is set to ' + value);
    });
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: storeStyle
    });
});