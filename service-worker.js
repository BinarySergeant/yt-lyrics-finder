chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'fetchData') {
        var apiKey = "";
        var url = 'https://api.openai.com/v1/chat/completions';
        var data = {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: "Please give me the lyrics for the song : ".concat(request.title) }],
            temperature: 0.7,
        };
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer ".concat(apiKey)
            },
            body: JSON.stringify(data),
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            sendResponse({ data: data });
        })
            .catch(function (error) {
            sendResponse({ error: error.message });
        });
        return true;
    }
    return false;
});
