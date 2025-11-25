const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const questionBtn = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const plusIcon = item.querySelector(".plus-icon");
  const minusIcon = item.querySelector(".minus-icon");

  questionBtn.addEventListener("click", () => {
    const isOpen = answer.classList.contains("open");

    // Close all other answers
    faqItems.forEach(i => {
      const otherAnswer = i.querySelector(".faq-answer");
      const otherPlus = i.querySelector(".plus-icon");
      const otherMinus = i.querySelector(".minus-icon");

      otherAnswer.style.maxHeight = "0px";
      otherAnswer.style.padding = "0";
      otherAnswer.classList.remove("open");
      otherPlus.classList.remove("hidden");
      otherMinus.classList.add("hidden");
    });

    // Open this one if it was closed
    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.padding = "2.5rem 1.5rem";
      answer.classList.add("open");
      plusIcon.classList.add("hidden");
      minusIcon.classList.remove("hidden");
    }
  });
});

// Recalculate on resize
window.addEventListener("resize", () => {
  document.querySelectorAll(".faq-answer.open").forEach(answer => {
    answer.style.maxHeight = answer.scrollHeight + "px";
  });
});
