function show_menu() {
   var span = document.querySelector("span")

   var menu = document.getElementById("menu")
   if (menu.style.display == "none") {
      menu.style.display = "block"
      span.innerHTML = "&#x2715;"

   }
   else {
      menu.style.display = "none"
      span.innerHTML = "&#9776"

   }

}