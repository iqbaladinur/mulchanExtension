function appendStyleNode() {
    var cssNode = document.createElement('style');
    console.log(chrome.storage)
    chrome.storage.local.get(['mulchan_ext'], function(items) {
        cssNode.innerText = items.mulchan_ext;
        console.log(cssNode)
        document.getElementsByTagName('head')[0].appendChild(cssNode);
    });
    const observer = new MutationObserver(function (mutation) {
        document.querySelectorAll('.conversation-list-item .conversation-item').forEach(elm => {
            const isUnServed = elm.querySelector('.waiting-active');
            // console.log(isUnServed);
            if(isUnServed) {
                elm.style.background = 'red';
            } else {
                elm.style.background = 'green';
            }
        })
    })
    const config = {
        childList: true,
    }
    const listItem = document.querySelector('.conversation-list-item ul');
    observer.observe(listItem, config);

}
window.onload = function () {
    appendStyleNode();
}