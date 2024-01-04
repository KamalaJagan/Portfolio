(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

/*function sendEmail() {
  Email.send({
    secureToken: "e3bb63fc-a32f-4f7f-ae68-f9538b456292",
    To: "skamalakanta41@gmail.com",
    From: document.getElementById("email").value,
    Subject: "This is the subject",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone no: " +
      document.getElementById("phone").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Message Sent Succesfully"));
}

function sendEmail() {
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    number: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_6lgodqt", "template_gj5c5m9", params)
    .then(function (res) {
      alert("Success! " + res.status);
    });
}
*/
const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "service_6lgodqt";
  const templateID = "template_gj5c5m9";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
