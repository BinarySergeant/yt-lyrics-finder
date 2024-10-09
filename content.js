window.addEventListener('load', function () {
    var checkForTitle = setInterval(function () {
        var _a;
        var title = (_a = document.querySelector("div#title.style-scope.ytd-watch-metadata h1")) === null || _a === void 0 ? void 0 : _a.textContent;
        if (title) {
            console.log(title.trim());
            clearInterval(checkForTitle);
            // Send a message to the service worker to fetch data
            chrome.runtime.sendMessage({ action: 'fetchData', title: title }, function (response) {
                if (response.data) {
                    console.log('Data received from API:', response.data);
                }
                else {
                    console.error('Error:', response.error);
                }
            });
        }
    }, 500);
});
