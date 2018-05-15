chrome.contextMenus.create({
  type: 'normal',
  title: '读读看',
  contexts: ['selection'],
  id: 'cn',
  onclick: read,
});

function read(info, tab) {
  // var u = new SpeechSynthesisUtterance(info.selectionText);
  //   voices = speechSynthesis.getVoices();
  // // 随机声音
  // let index = Math.floor(voices.length * Math.random());
  // u.voice = voices[index];
  // speechSynthesis.speak(u);
  speechSynthesis.speak(new SpeechSynthesisUtterance(info.selectionText));
}

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//   chrome.contextMenus.update('cn', {
//     title: '使用xx念来读' + message + '”',
//   });
// });
