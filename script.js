// ======= Title Text Animation on all pages =======
// Simple letter-by-letter fade-in effect for all elements with class 'title-effect'
document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".title-effect");

  titles.forEach(title => {
    const text = title.textContent;
    title.textContent = ""; // clear text
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      span.textContent = text[i];
      span.style.opacity = 0;
      span.style.transition = `opacity 0.3s ease ${(i * 0.05)}s`;
      title.appendChild(span);
    }
    // trigger fade-in
    setTimeout(() => {
      const spans = title.querySelectorAll("span");
      spans.forEach(span => (span.style.opacity = 1));
    }, 100);
  });
});


// ======= Printing Page: Design Upload and Preview =======

if (document.getElementById("design-upload")) {
  const designUpload = document.getElementById("design-upload");
  const tshirtPreview = document.getElementById("tshirt-preview");
  const designCanvas = document.getElementById("design-canvas");
  const ctx = designCanvas.getContext("2d");
  const orderForm = document.getElementById("order-form");

  // Set canvas size to match tshirt image size after it loads
  tshirtPreview.onload = () => {
    designCanvas.width = tshirtPreview.width;
    designCanvas.height = tshirtPreview.height;
    drawTshirtWithDesign(null);
  };

  // Draw tshirt image + overlay design (if any) on canvas
  function drawTshirtWithDesign(designImg) {
    ctx.clearRect(0, 0, designCanvas.width, designCanvas.height);
    ctx.drawImage(tshirtPreview, 0, 0, designCanvas.width, designCanvas.height);
    if (designImg) {
      // Draw design centered on tshirt canvas with scale
      const scale = 0.5;
      const dw = designImg.width * scale;
      const dh = designImg.height * scale;
      const dx = (designCanvas.width - dw) / 2;
      const dy = designCanvas.height * 0.3; // approx chest area
      ctx.globalAlpha = 0.8;
      ctx.drawImage(designImg, dx, dy, dw, dh);
      ctx.globalAlpha = 1.0;
    }
  }

  // When user uploads design image
  designUpload.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Only accept PNG/JPEG
    if (!file.type.match("image/png") && !file.type.match("image/jpeg")) {
      alert("Please upload a PNG or JPEG image.");
      designUpload.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
      const img = new Image();
      img.onload = function() {
        drawTshirtWithDesign(img);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });


  // ======= Handle Form Submit =======
  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validate form fields
    if (!orderForm.checkValidity()) {
      alert("Please fill all required fields correctly.");
      return;
    }

    // Show payment simulation prompt (you can replace this with real payment integration)
    const paymentSuccess = confirm("Simulate payment: Click OK to confirm payment.");

    if (!paymentSuccess) {
      alert("Payment not completed. Your order has not been submitted.");
      return;
    }

    // Prepare form data
    const formData = new FormData(orderForm);

    // Add design image (as base64) to form data
    if (designUpload.files.length === 0) {
      alert("Please upload your design before submitting.");
      return;
    }

    const file = designUpload.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      const base64Design = event.target.result;

      // Add design image data to form data
      formData.append("designImageBase64", base64Design);

      // Now send the form data to your email backend or service

      // Example: Using fetch to a FormSubmit endpoint or your server API
      fetch("https://formsubmit.co/ajax/dipesh@pokiedex.com", {
        method: "POST",
        headers: { 'Accept': 'application/json' },
        body: formData
      })
      .then(response => {
        if (response.ok) {
          alert("Order submitted successfully! We will contact you soon.");
          orderForm.reset();
          drawTshirtWithDesign(null);
        } else {
          alert("There was an error submitting your order. Please try again later.");
        }
      })
      .catch(() => {
        alert("Network error. Please try again later.");
      });
    };
    reader.readAsDataURL(file);
  });
}


// ======= Smooth Scroll to Top (for Back to Home buttons) =======

const backButtons = document.querySelectorAll(".back-button");
backButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    // We already have location.href change in HTML inline, so just scroll smoothly on same page
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});


// ======= Navigation Highlight (optional) =======

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active-nav");
    }
  });
});
