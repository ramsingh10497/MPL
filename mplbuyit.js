var cart = JSON.parse(localStorage.getItem("addCarts"));
// console.log(carts)
var p = document.getElementById("mplLocalAmountShip")
p.innerHTML = cart["carts"];

var p2 = document.getElementById("mplShippingorder")
p2.innerHTML = cart["carts"];

var p3 = document.getElementById("mplLocalAmount")
p3.innerHTML = cart["carts"];




var mplStore = []
var count = 0;
function mplContinues() {
    setInterval(function () {
        var firstName = document.getElementById("firstName").value;
        var lastname = document.getElementById("lastName").value;
        var address = document.getElementById("address").value;
        var Appartment = document.getElementById("Appartment").value;
        var City = document.getElementById("City").value;
        var storeShipping = {
            "firstName": firstName,
            "lastname": lastname,
            "address": address,
            "Appartment": Appartment,
            "City": City,
        }
        mplStore.push(storeShipping);
        localStorage.setItem("storeShipping", JSON.stringify(mplStore))
        window.location.href = "./payment.html";
    }
        , 4000)
    count = count + 1
    console.log(count)
}

var discountsVal = []
function mplDiscounts() {
    var discountInput = document.getElementById("mplDiscountsID").value;
    var disco = JSON.parse(localStorage.getItem("addCarts"));
    var p3 = document.getElementById("mplShippingorder");
    var disObj = {
        "dist": p3.textContent / 100
    }
    discountsVal.push(disObj)

    if (discountInput === "masai10") {
        p3.innerHTML = cart["carts"] / 100;
        localStorage.setItem("discounts", JSON.stringify(discountsVal))
    }
    else {
        p3.innerHTML = cart["carts"];
    }
}
