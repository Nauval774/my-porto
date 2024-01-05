//toggle class active 
const navbarNav = document.querySelector ('.navbar-nav');

//ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// const navbarNav = document.querySelector('.navbar-nav');
// 
// document.querySelector('#hamburger-menu');
// document.addEventListener('click', function() {
//   navbarNav.classList.toggle('active');
// });


// menutup menu dengan klik mnanapun
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});


// nama input
function simpanNama () {
  let nama = document.getElementById('namaInput').value;
  if (nama) {
    localStorage.setItem ('namaPengguna', nama);
    window.location.href = 'index.html';
  }
};

//nama input index.html
document.addEventListener("DOMContentLoaded", function() {
  let nama = localStorage.getItem ('namaPengguna');
  if (nama) {
    document.getElementById('welcomeMessage').innerText = 'Hello ' + nama + ', My name is';
  }
});

//animasi typing
new TypeIt("#typing", {
  strings: "",
  speed: 75,
  loop: true,
}).pause(5000)
.go();