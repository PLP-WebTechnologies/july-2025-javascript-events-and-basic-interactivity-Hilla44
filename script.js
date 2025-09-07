


// Accordion functionality
    const acc = document.getElementsByClassName("accordion");
    
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
    
    // Image gallery functionality
    const images = [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=800&q=80"
    ];
    
    let currentImageIndex = 0;
    const mainImg = document.getElementById("main-img");
    
    function showNextImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      mainImg.src = images[currentImageIndex];
      mainImg.alt = "Nature Image " + (currentImageIndex + 1);
    }
    
    function showPrevImage() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      mainImg.src = images[currentImageIndex];
      mainImg.alt = "Nature Image " + (currentImageIndex + 1);
    }
    
    // Search functionality
    const searchInput = document.getElementById("searchInput");
    
    searchInput.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        alert('You searched for: ' + searchInput.value);
        searchInput.value = "";
      }
    });
  





// Form validation and submission
document.getElementById("myform").onsubmit = function(event) {
  event.preventDefault();  // Prevent form submission

  let isValid = true;

  // Corrected "name" to "username" to match the input's id
  const name = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Clear previous error messages
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";

  // Validate name (username)
  if (name === "") {
    document.getElementById("nameError").style.color = "red";
    document.getElementById("nameError").innerText = "Name is required";
    isValid = false;
  } else if (name.length < 3) {
    document.getElementById("nameError").style.color = "red";
    document.getElementById("nameError").innerText = "Name must be at least 3 characters";
    isValid = false;
  }

  // Validate email
  const emailPattern = /\S+@\S+\.\S+/;
  if (email === "") {
    document.getElementById("emailError").style.color = "red";
    document.getElementById("emailError").innerText = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").style.color = "red";
    document.getElementById("emailError").innerText = "Email is not valid";
    isValid = false;
  }

  // Validate password
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (password === "") {
    document.getElementById("passwordError").style.color = "red";
    document.getElementById("passwordError").innerText = "Password is required";
    isValid = false;
  } else if (!passwordPattern.test(password)) {
    document.getElementById("passwordError").style.color = "red";
    document.getElementById("passwordError").innerText = "Password must be at least 8 characters, including letters and numbers";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    this.reset();
  }
};



// Event handling and interactivity
let body = document.getElementById('body');

window.onload = function() {
    body.style.backgroundColor = "lightblue";
}



let inputField = document.getElementById('inputField');

//focusevent
inputField.addEventListener('focus', function() {
    inputField.style.backgroundColor = "lightgreen";
});

//blur event
inputField.addEventListener('blur', function() {
    inputField.style.backgroundColor = "lightred";
});

//input event
inputField.addEventListener('input', function() {
    console.log("Current input value: " + inputField.value);
});

//keydown event
inputField.addEventListener('keydown', function(event) {
    console.log("Key down: " + event.key);
});

function toggleAccodion(button) {
    let content = button.nextElementSibling;
    content.style.displa = content.style.display === "block" ? "none" : "block";
}
    