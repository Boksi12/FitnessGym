const plans = {
  beginner: {
    title: "Početni Plan",
    price: "2.500 RSD / mesec",
    description: "Osnovni program namenjen potpunim početnicima koji žele da uspostave redovnu naviku vežbanja. Fokus je na pravilnom izvođenju osnovnih vežbi, razvijanju kondicije i jačanju osnovnih mišićnih grupa. Program je prilagođen za sporiji tempo kako bi telo imalo vremena za prilagođavanje.",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
    icons: [
      { label: "Trajanje: 4 nedelje", svg: `<svg viewBox="0 0 24 24" fill="#3a86ff" xmlns="http://www.w3.org/2000/svg"><path d="M12 20c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zm0-18c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10S6.48 2 12 2zm-1 5h2v6h-2V7zm1 8c-.55 0-1 .45-1 1h2c0-.55-.45-1-1-1z"/></svg>` },
      { label: "Nivo: Početnik", svg: `<svg viewBox="0 0 24 24" fill="#3a86ff" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L1 21h22L12 2z"/></svg>` },
      { label: "Treninzi: 3 nedeljno", svg: `<svg viewBox="0 0 24 24" fill="#3a86ff" xmlns="http://www.w3.org/2000/svg"><path d="M8 16h8v2H8zM4 12h16v2H4zM2 8h20v2H2z"/></svg>` }
    ]
  },
  intermediate: {
    title: "Srednji Plan",
    price: "4.000 RSD / mesec",
    description: "Plan za vežbače sa osnovnim iskustvom koji žele da unaprede svoju snagu, izdržljivost i tehniku. Uključuje raznovrsne vežbe sa opremom i fokusira se na progresivno opterećenje. Cilj je povećanje mišićne mase i poboljšanje opšte forme, uz prilagođene treninge u skladu sa napretkom.",
    image: "https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltfGVufDB8fDB8fHww",
    icons: [
      { label: "Trajanje: 8 nedelja", svg: `<svg viewBox="0 0 24 24" fill="#3a86ff" xmlns="http://www.w3.org/2000/svg"><path d="M12 20c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zm0-18c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10S6.48 2 12 2zm-1 5h2v6h-2V7zm1 8c-.55 0-1 .45-1 1h2c0-.55-.45-1-1-1z"/></svg>` },
      { label: "Nivo: Srednji", svg: `<svg viewBox="0 0 24 24" fill="#3a86ff" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L1 21h22L12 2z"/></svg>` },
      { label: "Treninzi: 4-5 nedeljno", svg: `<svg viewBox="0 0 24 24" fill="#3a86ff" xmlns="http://www.w3.org/2000/svg"><path d="M8 16h8v2H8zM4 12h16v2H4zM2 8h20v2H2z"/></svg>` }
    ]
  },
  advanced: {
    title: "Napredni Plan",
    price: "5.500 RSD / mesec",
    description: "Intenzivan program dizajniran za iskusne vežbače koji žele da postignu vrhunske rezultate. Obuhvata složene treninge sa visokim opterećenjem, fokus na specifične mišićne grupe i tehnike za povećanje snage i eksplozivnosti. Program uključuje i preporuke za oporavak i ishranu radi maksimalnih performansi.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
    icons: [
      { label: "Trajanje: 12 nedelja", svg: `<svg viewBox="0 0 24 24" fill="#3a86ff" xmlns="http://www.w3.org/2000/svg"><path d="M12 20c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zm0-18c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10S6.48 2 12 2zm-1 5h2v6h-2V7zm1 8c-.55 0-1 .45-1 1h2c0-.55-.45-1-1-1z"/></svg>` },
      { label: "Nivo: Napredni", svg: `<svg viewBox="0 0 24 24" fill="#3a86ff" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L1 21h22L12 2z"/></svg>` },
      { label: "Treninzi: 6 nedeljno", svg: `<svg viewBox="0 0 24 24" fill="#3a86ff" xmlns="http://www.w3.org/2000/svg"><path d="M8 16h8v2H8zM4 12h16v2H4zM2 8h20v2H2z"/></svg>` }
    ]
  }
};

/* za plan sekciju */
window.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.plan-tabs button');
  const img = document.getElementById('plan-image');
  const title = document.getElementById('plan-title');
  const price = document.getElementById('plan-price');
  const desc = document.getElementById('plan-description');
  const iconsContainer = document.getElementById('plan-icons');

  function loadPlan(planKey) {
    const plan = plans[planKey];
    img.src = plan.image;
    img.alt = plan.title;
    title.textContent = plan.title;
    price.textContent = plan.price;
    desc.textContent = plan.description;

    // Očisti prethodne ikonice
    iconsContainer.innerHTML = '';
    plan.icons.forEach(icon => {
      const iconDiv = document.createElement('div');
      iconDiv.classList.add('plan-icon');
      iconDiv.innerHTML = `${icon.svg}<div>${icon.label}</div>`;
      iconsContainer.appendChild(iconDiv);
    });
  }

  // Inicijalno učitaj početni plan
  loadPlan('beginner');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      loadPlan(button.getAttribute('data-plan'));
    });
  });
});


/* za button skrolovanje do vrha stranice */
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 150) { 
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});


scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});

/* za testimonial ocene korisnika sekcija */
const container = document.getElementById('testimonials');
const btnLeft = document.getElementById('scrollLeft');
const btnRight = document.getElementById('scrollRight');

const scrollAmount = 320; 

btnLeft.addEventListener('click', () => {
  container.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

btnRight.addEventListener('click', () => {
  container.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});


