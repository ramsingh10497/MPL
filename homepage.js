var count = 0;
function mpl__cartincre() {
    var p = document.getElementById("cartInc");
    count = count + 1;
    p.innerHTML = Number(count);

}
function mpl__cartdec() {
    var p = document.getElementById("cartInc");
    count = count - 1;
    if (count < 0) {
        p.innerHTML = "0"
    }
    else {
        p.innerHTML = Number(count);
    }
}



function addToCarts() {
    var addShowCart = document.getElementById("addShowCart")
    var div = document.createElement("div");
    addShowCart.innerHTML = ""
    var p = document.createElement("p");
    p.setAttribute("class", "addShowCartP")
    var cartInctst = document.getElementById("cartInc").textContent * 13000;
    p.innerHTML += cartInctst * 1;
    div.append(p)
    addShowCart.append(div)
    var cartsObj = {
        "carts": cartInctst
    }
    localStorage.setItem("addCarts", JSON.stringify(cartsObj));
}


function mplBuyNOw() {
    window.location.href = "./mplbuyIt.html"
}
