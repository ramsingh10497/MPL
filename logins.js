function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

function mpl_register() {
    event.preventDefault()
    window.location.href = "./register.html"
}

function mpl_login_homepage() {
    event.preventDefault()
    var mpl_login_username = document.getElementById("mpl_login_username").value;
    var mpl_login_password = document.getElementById("mpl_login_password").value;

    var mpl_login_home = JSON.parse(localStorage.getItem("registers"));
    mpl_login_home.forEach((indivData, index) => {
        var { mpl_login_username, mpl_login_password } = indivData;
        if (mpl_login_username === mpl_login_username && mpl_login_password === mpl_login_password) {
            window.location.href = "./homepage.html";
        }
        else {
            console.log("wrong ansewer");
        }
    });
}