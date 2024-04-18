document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact_form");

  // Function to set cookies
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  // Function to get cookie value by name
  function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || phone === "" || message === "") {
      alert("Please fill out all required fields.");
      return;
    }

    alert("Form submitted successfully!");
    form.reset();

    const formData = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    // Store the form data in local storage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Set cookies with form data
    setCookie("name", name, 30); // Expires in 30 days
    setCookie("email", email, 30);
    setCookie("phone", phone, 30);
    setCookie("message", message, 30);
  });

  // Retrieve stored form data from local storage
  const storedFormData = JSON.parse(localStorage.getItem("formData"));
  console.log(storedFormData);

  // Retrieve cookies and pre-fill form fields if available
  document.getElementById("name").value = getCookie("name");
  document.getElementById("email").value = getCookie("email");
  document.getElementById("phone").value = getCookie("phone");
  document.getElementById("message").value = getCookie("message");
});

$(document).ready(function () {
  // Toggle the navbar collapse on click
  $(".navbar-toggler").on("click", function () {
    $(".collapse").toggleClass("show");
  });
});

function opentab(tabname) {
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

  // Loop through all tab links and remove the 'active-link' class
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }

  // Loop through all tab contents and hide them
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active-tab");
  }

  // Add the 'active-link' class to the clicked tab link
  event.currentTarget.classList.add("active-link");

  // Show the corresponding tab content
  document.getElementById(tabname).classList.add("active-tab");
}



// Function to set a cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to handle accepting cookies
function acceptCookies() {
  setCookie('cookie_consent', 'accepted', 365); // Set a cookie named 'cookie_consent' with value 'accepted' for 365 days
  document.getElementById('cookieConsent').style.display = 'none'; // Hide the cookie consent banner
}

// Function to handle rejecting cookies
function rejectCookies() {
  setCookie('cookie_consent', 'rejected', 365); // Set a cookie named 'cookie_consent' with value 'rejected' for 365 days
  document.getElementById('cookieConsent').style.display = 'none'; // Hide the cookie consent banner
}

// Check if the cookie consent has been previously given
document.addEventListener('DOMContentLoaded', function() {
  var consentCookie = getCookie('cookie_consent');
  if (consentCookie === 'accepted' || consentCookie === 'rejected') {
      document.getElementById('cookieConsent').style.display = 'none';
  }
});

// Attach event listeners to accept and reject buttons
document.getElementById('acceptCookies').addEventListener('click', acceptCookies);
document.getElementById('rejectCookies').addEventListener('click', rejectCookies);

// Function to get a cookie by name
function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
          return cookie.substring(nameEQ.length, cookie.length);
      }
  }
  return null;
}