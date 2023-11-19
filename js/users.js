const logOut = () => {
  localStorage.removeItem('role');
  window.location.href = '../pages/login.html';
}