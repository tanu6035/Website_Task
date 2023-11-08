document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const backendURL = "http://127.0.0.1:5500/public/"; 

    fetch(`${backendURL}/login`, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => {
        if (response.status === 200) {
            
            window.location.href = "index.html"; 
        } else {
            
            document.getElementById("error").innerHTML = "Invalid username or password";
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
