const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
});


  const scrollBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.pricing-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
        if (content.id === tab.dataset.tab) {
          content.classList.add('active');
        }
      });
    });
  });

  
  const modal = document.getElementById("quoteModal");
  const closeBtn = document.querySelector(".close-btn");
  const quoteBtns = document.querySelectorAll(".quote-btn");

  quoteBtns.forEach(btn => {
    btn.addEventListener("click", function(e) {
      e.preventDefault();
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });

  // OPTIONAL: Handle form submission
  document.getElementById("quoteForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const details = document.getElementById("details").value.trim();

    // 🧠 Templates per service
    const serviceTemplates = {
      "Website Development": "I want a professional website that fits my brand.",
      "Office Network Setup": "I need help setting up a secure and efficient office network.",
      "Graphic Design": "I'm looking for custom graphics and visual branding.",
      "Software Development": "I want a custom app or system built for my business."
    };

    const baseMessage = `Hello, my name is ${name}.
I'd like to request a quote for *${service}*.

${serviceTemplates[service] || ""}
${details ? "\n\nProject Description:\n" + details : ""}

Phone: ${phone}
${email ? "Email: " + email : ""}`;

    const encodedMessage = encodeURIComponent(baseMessage);
    const whatsappNumber = "233502224249"; // 🔁 replace with your real number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
    document.getElementById("quoteModal").style.display = "none";
    this.reset();
  });

