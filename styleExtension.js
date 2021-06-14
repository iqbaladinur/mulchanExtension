function appendStyleNode() {
    chrome.storage.local.get(['mulchan_list_inbox'], function(items) {
        const style = items.mulchan_list_inbox;
        if (style) {
            const parsedStyle = JSON.parse(style);
            const observer = new MutationObserver(function (mutation) {
                document.querySelectorAll('.conversation-list-item .conversation-item').forEach(elm => {
                    const isUnServed = elm.querySelector('.waiting-active');
                    // console.log(isUnServed);
                    if(isUnServed) {
                        elm.style.background = parsedStyle.unserved.bg;
                    } else {
                        elm.style.background = parsedStyle.served.bg;
                    }
                })
            })
            const config = {
                childList: true,
            }
            const listItem = document.querySelector('.conversation-list-item ul');
            observer.observe(listItem, config);
        }
    });
}
window.onload = function () {
    appendStyleNode();
}