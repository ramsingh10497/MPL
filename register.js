function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}



var arr = [];
function mpl_logins() {
    event.preventDefault()
    var mpl_login_username = document.getElementById("mpl_login_username").value;
    var mpl_login_last = document.getElementById("mpl_login_last").value;
    var mpl_login_Email = document.getElementById("mpl_login_email").value;
    var mpl_login_password = document.getElementById("mpl_login_password").value;
    var forms = {
        "mpl_login_username": mpl_login_username,
        "mpl_login_last": mpl_login_last,
        "mpl_login_Email": mpl_login_Email,
        "mpl_login_password": mpl_login_password
    }
    arr.push(forms);
    localStorage.setItem("registers", JSON.stringify(arr));
}
function mpl_log() {
    event.preventDefault()
    window.location.href = "./login.html"
}


