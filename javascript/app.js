const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

// // for query form 
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

});

// helper function for sending an AJAX request

let name = document.getElementsByName("fullname")[0]
let mail = document.getElementsByName("mail")[0]
let pass = document.getElementsByName("pass")[0]

let regbtn = document.getElementById("reg-btn").addEventListener('click', () => {
  fetch("http://localhost:4000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      email: mail.value,
      password: pass.value
    }),
  }).then(response => response.json())
  .then(res =>{
    if (res.success) {
      window.location.href = `${window.location.origin}/src/mainPage.html`
    }
    else{
      alert("This email is already existing")
    }
  })
})

let username = document.getElementsByName("username")[0]
let password = document.getElementsByName("password")[0]

// let btn = document.getElementById("btn")
// btn.src= data.link 

let logbtn = document.getElementById("login-btn").addEventListener('click', () => {
  fetch("http://localhost:4000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: username.value,
      password: password.value
    }),
  }).then(response => response.json())
  .then(res =>{
    if (res.success) {
      localStorage.setItem('email',username.value)
      console.log("done")
      window.location.href = `${window.location.origin}/src/mainPage.html`
    }
  })
})

const admin = ()=>{
  fetch("http://localhost:4000/admin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      
      email: localStorage.getItem('email'),
    
    }),
  }).then(response => response.json())
  .then(res =>{
    if (res.success) {
    
     let button = document.getElementById('btn-1');
     button.style.display = 'fixed';
    }
  })
}
