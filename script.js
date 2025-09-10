// ========= DANE AUT (20 wpisów) =========
// Każdy obiekt: slug (klucz) : { name, summary, year, engine, power, mileage, price, equipment[], images[] }
const carsData = {
  "audi": {
    name: "Audi A4",
    summary: "2018 • 2.0 TDI • 150 KM",
    year: 2018, engine: "2.0 TDI", power: "150 KM", mileage: "85 000 km", price: "78 900 zł",
    equipment: ["Klimatyzacja autom.", "Nawigacja", "Czujniki parkowania", "Tempomat"],
    images: ["images/audi1.jpg", "images/audi2.jpg", "images/audi3.jpg"]
  },
  "bmw": {
    name: "BMW Seria 3",
    summary: "2019 • 2.0 Diesel • 190 KM",
    year: 2019, engine: "2.0 Diesel", power: "190 KM", mileage: "65 000 km", price: "92 500 zł",
    equipment: ["Skórzana tapicerka", "Klimatyzacja", "Tempomat", "Park Assist"],
    images: ["images/bmw1.jpg", "images/bmw2.jpg", "images/bmw3.jpg"]
  },
  "passat": {
    name: "Volkswagen Passat",
    summary: "2017 • 2.0 TDI • 140 KM",
    year: 2017, engine: "2.0 TDI", power: "140 KM", mileage: "120 000 km", price: "70 000 zł",
    equipment: ["Nawigacja", "Klimatyzacja", "Hamulce ABS"], images: ["images/passat1.jpg", "images/passat2.jpg", "images/passat3.jpg"]
  },
  "mercedes": {
    name: "Mercedes C Klasa", summary: "2016 • 2.2 CDI • 170 KM",
    year: 2016, engine: "2.2 CDI", power: "170 KM", mileage: "145 000 km", price: "82 000 zł",
    equipment: ["Automatyczna klimatyzacja", "Tempomat", "Czujniki parkowania"], images: ["images/mercedes1.jpg", "images/mercedes2.jpg", "images/mercedes3.jpg"]
  },
  "ford": {
    name: "Ford Focus", summary: "2018 • 1.5 EcoBoost • 150 KM",
    year: 2018, engine: "1.5 EcoBoost", power: "150 KM", mileage: "95 000 km", price: "42 500 zł",
    equipment: ["Klimatyzacja", "Bluetooth", "ESP"], images: ["images/ford1.jpg", "images/ford2.jpg", "images/ford3.jpg"]
  },
  "opel": {
    name: "Opel Insignia", summary: "2017 • 2.0 Diesel • 170 KM",
    year: 2017, engine: "2.0 Diesel", power: "170 KM", mileage: "110 000 km", price: "39 900 zł",
    equipment: ["Nawigacja", "Tempomat", "Podgrzewane fotele"], images: ["images/opel1.jpg", "images/opel2.jpg", "images/opel3.jpg"]
  },
  "skoda": {
    name: "Skoda Octavia", summary: "2019 • 1.6 TDI • 115 KM",
    year: 2019, engine: "1.6 TDI", power: "115 KM", mileage: "70 000 km", price: "55 000 zł",
    equipment: ["Bluetooth", "ESP", "Isofix"], images: ["images/skoda1.jpg", "images/skoda2.jpg", "images/skoda3.jpg"]
  },
  "mazda": {
    name: "Mazda 6", summary: "2018 • 2.0 Benzyna • 165 KM",
    year: 2018, engine: "2.0 Benzyna", power: "165 KM", mileage: "90 000 km", price: "57 000 zł",
    equipment: ["Klimatyzacja", "Nawigacja", "Tempomat"], images: ["images/mazda1.jpg", "images/mazda2.jpg", "images/mazda3.jpg"]
  },
  "toyota": {
    name: "Toyota Corolla", summary: "2020 • 1.8 Hybrid • 122 KM",
    year: 2020, engine: "1.8 Hybrid", power: "122 KM", mileage: "50 000 km", price: "69 000 zł",
    equipment: ["Hybrid", "Klimatyzacja", "Bluetooth"], images: ["images/toyota1.jpg", "images/toyota2.jpg", "images/toyota3.jpg"]
  },
  "honda": {
    name: "Honda Civic", summary: "2019 • 1.5 Turbo • 182 KM",
    year: 2019, engine: "1.5 Turbo", power: "182 KM", mileage: "60 000 km", price: "59 500 zł",
    equipment: ["Klimatyzacja", "Skórzana tapicerka", "Tempomat"], images: ["images/honda1.jpg", "images/honda2.jpg", "images/honda3.jpg"]
  },
  "renault": {
    name: "Renault Megane", summary: "2018 • 1.5 dCi • 110 KM",
    year: 2018, engine: "1.5 dCi", power: "110 KM", mileage: "100 000 km", price: "29 900 zł",
    equipment: ["Klimatyzacja", "Radio", "ESP"], images: ["images/renault1.jpg", "images/renault2.jpg", "images/renault3.jpg"]
  },
  "peugeot": {
    name: "Peugeot 508", summary: "2017 • 2.0 HDi • 150 KM",
    year: 2017, engine: "2.0 HDi", power: "150 KM", mileage: "125 000 km", price: "35 900 zł",
    equipment: ["Nawigacja", "Klimatyzacja", "Tempomat"], images: ["images/peugeot1.jpg", "images/peugeot2.jpg", "images/peugeot3.jpg"]
  },
  "kia": {
    name: "Kia Optima", summary: "2018 • 1.7 CRDi • 141 KM",
    year: 2018, engine: "1.7 CRDi", power: "141 KM", mileage: "105 000 km", price: "33 500 zł",
    equipment: ["Klimatyzacja", "Bluetooth", "ESP"], images: ["images/kia1.jpg", "images/kia2.jpg", "images/kia3.jpg"]
  },
  "hyundai": {
    name: "Hyundai i30", summary: "2019 • 1.4 T-GDI • 140 KM",
    year: 2019, engine: "1.4 T-GDI", power: "140 KM", mileage: "80 000 km", price: "41 000 zł",
    equipment: ["Klimatyzacja", "Nawigacja", "ESP"], images: ["images/hyundai1.jpg", "images/hyundai2.jpg", "images/hyundai3.jpg"]
  },
  "volvo": {
    name: "Volvo V60", summary: "2018 • 2.0 D4 • 190 KM",
    year: 2018, engine: "2.0 D4", power: "190 KM", mileage: "95 000 km", price: "86 000 zł",
    equipment: ["Skórzana tapicerka", "Nawigacja", "Tempomat"], images: ["images/volvo1.jpg", "images/volvo2.jpg", "images/volvo3.jpg"]
  },
  "seat": {
    name: "Seat Leon", summary: "2019 • 1.5 TSI • 150 KM",
    year: 2019, engine: "1.5 TSI", power: "150 KM", mileage: "75 000 km", price: "38 900 zł",
    equipment: ["Klimatyzacja", "Bluetooth", "ESP"], images: ["images/seat1.jpg", "images/seat2.jpg", "images/seat3.jpg"]
  },
  "alfa": {
    name: "Alfa Romeo Giulia", summary: "2017 • 2.0 Benzyna • 200 KM",
    year: 2017, engine: "2.0 Benzyna", power: "200 KM", mileage: "115 000 km", price: "79 000 zł",
    equipment: ["Sportowe zawieszenie", "Skórzana tapicerka"], images: ["images/alfa1.jpg", "images/alfa2.jpg", "images/alfa3.jpg"]
  },
  "nissan": {
    name: "Nissan Qashqai", summary: "2018 • 1.6 dCi • 130 KM",
    year: 2018, engine: "1.6 dCi", power: "130 KM", mileage: "100 000 km", price: "44 500 zł",
    equipment: ["Klimatyzacja", "Tempomat", "Park Assist"], images: ["images/nissan1.jpg", "images/nissan2.jpg", "images/nissan3.jpg"]
  },
  "mitsubishi": {
    name: "Mitsubishi ASX", summary: "2019 • 2.0 Benzyna • 150 KM",
    year: 2019, engine: "2.0 Benzyna", power: "150 KM", mileage: "70 000 km", price: "36 900 zł",
    equipment: ["Napęd 4x4", "Klimatyzacja"], images: ["images/mitsubishi1.jpg", "images/mitsubishi2.jpg", "images/mitsubishi3.jpg"]
  },
  "suzuki": {
    name: "Suzuki Vitara", summary: "2020 • 1.4 BoosterJet • 140 KM",
    year: 2020, engine: "1.4 BoosterJet", power: "140 KM", mileage: "45 000 km", price: "49 000 zł",
    equipment: ["Napęd 4x4", "Klimatyzacja", "Tempomat"], images: ["images/suzuki1.jpg", "images/suzuki2.jpg", "images/suzuki3.jpg"]
  }
};

// ========== UTIL: fade-in on scroll ==========
function observeFadeUp() {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('in');
    });
  }, { threshold: 0.15 });
  els.forEach(el => obs.observe(el));
}

// ========== RENDER: featured on index ==========
function renderFeatured() {
  const container = document.getElementById('featured-grid');
  if (!container) return;
  // wybierz 3 losowe unikalne slugi
  const slugs = Object.keys(carsData);
  const chosen = [];
  while (chosen.length < 3 && slugs.length) {
    const i = Math.floor(Math.random() * slugs.length);
    chosen.push(slugs.splice(i, 1)[0]);
  }
  container.innerHTML = '';
  chosen.forEach(slug => {
    const c = carsData[slug];
    const div = document.createElement('div');
    div.className = 'car-card card fade-up';
    div.innerHTML = `
      <img src="${c.images[0]}" alt="${c.name}">
      <h3>${c.name}</h3>
      <p class="muted">${c.summary} • ${c.mileage}</p>
      <div style="margin-top:8px; display:flex; gap:10px; align-items:center;">
        <a class="details-btn" href="car.html?id=${slug}">Szczegóły</a>
        <span class="muted" style="margin-left:auto;font-weight:700">${c.price}</span>
      </div>
    `;
    container.appendChild(div);
  });
}

// ========== RENDER: oferta (lista wszystkich) ==========
function renderOffer() {
  const container = document.getElementById('offer-grid');
  if (!container) return;
  container.innerHTML = '';
  Object.keys(carsData).forEach(slug => {
    const c = carsData[slug];
    const div = document.createElement('div');
    div.className = 'car-card fade-up';
    div.innerHTML = `
      <img src="${c.images[0]}" alt="${c.name}">
      <h3>${c.name}</h3>
      <p class="muted">${c.summary} • ${c.mileage}</p>
      <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
        <a class="details-btn" href="car.html?id=${slug}">Szczegóły</a>
        <span class="muted" style="margin-left:auto;font-weight:700">${c.price}</span>
      </div>
    `;
    container.appendChild(div);
  });
}

// ========== RENDER: car.html dynamic ==========
function renderCarPage() {
  const nameEl = document.getElementById('car-name');
  if (!nameEl) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id || !carsData[id]) {
    nameEl.textContent = 'Nie znaleziono samochodu';
    return;
  }
  const car = carsData[id];
  document.getElementById('car-name').textContent = car.name;
  document.getElementById('car-summary').textContent = car.summary + ' • ' + car.mileage;
  document.getElementById('car-price').textContent = car.price;

  // main image
  const mainImg = document.getElementById('main-img');
  mainImg.src = car.images[0];

  // thumbs
  const thumbs = document.getElementById('thumbs');
  thumbs.innerHTML = '';
  car.images.forEach(src => {
    const t = document.createElement('img');
    t.src = src;
    t.alt = car.name;
    t.addEventListener('click', () => { mainImg.src = src; });
    thumbs.appendChild(t);
  });

  // info list
  const infoUl = document.getElementById('car-info');
  infoUl.innerHTML = '';
  const infoRows = [
    ['Rok', car.year],
    ['Silnik', car.engine],
    ['Moc', car.power],
    ['Przebieg', car.mileage],
  ];
  infoRows.forEach(([k, v]) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${k}:</strong> ${v}`;
    infoUl.appendChild(li);
  });

  // equipment
  const eq = document.getElementById('car-equipment');
  eq.innerHTML = '';
  car.equipment.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    eq.appendChild(li);
  });

  // inquiry form handler
  const inq = document.getElementById('car-inquiry');
  if (inq) {
    inq.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Dziękujemy! Twoje zapytanie zostało wysłane (demo).');
      this.reset();
    });
  }
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  renderOffer();
  renderCarPage();
  observeFadeUp();

  // small UX nicety: highlight current nav
  document.querySelectorAll('.nav-list a').forEach(a => {
    if (location.pathname.endsWith(a.getAttribute('href'))) a.classList.add('active-nav');
  });
});