function login() {
    const username = document.getElementById("username").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("login-error");
  
    if (username === "admin" && password === "1234") {
      document.getElementById("login-container").style.display = "none";
      document.getElementById("main-container").style.display = "block";
      fetchDollar();
    } else {
      error.textContent = "Usuario o contraseña incorrectos.";
    }
  }
  
  
  function logout() {
    location.reload();
  }
  
  function fetchDollar() {
    fetch("https://api.bluelytics.com.ar/v2/latest")
      .then(response => response.json())
      .then(data => {
        const blue = data.blue;
        document.getElementById("blue-buy").textContent = blue.value_buy;
        document.getElementById("blue-sell").textContent = blue.value_sell;
      })
      .catch(err => {
        document.getElementById("main-container").innerHTML = "<p>Error al obtener datos del dólar.</p>";
      });
  }
  