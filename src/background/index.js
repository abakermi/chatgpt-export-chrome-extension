
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    chrome.contextMenus.create({
        id: "chatgpt-export-to-pdf",
        title: "Export to PDF",
        documentUrlPatterns: ["https://chat.openai.com/chat*"],
        contexts: ["page", "selection", "link", "image"]
    });
});

chrome.contextMenus.onClicked.addListener(async function (info, currentTab) {
    if (info.menuItemId === "chatgpt-export-to-pdf") {


        const content = await chrome.scripting.executeScript({
            target: { tabId: currentTab.id },
            func: () => {
                return document.getElementsByClassName("items-stretch")[0].innerHTML;
            },
        });
        chrome.tabs.sendMessage(currentTab.id, { type: "exportToPDF", content: content[0].result },
            function (response) {

            })

    }
});
