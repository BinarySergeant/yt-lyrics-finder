chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'fetchData') {
        // fetch('https://api.example.com/data', {
        //   headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
        // })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     sendResponse({ data });
        //   })
        //   .catch((error) => {
        //     sendResponse({ error: error.message });
        //   });
        sendResponse({ data: "SELAMUN ALEYKUM DICLE HANIM" });
        return true;
    }
    return false;
});
