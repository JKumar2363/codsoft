document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    const subject = "Portfolio Contact: " + name;
    const mailtoLink = "mailto:jayanthjay2363@gmail.com" +
                       "?subject=" + encodeURIComponent(subject) +
                       "&body=" + encodeURIComponent(message);
  
    window.location.href = mailtoLink;
  });
  