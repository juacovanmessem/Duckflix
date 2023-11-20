const logOut = () => {
  localStorage.removeItem('role');
  localStorage.removeItem('id');
  window.location.href = '../pages/login.html';
}