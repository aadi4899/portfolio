  
      // Preloader functionality
      const words = ["Innovate", "Transform", "Scale", "Execute", "Deliver"];
      let currentWordIndex = 0;

      function showNextWord() {
        const container = document.getElementById("wordContainer");
        const currentWord = container.querySelector(".word");

        if (currentWordIndex < words.length - 1) {
          currentWord.classList.add("fade-out");

          setTimeout(() => {
            currentWordIndex++;
            currentWord.textContent = words[currentWordIndex];
            currentWord.classList.remove("fade-out");
            currentWord.style.animation = "none";

            currentWord.offsetHeight;
            currentWord.style.animation = "wordAnimation 0.8s ease forwards";

            if (currentWordIndex < words.length - 1) {
              setTimeout(showNextWord, 100);
            } else {
              setTimeout(hidePreloader, 200);
            }
          }, 200);
        } else {
          setTimeout(hidePreloader, 200);
        }
      }

      function hidePreloader() {
        const preloader = document.getElementById("preloader");
        preloader.classList.add("fade-out");
        setTimeout(() => {
          preloader.style.display = "none";
          document.body.style.overflow = "visible";
        }, 500);
      }

      // Start preloader animation
      setTimeout(() => {
        showNextWord();
      }, 1000);

      // Create tech particles
      function createTechParticles() {
        const container = document.getElementById("particles");
        const particleCount = 30;

        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement("div");
          particle.className =
            Math.random() > 0.7 ? "floating-element" : "particle";

          particle.style.left = Math.random() * 100 + "%";
          particle.style.top = Math.random() * 100 + "%";
          particle.style.animationDelay = Math.random() * 8 + "s";
          particle.style.animationDuration = Math.random() * 5 + 5 + "s";

          if (particle.className === "particle") {
            particle.style.opacity = Math.random() * 0.5 + 0.2;
          }

          container.appendChild(particle);
        }
      }

      // Theme toggle functionality
      const themeToggle = document.getElementById("themeToggle");
      const themeIcon = document.getElementById("themeIcon");
      const body = document.body;

      themeToggle.addEventListener("click", () => {
        const currentTheme = body.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";

        body.setAttribute("data-theme", newTheme);
        themeIcon.textContent = newTheme === "light" ? "☀️" : "🌙";

        localStorage.setItem("theme", newTheme);
      });

      // Load saved theme
      const savedTheme = localStorage.getItem("theme") || "dark";
      body.setAttribute("data-theme", savedTheme);
      themeIcon.textContent = savedTheme === "light" ? "☀️" : "🌙";

      // Mobile menu functionality
      const mobileMenu = document.getElementById("mobileMenu");
      const nav = document.querySelector("nav");

      mobileMenu.addEventListener("click", () => {
        nav.style.display = nav.style.display === "block" ? "none" : "block";
      });

      // Smooth scroll for navigation
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }

          // Close mobile menu after clicking a link
          if (window.innerWidth <= 768) {
            // Only on mobile
            nav.style.display = "none";
          }
        });
      });

      // Initialize
      window.addEventListener("load", () => {
        createTechParticles();
      });
    

    
      // Dummy Data
      const projects = [
        {
          text: "A sleek eCommerce experience for adjustable office and home tables, built from the ground up on Shopify.",
          image: "/assest/desko.png",
          title: "Desko Homes ",
          desc: "From theme selection and requirement gathering to custom business logic and development, every detail was crafted for performance and usability. Integrated third-party apps, a 3D product viewer for interactive shopping, and smooth checkout flows deliver a premium user experience. The result is a fast, visually compelling store that’s ready to drive sales and support business growth.",
          features: [
            "Selected and tailored a Shopify theme to reflect the brand’s premium, modern style.",
            "Defined requirements and built features aligned with business goals and user needs.",
            "Integrated third-party apps for inventory, payments, and enhanced functionality.",
            "Added custom logic for adjustable table configurations, pricing, and product options.",
            "Implemented a 3D product viewer and optimized performance for speed and conversions.",
          ],
          tech: [
            "/assest/logo/shopify-icon.png",
            "/assest/logo/html-icon.png",
            "/assest/logo/css-icon.png",
            "/assest/logo/js-icon.png",
          ],
        },
        {
          text: "Optimizing and enhancing ThreadVibe Living’s high-traffic Shopify store for better performance and cost efficiency.",
          image: "/assest/thread.png",
          title: "Threadvibeliving",
          desc: "ThreadVibe Living, a leading name in sustainable Indian home décor furniture with 10K+ monthly visitors, partnered with us to refine their existing Shopify store. We replaced several paid apps with custom-built solutions, reducing ongoing costs without compromising functionality. Ongoing collaboration ensures continuous optimization, feature upgrades, and a smooth shopping experience for their growing customer base.",
          features: [
            "Replaced high-cost third-party apps with custom-coded solutions to save operational expenses.",
            "Enhanced store speed and user experience while retaining all essential features.",
            "Implemented scalable solutions to support growing traffic and product range.",
            "Conducted continuous optimization for performance and conversions.",
            "Ongoing partnership for adding new features and maintaining store quality.",
          ],
          tech: [
            "/assest/logo/shopify-icon.png",
            "/assest/logo/html-icon.png",
            "/assest/logo/css-icon.png",
            "/assest/logo/js-icon.png",
          ],
        },
        {
          text: "Custom-built medicine finder and delivery platform solving real-world accessibility challenges.",
          image: "/assest/medicine.png",
          title: "Custom Softwre          ",
          desc: "We developed a fully custom web application to bridge the gap between customers and local pharmacists, enabling quick medicine search and doorstep delivery. Built using HTML, CSS, JavaScript, and Firebase, the platform uses pure CRUD operations for fast, secure, and reliable data management. It streamlines requests, ensures real-time availability updates, and simplifies communication between users and pharmacies.",
          features: [
            "Designed and built a custom medicine search and delivery platform from scratch.",
            "Connected users directly with nearby pharmacists for faster order fulfillment.",
            "Implemented CRUD-based operations for efficient, real-time inventory and order tracking.",
            "Developed a lightweight, responsive front-end with HTML, CSS, and JavaScript.",
            "Integrated Firebase for secure data storage, authentication, and live updates.",
          ],
          tech: [
            "/assest/logo/html-icon.png",
            "/assest/logo/css-icon.png",
            "/assest/logo/bootstrap-icon.png",
            "/assest/logo/js-icon.png",
            "/assest/logo/mysql-icon.png",
          ],
        },
        {
          text: "Developed a custom CMS platform for managing and scaling a multi-branch food delivery business.",
          image: "/assest/food.webp",
          title: "Multi Branch Operations Manager",
          desc: "We built a tailored content management system that enables restaurant owners to effortlessly update menus, manage orders, and track performance across multiple outlets in real-time. The system supports role-based access, dynamic content updates, and analytics dashboards, giving business owners full control without technical expertise. Optimized for speed, scalability, and mobile access, it empowers food businesses to adapt quickly and serve customers better.",
          features: [
            "Designed and developed a custom CMS tailored for the food service industry.",
            "Enabled real-time menu updates, promotions, and branch-level management.",
            "Integrated order tracking and reporting tools for better decision-making",
            "Built a responsive, user-friendly interface requiring no technical background.",
            "Ensured scalability to support multiple branches and high order volumes.",
          ],
          tech: [
            "/assest/logo/html-icon.png",
            "/assest/logo/css-icon.png",
            "/assest/logo/wordpress-icon.png",
            "/assest/logo/mysql-icon.png",
            "/assest/logo/js-icon.png",
          ],
        },
      ];

      let loaded = 0;
      const perLoad = 3;
      const container = document.getElementById("projectsContainer");
      const showMoreBtn = document.getElementById("showMoreBtn");

      function createCard(p, index) {
        const card = document.createElement("div");
        card.className = "project-card";

        const actualIndex = loaded + index;
        if (actualIndex % 2 === 1) {
          card.classList.add("reverse");
        }

        card.innerHTML = `
        <div class="left">
            <p>${p.text}</p>
            ${p.image ? `<img src="${p.image}" alt="${p.title}">` : ""}
        </div>
        <div class="right">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            ${
              p.features
                ? `
                <ul class="feature-list">
                    ${p.features
                      .map(
                        (f) => `
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20"><path d="M7.629 14.832l5.215-4.833-5.215-4.833v9.666z"/></svg>
                            ${f}
                        </li>`
                      )
                      .join("")}
                </ul>`
                : ""
            }
            ${
              p.tech
                ? `
                <div class="tech-stack">
                    ${p.tech
                      .map((src) => `<img src="${src}" alt="tech">`)
                      .join("")}
                </div>`
                : ""
            }
        </div>
    `;
        observer.observe(card);
        return card;
      }

      // Special CTA card
      function createCtaCard() {
        const card = document.createElement("div");
        card.className = "cta-section";
        card.innerHTML = `
        <h2>More Amazing Projects Await!</h2>
        <p>And that’s just the tip of the iceberg! I’ve worked on plenty more exciting projects <br>(and I’m cooking up a few fresh ones right now 🍳).<br>
            <span class="gradient-text">Let’s connect — I’d love to show you how I turn crazy-good ideas into real, working products!</span></p>
        <a href="#contact" class="cta-btn">Let’s Talk <span class="ar">→</span></a>
    `;
        observer.observe(card);
        return card;
      }

      function loadProjects() {
        const slice = projects.slice(loaded, loaded + perLoad);
        slice.forEach((p, i) => {
          container.appendChild(createCard(p, i));

          if (loaded + i < projects.length - 1) {
            const sep = document.createElement("div");
            sep.className = "separator";
            container.appendChild(sep);
          }
        });
        loaded += slice.length;

        // When all projects are loaded, add the CTA card
        if (loaded >= projects.length) {
          container.appendChild(createCtaCard());
          showMoreBtn.style.display = "none";
        }
      }

      showMoreBtn.addEventListener("click", loadProjects);

      // Fade-in Observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      loadProjects();
    

    
      // Theme Toggle Functionality
      function toggleTheme() {
        const body = document.body;
        const themeText = document.getElementById("theme-text");

        if (body.getAttribute("data-theme") === "light") {
          body.removeAttribute("data-theme");
          themeText.textContent = "🌙 Dark";
        } else {
          body.setAttribute("data-theme", "light");
          themeText.textContent = "☀️ Light";
        }
      }

      // 3D Carousel Functionality
      class CoverflowCarousel {
        constructor() {
          this.carousel = document.getElementById("carousel");
          this.slides = document.querySelectorAll(".abt-port-slide");
          this.caption = document.getElementById("caption");
          this.indicators = document.querySelectorAll(".abt-port-indicator");
          this.currentIndex = 0;
          this.isAnimating = false;
          this.autoRotateInterval = null;

          this.captions = ["I Code", "I Lift", "I Travel"];

          this.init();
        }

        init() {
          this.setupEventListeners();
          this.startAutoRotate();
          this.updateSlides();
        }

        setupEventListeners() {
          // Touch/Mouse events for swipe
          let startX = 0;
          let startY = 0;
          let isDragging = false;

          this.carousel.addEventListener("mousedown", (e) => {
            startX = e.clientX;
            startY = e.clientY;
            isDragging = true;
            this.stopAutoRotate();
          });

          this.carousel.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isDragging = true;
            this.stopAutoRotate();
          });

          document.addEventListener("mouseup", (e) => {
            if (isDragging) {
              const deltaX = e.clientX - startX;
              const deltaY = Math.abs(e.clientY - startY);

              if (Math.abs(deltaX) > 50 && deltaY < 100) {
                if (deltaX > 0) {
                  this.prev();
                } else {
                  this.next();
                }
              }

              isDragging = false;
              this.startAutoRotate();
            }
          });

          document.addEventListener("touchend", (e) => {
            if (isDragging && e.changedTouches[0]) {
              const deltaX = e.changedTouches[0].clientX - startX;
              const deltaY = Math.abs(e.changedTouches[0].clientY - startY);

              if (Math.abs(deltaX) > 50 && deltaY < 100) {
                if (deltaX > 0) {
                  this.prev();
                } else {
                  this.next();
                }
              }

              isDragging = false;
              this.startAutoRotate();
            }
          });

          // Stop auto-rotate on hover
          this.carousel.addEventListener("mouseenter", () => {
            this.stopAutoRotate();
          });

          this.carousel.addEventListener("mouseleave", () => {
            this.startAutoRotate();
          });
        }

        updateSlides() {
          if (this.isAnimating) return;

          this.isAnimating = true;

          this.slides.forEach((slide, index) => {
            slide.className = "abt-port-slide";

            if (index === this.currentIndex) {
              slide.classList.add("abt-port-active");
            } else if (index === this.getPrevIndex()) {
              slide.classList.add("abt-port-prev");
            } else if (index === this.getNextIndex()) {
              slide.classList.add("abt-port-next");
            } else {
              slide.classList.add("abt-port-hidden");
            }
          });

          // Update caption
          this.caption.className = "abt-port-caption";
          setTimeout(() => {
            this.caption.textContent = this.captions[this.currentIndex];
            this.caption.classList.add("abt-port-active");
          }, 200);

          // Update indicators
          this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle(
              "abt-port-active",
              index === this.currentIndex
            );
          });

          setTimeout(() => {
            this.isAnimating = false;
          }, 600);
        }

        getPrevIndex() {
          return this.currentIndex === 0
            ? this.slides.length - 1
            : this.currentIndex - 1;
        }

        getNextIndex() {
          return this.currentIndex === this.slides.length - 1
            ? 0
            : this.currentIndex + 1;
        }

        next() {
          if (this.isAnimating) return;
          this.currentIndex = this.getNextIndex();
          this.updateSlides();
        }

        prev() {
          if (this.isAnimating) return;
          this.currentIndex = this.getPrevIndex();
          this.updateSlides();
        }

        goTo(index) {
          if (this.isAnimating || index === this.currentIndex) return;
          this.currentIndex = index;
          this.updateSlides();
        }

        startAutoRotate() {
          this.stopAutoRotate();
          this.autoRotateInterval = setInterval(() => {
            this.next();
          }, 1500);
        }

        stopAutoRotate() {
          if (this.autoRotateInterval) {
            clearInterval(this.autoRotateInterval);
            this.autoRotateInterval = null;
          }
        }
      }

      // Global function for indicators
      function goToSlide(index) {
        if (window.coverflowCarousel) {
          window.coverflowCarousel.goTo(index);
        }
      }

      // Initialize carousel when DOM is loaded
      document.addEventListener("DOMContentLoaded", () => {
        window.coverflowCarousel = new CoverflowCarousel();
      });
    

    
      const servItems = document.querySelectorAll(".serv-feature-item");

      function servCheckScroll() {
        servItems.forEach((item) => {
          const rect = item.getBoundingClientRect();
          if (rect.top < window.innerHeight - 50) {
            item.classList.add("serv-visible");
          }
        });
      }

      window.addEventListener("scroll", servCheckScroll);
      window.addEventListener("load", servCheckScroll);
    


    
      function createParticle() {
        const particle = document.createElement("div");
        particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: var(--primary-color);
                border-radius: 50%;
                pointer-events: none;
                opacity: 0.6;
                animation: float 6s ease-in-out infinite;
            `;

        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 3 + "s";

        document.querySelector(".serv-section-cta").appendChild(particle);

        setTimeout(() => {
          particle.remove();
        }, 6000);
      }

      // Create floating particles
      setInterval(createParticle, 2000);

      // Add CSS for particle animation
      const style = document.createElement("style");
      style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
                10%, 90% { opacity: 0.6; }
                50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
            }
        `;
      document.head.appendChild(style);
    
