function validateLogin{
    var username = document.getElementById("username").value;
    var passsword = document.getElementById("password").value;
    if (username === "admin" && password == "1234"){
        window.location.bref = "home.html";
        return false;
    } 
    else{
        alert("Invalid username or password");
        return false;
    }
}