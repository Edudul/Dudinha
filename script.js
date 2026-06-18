document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-slide");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const indicatorsContainer = document.querySelector(".carousel-indicators");
  
  let currentSlide = 0;
  const totalSlides = slides.length;
  let autoPlayTimer;

  // GERAÇÃO AUTOMÁTICA DOS PONTINHOS (Evita o erro de contagem do HTML)
  indicatorsContainer.innerHTML = ""; // Limpa os hardcoded do HTML
  slides.forEach((_, index) => {
    const button = document.createElement("button");
    button.classList.add("dot");
    if (index === 0) button.classList.add("active");
    button.setAttribute("aria-label", `Ir para o slide ${index + 1}`);
    button.addEventListener("click", () => updateCarousel(index));
    indicatorsContainer.appendChild(button);
  });

  // Atualiza a lista de dots agora que eles foram criados dinamicamente
  const dots = document.querySelectorAll(".dot");

  // Função principal para atualizar a visão
  function updateCarousel(index) {
    // Remove classes ativas atuais
    slides[currentSlide].classList.remove("active");
    if (dots.length > 0) dots[currentSlide].classList.remove("active");

    // Atualiza o índice (garante que fique dentro dos limites)
    currentSlide = (index + totalSlides) % totalSlides;

    // Adiciona classes ao novo slide ativo
    slides[currentSlide].classList.add("active");
    if (dots.length > 0) dots[currentSlide].classList.add("active");
    
    resetAutoPlay();
  }

  // Eventos dos botões
  nextBtn.addEventListener("click", () => updateCarousel(currentSlide + 1));
  prevBtn.addEventListener("click", () => updateCarousel(currentSlide - 1));

  // Autoplay
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