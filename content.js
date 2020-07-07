setInterval(function () {
    for (let span of document.getElementsByTagName("span")) {
        if (span.innerHTML === "수락") {
            span.click();
        }
    }
}, 2000);