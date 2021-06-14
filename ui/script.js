function saveColor() {
  const servedColor = document.getElementById('servedColor');
  const unservedColor = document.getElementById('unservedColor');
  const resolvedColor = document.getElementById('resolvedColor');
  // const value = `.conversation-item:has(+ .waiting-active){ background: red;}`;
  const data = {
    served: {
      bg: servedColor.value,
    },
    unserved: {
      bg: unservedColor.value,
    },
    resolved: {
      bg: resolvedColor.value,
    },
  }
  chrome.storage.local.set({ 'mulchan_list_inbox': JSON.stringify(data) }, function() {
      console.log('saved');
  });
}

function restoreColor() {
  chrome.storage.local.get(['mulchan_list_inbox'], function(items) {
    const style = items.mulchan_list_inbox;
        if (style) {
          const parsedStyle = JSON.parse(style);
          const servedColor = document.getElementById('servedColor');
          const unservedColor = document.getElementById('unservedColor');
          const resolvedColor = document.getElementById('resolvedColor');
          servedColor.value = parsedStyle.served.bg;
          unservedColor.value = parsedStyle.unserved.bg;
          resolvedColor.value = parsedStyle.resolved.bg;
        }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const saveButton = document.getElementById('save');
  saveButton.addEventListener('click', function(event) {
    saveColor();
  });
  restoreColor();
});