document.addEventListener("keydown", function (zEvent) {
    const modal = document.getElementById("aboutPanel");
    if (zEvent.shiftKey && zEvent.key === "K") {
        if(modal.classList.contains("show") === true) {
            $('#aboutPanel').modal('hide');
            console.log("Modal Kısmı Başarıyla Kapatıldı.")
        } else {
            $("#aboutPanel").modal();
            console.log("Modal Kısmı Başarıyla Açıldı.")
        }
    }
});

const btn_c = document.querySelector('.about-panel-btn');

btn_c.addEventListener('click', () => {
    $("#aboutPanel").modal();
    console.log("Modal Kısmı Başarıyla Açıldı.")
});