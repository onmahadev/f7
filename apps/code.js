let modal_alert = document.querySelector(".modal_alert")
let hero__btn = document.querySelector(".hero__btn")
let modal_close  = document.querySelector(".modal-close ");

hero__btn.addEventListener("click", function(){
    modal_alert.classList.add("helper_visible");
})

modal_close.addEventListener("click", function(){
    modal_alert.classList.remove("helper_visible");
})

