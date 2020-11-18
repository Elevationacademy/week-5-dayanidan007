const showTheFurniture = function () {

    let inputforLook = $("#userfurniture").val()
    $.get(`/priceChek/:${inputforLook}`, function (smooth) {
        $("#post").append(`<div>  ${smooth.price} </div>`)
    })
}

const buysomeThing = function () {
    let inputforbuy = $("#inputForBuy").val()
    $.get(`/buy/:${inputforbuy}`, function (data) {
        $("#items").append(`<div> ${data} </div>`)
    })
}