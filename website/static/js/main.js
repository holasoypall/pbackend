document.addEventListener("DOMContentLoaded", function(){

    closeAlert();

});

function closeAlert(){

    const bot = document.querySelector("#alert_close");
    const alert = document.querySelector("#alert");
    bot.addEventListener("click", ()=>{
        alert.parentNode.removeChild(alert);
    })

}