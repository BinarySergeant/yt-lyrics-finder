interface MessageReq{
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
      sendResponse({data: "SELAMUN ALEYKUM DICLE HANIM"})
      
      return true;
    }
    return false;
  }
);
