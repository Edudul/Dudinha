document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".dot");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  
  let currentSlide = 0;
  const totalSlides = slides.length;
  let autoPlayTimer;

  // Função principal para atualizar a visão
  function updateCarousel(index) {
    // Remove classes ativas atuais
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    // Atualiza o índice (garante que fique dentro dos limites)
    currentSlide = (index + totalSlides) % totalSlides;

    // Adiciona classes ao novo slide ativo
    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
    
    resetAutoPlay();
  }

  // Eventos dos botões
  nextBtn.addEventListener("click", () => updateCarousel(currentSlide + 1));
  prevBtn.addEventListener("click", () => updateCarousel(currentSlide - 1));

  // Eventos dos pontinhos (indicators)
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => updateCarousel(index));
  });

  // Autoplay (Opcional, mas comum)
  function startAutoPlay() {
    autoPlayTimer = setInterval(() => {
      updateCarousel(currentSlide + 1);
    }, 5000); // Muda a cada 5 segundos
  }

  function resetAutoPlay() {
    clearInterval(autoPlayTimer);
    startAutoPlay();
  }

  // Inicializa o autoplay
  startAutoPlay();
});