document.querySelectorAll('.questions__list__item').forEach((el) => {
    el.onclick = function() { 
      this.querySelector('.questions__list__item--decoration').classList.toggle('decoration-active');
      this.querySelector('.questions__list__item--answer').classList.toggle('answer-active');
    }
  }
)
