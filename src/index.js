import "./index.css";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import emailjs from "emailjs-com";

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_2h16h0s",
      "template_yraohzx",
      e.target,
      "QVuzXQvKVU5K8J2c3"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Gửi thành công!");
      },
      (error) => {
        console.log(error.text);
        alert("Có lỗi xảy ra, vui lòng thử lại.");
      }
    );
};

const App = () => (
  <div className="background-contact-form">
    <form
      id="contact-form"
      className="contact-form"
      method="post"
      onSubmit={handleSubmit}
    >
      <h2>Tư vấn cho tôi!</h2>
      <input
        type="text"
        name="name"
        placeholder="Tên"
        className="input-field"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="input-field"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Số điện thoại"
        className="input-field"
        required
      />
      <button type="submit" className="submit-button consult-button">
        Gửi ngay
      </button>
    </form>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

let lastScrollPosition = 0;
document.addEventListener("DOMContentLoaded", function () {
  // Ensure the DOM is fully loaded
  const header = document.getElementById("header");

  if (header) {
    // Check if the header element exists
    window.addEventListener("scroll", function () {
      const currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition > lastScrollPosition) {
        // Scroll down, hide the header
        header.style.transform = "translateY(-100%)";
      } else {
        // Scroll up, show the header
        header.style.transform = "translateY(0)";
      }

      lastScrollPosition = currentScrollPosition;
    });
  } else {
    console.error('The element with ID "header" was not found.');
  }

  // New code for progress circles
  const circles = document.querySelectorAll(".progress-circle");
  circles.forEach((circle) => {
    const progress = circle.dataset.progress;
    const progressCircle = circle.querySelector(".progress");
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (progress / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.querySelector(".mobile-toggle");
  const innerMenu2 = document.querySelector(".inner-menu2");
  const barsIcon = mobileToggle.querySelector(".fa-bars");
  const xmarkIcon = mobileToggle.querySelector(".fa-xmark");

  // Initially hide the menu and xmark icon
  innerMenu2.style.display = "none";
  xmarkIcon.style.display = "none";

  mobileToggle.addEventListener("click", function () {
    if (innerMenu2.style.display === "flex") {
      innerMenu2.style.display = "none"; // Hide menu
      barsIcon.style.display = "block"; // Show bars icon
      xmarkIcon.style.display = "none"; // Hide xmark icon
    } else {
      innerMenu2.style.display = "flex"; // Show menu
      barsIcon.style.display = "none"; // Hide bars icon
      xmarkIcon.style.display = "block"; // Show xmark icon
    }
  });

  // Close menu when clicking inside inner-menu2
  innerMenu2.addEventListener("click", function () {
    innerMenu2.style.display = "none"; // Hide menu
    barsIcon.style.display = "block"; // Show bars icon
    xmarkIcon.style.display = "none"; // Hide xmark icon
  });
});

const feedbacks = [
  {
    text: "Tôi đánh giá cao về sự hỗ trợ của Vua Seeding, từ khi áp dụng Seeding lượng khách hàng tăng đáng kể.",
    name: "Nguyễn Văn A",
    title: "CEO - VinFast",
    img: "https://via.placeholder.com/200",
  },
  {
    text: "Dịch vụ của VNNET rất tuyệt vời, tôi rất hài lòng!",
    name: "Trần Thị B",
    title: "Giám đốc - Sun Group",
    img: "https://via.placeholder.com/200",
  },
];

let currentFeedback = 0;

document.querySelector(".prev-btn").addEventListener("click", () => {
  currentFeedback =
    currentFeedback > 0 ? currentFeedback - 1 : feedbacks.length - 1;
  updateFeedback();
});

document.querySelector(".next-btn").addEventListener("click", () => {
  currentFeedback =
    currentFeedback < feedbacks.length - 1 ? currentFeedback + 1 : 0;
  updateFeedback();
});

function updateFeedback() {
  const feedback = feedbacks[currentFeedback];
  document.querySelector(".content-feedback img").src = feedback.img;
  document.querySelector(".content-feedback p").textContent = feedback.text;
  document.querySelector(".content-feedback h4").textContent = feedback.name;
  document.querySelector(".content-feedback span").textContent = feedback.title;
}

setInterval(() => {
  currentFeedback =
    currentFeedback < feedbacks.length - 1 ? currentFeedback + 1 : 0;
  updateFeedback();
}, 6000);

updateFeedback();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
