document.addEventListener("keydown", function (zEvent) {
    if (zEvent.shiftKey && zEvent.key === "C") {
        localStorage.clear();
        location.reload();
        console.log("Tüm Yerel Depolama Silindi.")
    }
});