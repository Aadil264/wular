// Splash Screen
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('splash').style.display='none';
    document.getElementById('authPage').classList.add('active');
  },1500);
});

// Login/Signup Toggle
const loginBtn=document.getElementById('loginBtn');
const signupBtn=document.getElementById('signupBtn');
const authForm=document.getElementById('authForm');

loginBtn.addEventListener('click',()=>{
  authForm.innerHTML=`<input type="email" placeholder="Email"><input type="password" placeholder="Password"><button type="submit">Login</button>`;
});
signupBtn.addEventListener('click',()=>{
  authForm.innerHTML=`<input type="text" placeholder="Full Name"><input type="email" placeholder="Email"><input type="password" placeholder="Password"><button type="submit">Sign Up</button>`;
});

// Auth Form Submit
authForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  document.getElementById('authPage').classList.remove('active');
  document.getElementById('homePage').classList.add('active');
});

// Category Navigation
function openCategory(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Service Worker
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js').then(()=>console.log('SW registered'));
}