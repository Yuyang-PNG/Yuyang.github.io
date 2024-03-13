document.getElementById("loginBtn").addEventListener("click", function(e) {
  e.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  // 在此处添加登录验证逻辑
  var usernameDb = localStorage.getItem("username");
  var passwordDb = localStorage.getItem("password");
  console.log(username);
  if (username === usernameDb && password === passwordDb) {
    window.location.href = "dashboard.html"; // 登录成功后跳转到仪表盘页面
  } else {
    alert("用户名或密码错误");
  }
});
