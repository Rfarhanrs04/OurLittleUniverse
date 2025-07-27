document.addEventListener("DOMContentLoaded", () => {
  // --- Slider Logic ---
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const dotsContainer = document.querySelector(".dots-container");
  let currentIndex = 0;
  const totalSlides = slides.length;

  // Create dots dynamically based on the number of slides
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll(".dot");

  // Function to update the slider and dots to show the correct slide
  function updateSlider(index) {
    // Update slide visibility
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    // Update dot highlight
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    currentIndex = index;
  }

  // Event Listeners for next and previous buttons
  nextBtn.addEventListener("click", () => {
    const newIndex = (currentIndex + 1) % totalSlides;
    updateSlider(newIndex);
  });

  prevBtn.addEventListener("click", () => {
    const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider(newIndex);
  });

  // Event Listener for clicking on the dots
  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const newIndex = parseInt(e.target.dataset.index);
      updateSlider(newIndex);
    });
  });

  // Initialize slider to the first slide
  updateSlider(0);

  // --- Heart Animation Logic ---
  const heart = document.getElementById("interactive-heart");

  heart.addEventListener("click", () => {
    // Prevent re-triggering animation while it's running
    if (heart.classList.contains("beating")) {
      return;
    }

    heart.classList.add("beating");

    // Remove the class after the animation is done so it can be clicked again
    setTimeout(() => {
      heart.classList.remove("beating");
    }, 500); // This duration must match the animation duration in the CSS
  });
});
