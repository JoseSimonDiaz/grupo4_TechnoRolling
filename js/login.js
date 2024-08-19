const adminUsername = "admin";
const adminPassword = "admin123";
const user = {
    name : "Elshonny69",
    pass : "123"
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("message");

    if (username === adminUsername && password === adminPassword) {
        messageElement.textContent = "¡Acceso concedido!";
        messageElement.style.color = "green";
        window.location.href = "../pages/admin.html"
    }else if (username === user.name && password === user.pass) {
        messageElement.textContent = "¡Acceso concedido!";
        messageElement.style.color = "green";
        window.location.href = "../index.html"
    }
     else {
        messageElement.textContent = "Nombre de usuario o contraseña incorrectos.";
        messageElement.style.color = "red";
    }
});