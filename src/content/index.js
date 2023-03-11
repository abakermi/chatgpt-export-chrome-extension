chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const content = request.content;
    const jspdf = window.jspdf;
    // Create a new instance of the jsPDF object
    var doc = new jspdf.jsPDF();
    // Define the options for the HTML to PDF conversion
    var options = {
        margin: 0,
        filename: `chat-${new Date().getTime()}.pdf`,
        // image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {},
        sPDF: doc
    };

    // Capture the chat messages as HTML content
    var html = '';
    var messages = document.querySelectorAll('.w-full.border-b');
    for (var i = 0; i < messages.length; i++) {
        var message = messages[i];
        html += '<div style="background-color: #f8f8f8; padding: 10px; margin-bottom: 10px;">' + message.innerHTML + '</div>';
    }
    var html2pdf = window.html2pdf
    var ss = document.getElementsByClassName(".items-stretch ")[0]
    // Generate the PDF document and download it
    html2pdf().set(options).from(html).save();

    // sendResponse({ status: "done" });
});
