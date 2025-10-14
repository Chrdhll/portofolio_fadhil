// Inisialisasi AOS (Animate On Scroll)
AOS.init();

/* ==================== PARTICLES.JS CONFIGURATION ==================== */

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80, // Jumlah partikel. Jangan terlalu banyak agar tidak berat.
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff", // Warna partikel
    },
    shape: {
      type: "circle", // Bentuk partikel: "circle", "edge", "triangle", "polygon", "star", "image"
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3, // Ukuran partikel
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150, // Jarak maksimal antar partikel untuk terhubung
      color: "#8a2be2", // Warna garis penghubung (ungu)
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2, // Kecepatan gerak partikel
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab", // Mode saat mouse hover: "grab", "bubble", "repulse"
      },
      onclick: {
        enable: true,
        mode: "push", // Mode saat di-klik: "push", "remove"
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4, // Jumlah partikel yang ditambahkan saat di-klik
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

/* ==================== HERO SECTION TYPING EFFECT ==================== */
const typingTextElement = document.querySelector(".typing-effect");
// Ganti teks di sini sesuai dengan identitas baru Anda
const textToType = "Mobile & Web Developer";
let charIndex = 0;
const typingSpeed = 150;

function type() {
  if (charIndex < textToType.length) {
    typingTextElement.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  }
}

// Mulai efek ketikan setelah halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  if (typingTextElement) {
    setTimeout(type, 1000);
  }
});

/* ==================== ABOUT ME TERMINAL INTERACTIVE ==================== */

// 1. Definisikan semua elemen yang dibutuhkan
const terminalBody = document.querySelector(".terminal-body");
const commandButtons = document.querySelectorAll(".command-button");

let currentTypingTimeout;

// 2. Siapkan "database" output untuk setiap perintah
// Kita menggunakan backticks (``) untuk multi-line string yang rapi
const commandOutputs = {
  whoami: `
<p>> Nama: Fadhil</p>
<p>> Posisi: Mobile & Web Developer</p>
<p>> Fokus: Laravel, Flutter</p>
<p>> Filosofi: "Perpaduan antara presisi teknis dan empati pengguna."</p>
<p>> Status: Terbuka untuk peluang kolaborasi dan proyek baru.</p>
    `,
  skills: `
<p>> Mengambil data keahlian...</p>
<p>> ------------ WEB FRONTEND ------------</p>
<p>> HTML5, CSS3, JavaScript)</p>
<p>> Bootstrap, TailwindCSS</p>
<p>> ------------ WEB BACKEND -------------</p>
<p>> PHP, Laravel</p>
<p>> MySQL, RESTful APIs</p>
<p>> ------------ MOBILE DEV --------------</p>
<p>> Flutter, Dart, Kotlin</p>
<p>> ------------ TOOLS & DEVOPS --------</p>
<p>> Git, Docker, Figma, VS Code</p>
    `,
  journey: `
<p>> Memuat catatan perjalanan...</p>
<p>> 2023-sekarang - Berkuliah di Politeknik Negeri Padang</p>
<p>> 2023 - Memulai eksplorasi HTML & CSS.</p>
<p>> 2024 - Proyek pertama: membangun Web Kuesioner Kampus.</p>
<p>> 2024-2025 - Mendalami Laravel dan Flutter</p>
<p>> 2025 - Mengambil tantangan di dunia mobile dengan Flutter dan Docker.</p>
<p>> Sekarang - Terus belajar dan berkontribusi pada proyek-proyek menarik seperti: KaryaLokal, Website E-commerce dan lainnya.</p>
    `,
};

// 3. Fungsi efek ketikan yang sudah di-upgrade
function typeEffect(element, text) {
  // BARIS BARU: Hentikan proses pengetikan lama yang mungkin masih berjalan
  clearTimeout(currentTypingTimeout);

  element.innerHTML = ""; // Kosongkan dulu
  let i = 0;
  const speed = 20; // Percepat sedikit agar lebih responsif

  function typing() {
    if (i < text.length) {
      const char = text.charAt(i);
      if (char === "<") {
        const closingTagIndex = text.indexOf(">", i);
        element.innerHTML += text.substring(i, closingTagIndex + 1);
        i = closingTagIndex;
      } else {
        element.innerHTML += char;
      }
      i++;
      // BARIS DIUBAH: Simpan ID proses setTimeout ke variabel global
      currentTypingTimeout = setTimeout(typing, speed);
    } else {
      element.innerHTML += '<p>> <span class="cursor">_</span></p>';
    }
  }
  typing();
}

// 4. Fungsi utama untuk menjalankan perintah
function executeCommand(command) {
  const output = commandOutputs[command];
  if (output) {
    typeEffect(terminalBody, output);
  } else {
    typeEffect(terminalBody, `<p>> Perintah tidak dikenali: ${command}</p>`);
  }
}

// 5. Tambahkan event listener untuk setiap tombol
commandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const command = button.dataset.command;
    executeCommand(command);
  });
});

// 6. Jalankan perintah 'whoami' secara default saat pertama kali dimuat
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    executeCommand("whoami");
  }, 1000); // Beri jeda agar animasi AOS selesai dulu
});

/* ==================== PORTFOLIO MODAL LOGIC (UPGRADED) ==================== */
const projectCards = document.querySelectorAll(".project-card");
const modal = document.getElementById("project-modal");
const closeModalButton = document.querySelector(".modal-close-button");
let modalSwiper = null; // Variabel untuk menyimpan instance Swiper

function openModal(cardData) {
  // Isi konten teks seperti biasa
  document.getElementById("modal-title").textContent = cardData.title;
  document.getElementById("modal-description").textContent =
    cardData.description;

  // Proses dan tampilkan tech stack
  const techContainer = document.getElementById("modal-tech");
  techContainer.innerHTML = "";
  cardData.tech.split(", ").forEach((tech) => {
    const techSpan = document.createElement("span");
    techSpan.textContent = tech;
    techContainer.appendChild(techSpan);
  });

  // BARU: Logika untuk mengisi slider gambar
  const imagesWrapper = document.getElementById("modal-images-wrapper");
  imagesWrapper.innerHTML = ""; // Kosongkan slider lama
  cardData.images.split(",").forEach((imgSrc) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    const img = document.createElement("img");
    img.src = imgSrc.trim();
    slide.appendChild(img);
    imagesWrapper.appendChild(slide);
  });

  // Inisialisasi atau update Swiper
  if (modalSwiper) {
    modalSwiper.destroy(true, true); // Hapus swiper lama
  }
  modalSwiper = new Swiper(".modal-swiper", {
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // BARU: Logika untuk tombol Demo & GitHub
  const demoLink = document.getElementById("modal-demo-link");
  const githubLink = document.getElementById("modal-github-link");

  if (cardData.demoLink && cardData.demoLink !== "#") {
    demoLink.href = cardData.demoLink;
    demoLink.style.display = "inline-block"; // Tampilkan tombol
  } else {
    demoLink.style.display = "none"; // Sembunyikan tombol
  }

  if (cardData.githubLink && cardData.githubLink !== "#") {
    githubLink.href = cardData.githubLink;
    githubLink.style.display = "inline-block";
  } else {
    githubLink.style.display = "none";
  }

  modal.classList.add("active");
}

// Event listener untuk kartu proyek (tetap sama)
projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const cardData = {
      title: card.dataset.title,
      description: card.dataset.description,
      tech: card.dataset.tech,
      images: card.dataset.images, // Ambil data gambar baru
      demoLink: card.dataset.demoLink,
      githubLink: card.dataset.githubLink,
    };
    openModal(cardData);
  });
});

// Fungsi dan event listener untuk menutup modal (tetap sama)
function closeModal() {
  modal.classList.remove("active");
}
closeModalButton.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

/* ==================== TESTIMONIALS SWIPER LOGIC ==================== */

const swiper = new Swiper(".testimonial-swiper", {
  // Optional parameters
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // Autoplay configuration
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 2, // Anda bisa ubah ke 3 jika punya banyak testimoni
      spaceBetween: 50,
    },
  },
});

/* ==================== CONTACT FORM SUBMISSION (with Fetch & Formspree) ==================== */
const contactForm = document.getElementById("contact-form");
const successMessage = document.getElementById("form-success-message");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah form submit default

  let isValid = true;
  const inputs = contactForm.querySelectorAll(
    "input[required], textarea[required]"
  );

  // --- Bagian Validasi (tetap sama) ---
  inputs.forEach((input) => {
    const errorSpan = input.parentElement.querySelector(".error-message");
    if (input.value.trim() === "") {
      isValid = false;
      input.classList.add("error");
      errorSpan.style.display = "block";
    } else {
      input.classList.remove("error");
      errorSpan.style.display = "none";
    }
    if (input.type === "email") {
      const emailPattern = /^\S+@\S+\.\S+$/;
      if (!emailPattern.test(input.value.trim())) {
        isValid = false;
        input.classList.add("error");
        errorSpan.style.display = "block";
      }
    }
  });

  // --- BAGIAN PENGIRIMAN (BARU) ---
  if (isValid) {
    const formData = new FormData(contactForm);
    const submitButton = contactForm.querySelector('button[type="submit"]');

    submitButton.disabled = true; // Nonaktifkan tombol saat mengirim
    submitButton.textContent = "Sending...";

    fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Jika SUKSES
          successMessage.style.display = "block";
          contactForm.reset();
        } else {
          // Jika GAGAL dari server
          response.json().then((data) => {
            if (Object.hasOwn(data, "errors")) {
              alert(data["errors"].map((error) => error["message"]).join(", "));
            } else {
              alert("Oops! There was a problem submitting your form.");
            }
          });
        }
      })
      .catch((error) => {
        // Jika GAGAL karena masalah jaringan
        alert("Oops! There was a network problem.");
      })
      .finally(() => {
        // Apapun hasilnya, aktifkan kembali tombolnya
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
        // Sembunyikan pesan sukses setelah beberapa detik
        setTimeout(() => {
          successMessage.style.display = "none";
        }, 5000);
      });
  }
});

/* ==================== FINAL POLISHING & INTERACTIONS ==================== */

// --- Scroll Progress Bar ---
const progressBar = document.getElementById("scroll-progress-bar");
window.addEventListener("scroll", () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = scrollPercentage + "%";
});

// --- Sticky Header on Scroll ---
const header = document.getElementById("main-header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// --- Active Link Highlighting on Scroll (Intersection Observer) ---
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".main-nav a");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // 50% section terlihat
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const currentSectionId = entry.target.id;
      navLinks.forEach((link) => {
        link.classList.remove("active-link");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active-link");
        }
      });
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});

/* --- Mobile Hamburger Menu (UPGRADED) --- */
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileNav = document.querySelector(".main-nav");

hamburgerBtn.addEventListener("click", () => {
  // Toggle kelas di tombol dan di menu navigasi
  hamburgerBtn.classList.toggle("active");
  mobileNav.classList.toggle("mobile-menu-open");
});

navLinks.forEach((link) => { // <-- Langsung gunakan variabel navLinks yang sudah ada
  link.addEventListener("click", () => {
    hamburgerBtn.classList.remove("active");
    mobileNav.classList.remove("mobile-menu-open");
  });
});