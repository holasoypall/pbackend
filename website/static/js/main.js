document.addEventListener("DOMContentLoaded", function(){
    closeAlert();
});

function closeAlert(){
    if(document.querySelector("#alert_close") != null){
        let bot = document.querySelector("#alert_close");
        let alert = document.querySelector("#alert");
        bot.addEventListener("click", ()=>{
            alert.parentNode.removeChild(alert);
        })
    }
}