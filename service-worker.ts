interface MessageReq {
  action: string,
  title: string,
}

chrome.runtime.onMessage.addListener(
  (
    request: MessageReq,
    sender: chrome.runtime.MessageSender,
    sendResponse: (response: { data?: any; error?: string }) => void
  ): boolean => {
    if (request.action === 'fetchData') {
      const apiKey = ""; 
      const url = 'https://api.openai.com/v1/chat/completions';
      const data = {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: `Please give me the lyrics for the song : ${request.title}` }],
        temperature: 0.7,
      };
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          sendResponse({ data });
        })
        .catch((error) => {
          sendResponse({ error: error.message });
        });

      return true;
    }
    return false;
  }
);
