/* ==========================================================
   CONFIG — update these to change contact details site-wide
   ========================================================== */
const SALON_WHATSAPP_HER = "919428899576"; // no + no spaces — For Her bookings
const SALON_WHATSAPP_HIM = "919913411102"; // no + no spaces — For Him bookings
const SALON_NAME = "Perfect Hair & Beauty Saloon";

// Leave this empty until you deploy the backend (see backend/README.md).
// Once deployed, set it to your backend's URL, e.g.:
// const API_BASE_URL = "https://perfect-salon-backend-production.up.railway.app";
const API_BASE_URL = "";

/* ==========================================================
   SERVICE DATA
   ========================================================== */
const servicesHer = [
  {id:"haircut-her", icon:"✂️", name:"Signature Haircut", price:"₹499+", duration:"45–60 min",
    hook:"Precision cuts crafted for your face shape.",
    desc:"A consultation-first haircut where your stylist studies your face shape, hair texture and lifestyle before a single snip. Finished with a blow-dry style.",
    benefits:["Personalised consultation with a senior stylist","Cut tailored to face shape & hair texture","Complimentary wash and blow-dry finish","Styling tips for at-home maintenance"]},
  {id:"bridal", icon:"👰", name:"Bridal Makeup", price:"₹7,999+", duration:"2.5–3 hrs",
    hook:"HD bridal looks with an all-day luminous glow.",
    desc:"A full bridal package with HD or airbrush makeup, hairstyling and draping, designed to hold through ceremonies, photos and celebrations.",
    benefits:["Trial session available before the big day","Waterproof, long-wear HD/airbrush formulas","Matching hairstyle & dupatta/veil draping","Touch-up kit handed over on the day"]},
  {id:"hairspa", icon:"💆‍♀️", name:"Hair Spa", price:"₹999+", duration:"50 min",
    hook:"Deep nourishment for smooth, lustrous hair.",
    desc:"A restorative spa ritual with steam, scalp massage and deep-conditioning masks that repair dryness and frizz from the inside out.",
    benefits:["Relieves dryness, frizz & split ends","Relaxing scalp massage improves circulation","Boosts natural shine and softness","Recommended every 3–4 weeks"]},
  {id:"bodyspa", icon:"🛁", name:"Body Spa", price:"₹1,499+", duration:"60–75 min",
    hook:"Luxury body rituals to relax and rejuvenate.",
    desc:"A full-body pampering ritual combining scrub, massage and hydration to leave skin soft, radiant and completely relaxed.",
    benefits:["De-tan & exfoliating body scrub","Full-body massage to release tension","Deep hydration for soft, even-toned skin","A calm, spa-like environment to unwind"]},
  {id:"hairstyling", icon:"💇‍♀️", name:"Hair Styling", price:"₹799+", duration:"30–45 min",
    hook:"Statement styles for every occasion.",
    desc:"Blow-dry, curls, updos or sleek looks — styled to match your outfit and the occasion, from everyday to festive.",
    benefits:["Ideal for parties, festivals & events","Long-lasting hold with premium products","Styles matched to outfit & occasion","Quick touch-up options available"]},
  {id:"facial", icon:"✨", name:"Facial", price:"₹999+", duration:"45–60 min",
    hook:"Glow-restoring facials with premium skincare.",
    desc:"A skin-specific facial using premium products to cleanse, exfoliate and hydrate, leaving your complexion visibly brighter.",
    benefits:["Deep cleansing & gentle exfoliation","Targets dullness, tan & uneven tone","Hydrating mask suited to your skin type","Instant glow, visible after one session"]},
  {id:"smoothening", icon:"🌊", name:"Hair Smoothening", price:"₹3,499+", duration:"2–3 hrs",
    hook:"Silky-smooth, frizz-free hair that lasts months.",
    desc:"A smoothening treatment that eliminates frizz and flyaways, leaving hair sleek and manageable for months.",
    benefits:["Frizz-free, salon-smooth finish","Results last 3–5 months with care","Reduces daily styling time","Suitable for most hair types"]},
  {id:"nanoplastia", icon:"🧴", name:"Nano Plastia", price:"₹4,999+", duration:"2.5–3 hrs",
    hook:"Next-gen formaldehyde-free hair botox.",
    desc:"A gentler alternative to keratin that nourishes and repairs hair fibres, adding shine and softness without harsh chemicals.",
    benefits:["Formaldehyde-free formula","Repairs & nourishes damaged hair","Adds noticeable shine and softness","Gentler than traditional smoothening"]},
  {id:"straightening", icon:"➖", name:"Hair Straightening", price:"₹3,999+", duration:"2.5–3 hrs",
    hook:"Pin-straight, sleek hair with long-lasting results.",
    desc:"Permanent straightening for hair that stays sleek and manageable, cutting your daily styling routine dramatically.",
    benefits:["Long-lasting pin-straight results","Reduces frizz & everyday styling time","Includes protective conditioning treatment","Suitable touch-ups every few months"]},
  {id:"haircolor-her", icon:"🎨", name:"Hair Color", price:"₹1,499+", duration:"1.5–3 hrs",
    hook:"Global colors, highlights, balayage & creative tones.",
    desc:"From global colour to balayage and creative tones, using ammonia-friendly formulas that protect hair health.",
    benefits:["Global colour, highlights & balayage options","Grey coverage available","Gentle, hair-friendly colour formulas","Includes aftercare wash & conditioning"]},
  {id:"dtan-her", icon:"☀️", name:"D-Tan Treatment", price:"₹599+", duration:"30–40 min",
    hook:"Instant tan removal for bright, even-toned skin.",
    desc:"A targeted de-tanning treatment for face and body that instantly brightens sun-damaged, uneven skin.",
    benefits:["Removes tan from face, neck & hands","Evens out skin tone instantly","Refreshing, cooling application","Great before events or photos"]},
  {id:"waxing-her", icon:"🪒", name:"Waxing", price:"₹399+", duration:"20–60 min",
    hook:"Smooth, long-lasting hair removal.",
    desc:"Full or part-body waxing using quality wax for smooth, salon-clean results with minimal irritation.",
    benefits:["Smooth skin that lasts 3–4 weeks","Full-body & part-body options available","Low-irritation, skin-friendly wax","Fast, hygienic application"]},
  {id:"manicure", icon:"💅", name:"Manicure", price:"₹599+", duration:"40 min",
    hook:"Spa manicure for soft hands and polished nails.",
    desc:"A relaxing hand spa with exfoliation, massage and nail shaping, finished with polish of your choice.",
    benefits:["Softens & hydrates hands","Nail shaping and cuticle care","Relaxing hand & arm massage","Polish finish of your choice"]},
  {id:"pedicure", icon:"🦶", name:"Pedicure", price:"₹799+", duration:"50 min",
    hook:"Restorative foot spa for tired, hard-working feet.",
    desc:"A restorative foot spa with scrub, massage and callus care to leave feet soft, refreshed and pain-free.",
    benefits:["Removes dead skin & calluses","Relieves tired, aching feet","Deep hydration for soft heels","Finished with polish of your choice"]}
];

const servicesHim = [
  {id:"haircut-him", icon:"✂️", name:"Classic Haircut", price:"₹199+", duration:"30–40 min",
    hook:"Sharp, precise cuts styled to suit you.",
    desc:"A classic or trending men's haircut using clippers and scissors, finished with a wash and style to match your look.",
    benefits:["Cut tailored to your face shape","Choice of classic, fade or trending styles","Includes wash & finishing style","Quick service without compromising precision"]},
  {id:"beard", icon:"🧔", name:"Beard Grooming & Shave", price:"₹299+", duration:"30–45 min",
    hook:"Classic hot-towel shaves and sculpted beard styling.",
    desc:"Traditional hot-towel shave and precision beard shaping, leaving skin smooth and your beard sharply defined.",
    benefits:["Relaxing hot-towel treatment","Precision beard shaping & line-up","Soothes and softens skin post-shave","Beard oil finish included"]},
  {id:"hairspa-him", icon:"💆‍♂️", name:"Head Massage & Hair Spa", price:"₹499+", duration:"40 min",
    hook:"Stress-relief massage with deep hair nourishment.",
    desc:"A relaxing scalp massage paired with a deep-conditioning hair spa treatment, easing tension and restoring shine.",
    benefits:["Relieves stress and scalp tension","Deep conditioning for dry, damaged hair","Improves scalp circulation","Recommended every 3–4 weeks"]},
  {id:"haircolor-him", icon:"🎨", name:"Hair Color for Men", price:"₹899+", duration:"45–75 min",
    hook:"Natural-looking colour and grey coverage.",
    desc:"Subtle, natural-looking hair colour or full grey coverage using gentle, quick-processing formulas.",
    benefits:["Natural-looking grey coverage","Quick-processing, low-odour formulas","Global colour options available","Includes aftercare rinse"]},
  {id:"facial-him", icon:"✨", name:"Facial for Men", price:"₹699+", duration:"40–50 min",
    hook:"Deep-cleansing facials for tired, oily skin.",
    desc:"A facial designed for men's skin — deep cleansing, de-tan and hydration to fight dullness and sun damage.",
    benefits:["Deep-cleans pores & controls oiliness","Removes tan & evens skin tone","Hydrates without feeling heavy","Leaves skin visibly refreshed"]},
  {id:"dtan-him", icon:"☀️", name:"D-Tan for Men", price:"₹499+", duration:"30 min",
    hook:"Fast tan removal for face, neck & hands.",
    desc:"A quick de-tanning treatment that brightens sun-exposed skin, ideal before events or after outdoor work.",
    benefits:["Brightens sun-damaged skin fast","Focuses on face, neck & hands","Refreshing, non-greasy formula","Great pre-event quick fix"]},
  {id:"waxing-him", icon:"🪒", name:"Waxing for Men", price:"₹349+", duration:"20–50 min",
    hook:"Clean, long-lasting hair removal for men.",
    desc:"Full or part-body waxing for men who prefer smooth, low-maintenance skin over regular shaving.",
    benefits:["Smooth results lasting 3–4 weeks","Full-body & part-body options","Reduces ingrown hairs over time","Hygienic, quick application"]},
  {id:"mani-pedi-him", icon:"🖐️", name:"Manicure & Pedicure", price:"₹699+", duration:"60 min",
    hook:"Grooming for hands and feet, done properly.",
    desc:"A no-fuss grooming session for hands and feet — nail care, callus removal and a light massage, no polish needed.",
    benefits:["Neat, well-maintained nails","Removes calluses & rough skin","Relaxing hand & foot massage","Quick, no-nonsense service"]},
  {id:"kids", icon:"🧒", name:"Kids' Haircut", price:"₹149+", duration:"20–30 min",
    hook:"Patient, friendly haircuts for the little ones.",
    desc:"A quick, gentle haircut experience for children in a friendly, patient environment.",
    benefits:["Patient stylists experienced with kids","Fast, fuss-free service","Fun, welcoming environment","Neat finish parents love"]},
  {id:"groom", icon:"🤵", name:"Groom's Styling Package", price:"₹2,999+", duration:"1.5–2 hrs",
    hook:"Complete grooming for the big day.",
    desc:"A full pre-wedding package covering haircut, beard sculpting, facial and skin prep so the groom looks his sharpest.",
    benefits:["Haircut, beard shaping & facial in one visit","Skin prep for photos & video","Priority scheduling for wedding dates","Complimentary touch-up kit"]}
];

/* ==========================================================
   GALLERY DATA
   ========================================================== */
const galleryHer = [
  {img:"https://images.unsplash.com/photo-1610047614301-13c63f00c032?auto=format&fit=crop&w=700&q=80", caption:"Engagement Bridal"},
  {img:"https://images.unsplash.com/photo-1684868268327-7e5590bcfbd6?auto=format&fit=crop&w=700&q=80", caption:"Bridal Garba Look"},
  {img:"https://images.unsplash.com/photo-1600685890506-593fdf55949b?auto=format&fit=crop&w=700&q=80", caption:"Bridal Makeup"},
  {img:"https://images.unsplash.com/photo-1587271315307-eaebc181c749?auto=format&fit=crop&w=700&q=80", caption:"Sangeet Look"},
  {img:"https://images.unsplash.com/photo-1631549424057-403e75d68e2f?auto=format&fit=crop&w=700&q=80", caption:"Bridal Look"},
  {img:"https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=700&q=80", caption:"Signature Layers"},
  {img:"https://images.unsplash.com/photo-1700760934268-8aa0ef52ce0a?auto=format&fit=crop&w=700&q=80", caption:"Butterfly Cut"},
  {img:"https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=700&q=80", caption:"Square Layers"}
];
const galleryHim = [
  {img:"https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=80", caption:"Barber Chair Precision"},
  {img:"https://images.unsplash.com/photo-1647140655214-e4a2d914971f?auto=format&fit=crop&w=700&q=80", caption:"Scissor Cut Styling"},
  {img:"https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?auto=format&fit=crop&w=700&q=80", caption:"Sharp Fade"},
  {img:"https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=700&q=80", caption:"Beard Line-Up"},
  {img:"https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=700&q=80", caption:"Clean Clipper Work"},
  {img:"https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=700&q=80", caption:"Classic Cut"},
  {img:"https://images.unsplash.com/photo-1635273051839-003bf06a8751?auto=format&fit=crop&w=700&q=80", caption:"Detail Finishing"},
  {img:"https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&w=700&q=80", caption:"Hot-Towel Shave"}
];

/* ==========================================================
   RENDERING
   ========================================================== */
function renderServiceGrid(containerId, list){
  const el = document.getElementById(containerId);
  el.innerHTML = list.map(s => `
    <button class="service-card" data-service-id="${s.id}">
      <span class="service-icon">${s.icon}</span>
      <h3>${s.name}</h3>
      <span class="service-price">${s.price}</span>
      <p class="hook">${s.hook}</p>
      <span class="service-explore">Explore <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </button>
  `).join("");
}

function renderChecklist(containerId, list){
  const el = document.getElementById(containerId);
  el.innerHTML = list.map(s => `
    <label>
      <input type="checkbox" value="${s.name}" data-id="${s.id}" data-price="${s.price}">
      <span class="chk-name">${s.name}</span>
      <span class="chk-price">${s.price}</span>
    </label>
  `).join("");
}

function renderGallery(containerId, list){
  const el = document.getElementById(containerId);
  el.innerHTML = list.map(g => `
    <figure>
      <img src="${g.img}" alt="${g.caption}" loading="lazy">
      <figcaption>${g.caption}</figcaption>
    </figure>
  `).join("");
}

renderServiceGrid("grid-her", servicesHer);
renderServiceGrid("grid-him", servicesHim);
renderChecklist("service-checks-her", servicesHer);
renderChecklist("service-checks-him", servicesHim);
renderGallery("gallery-her", galleryHer);
renderGallery("gallery-him", galleryHim);

/* ==========================================================
   CATEGORY SWITCHING
   ========================================================== */
let currentCategory = "her";

function showCategory(cat){
  currentCategory = cat;
  document.getElementById("services-her").classList.toggle("hidden", cat !== "her");
  document.getElementById("services-him").classList.toggle("hidden", cat !== "him");
  setFormCategory(cat);
  const target = document.getElementById(cat === "her" ? "services-her" : "services-him");
  target.scrollIntoView({behavior:"smooth", block:"start"});
}

function showGallery(cat){
  document.getElementById("gallery-her").classList.toggle("hidden", cat !== "her");
  document.getElementById("gallery-him").classList.toggle("hidden", cat !== "him");
  document.getElementById("gal-btn-her").classList.toggle("active", cat === "her");
  document.getElementById("gal-btn-him").classList.toggle("active", cat === "him");
}

/* ==========================================================
   MODAL
   ========================================================== */
let activeService = null;

function findService(id){
  return servicesHer.find(s => s.id === id) || servicesHim.find(s => s.id === id);
}

function openModal(id){
  const s = findService(id);
  if(!s) return;
  activeService = s;
  document.getElementById("modal-icon").textContent = s.icon;
  document.getElementById("modal-title").textContent = s.name;
  document.getElementById("modal-price").textContent = s.price;
  document.getElementById("modal-duration").textContent = "Approx. duration: " + s.duration;
  document.getElementById("modal-desc").textContent = s.desc;
  document.getElementById("modal-benefits").innerHTML = s.benefits.map(b => `<li>${b}</li>`).join("");
  document.getElementById("modal").classList.add("open");
  document.body.classList.add("modal-open");
}

function closeModal(){
  document.getElementById("modal").classList.remove("open");
  document.body.classList.remove("modal-open");
}

document.getElementById("modal").addEventListener("click", (e) => {
  if(e.target.id === "modal") closeModal();
});
document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeModal(); });

document.addEventListener("click", (event) => {
  if(!(event.target instanceof Element)) return;

  const categoryControl = event.target.closest("[data-category]");
  if(categoryControl){
    event.preventDefault();
    showCategory(categoryControl.dataset.category);
    return;
  }

  const galleryControl = event.target.closest("[data-gallery]");
  if(galleryControl){
    showGallery(galleryControl.dataset.gallery);
    return;
  }

  const formCategoryControl = event.target.closest(".gender-toggle [data-g]");
  if(formCategoryControl){
    setFormCategory(formCategoryControl.dataset.g);
    return;
  }

  const serviceCard = event.target.closest("[data-service-id]");
  if(serviceCard){
    openModal(serviceCard.dataset.serviceId);
    return;
  }

  const actionControl = event.target.closest("[data-action]");
  if(actionControl?.dataset.action === "close-modal") closeModal();
  if(actionControl?.dataset.action === "book-modal") bookFromModal();
});

document.getElementById("booking-form").addEventListener("submit", submitBooking);

function bookFromModal(){
  if(!activeService) return;
  const isHer = servicesHer.includes(activeService);
  setFormCategory(isHer ? "her" : "him");
  closeModal();
  document.getElementById("booking").scrollIntoView({behavior:"smooth"});
  setTimeout(() => {
    const checksId = isHer ? "service-checks-her" : "service-checks-him";
    const box = document.querySelector(`#${checksId} input[data-id="${activeService.id}"]`);
    if(box) box.checked = true;
  }, 350);
}

/* ==========================================================
   BOOKING FORM
   ========================================================== */
function setFormCategory(cat){
  currentCategory = cat;
  document.querySelectorAll(".gender-toggle button").forEach(b => {
    b.classList.toggle("active", b.dataset.g === cat);
  });
  document.getElementById("service-checks-her").classList.toggle("hidden", cat !== "her");
  document.getElementById("service-checks-him").classList.toggle("hidden", cat !== "him");
}

function submitBooking(e){
  e.preventDefault();
  const name = document.getElementById("f-name").value.trim();
  const phone = document.getElementById("f-phone").value.trim();
  const email = document.getElementById("f-email").value.trim();
  const date = document.getElementById("f-date").value;
  const timeHour = document.getElementById("f-time-hour").value;
  const timeMinute = document.getElementById("f-time-minute").value;
  const timeAmPm = document.getElementById("f-time-ampm").value;
  const time = `${timeHour}:${timeMinute} ${timeAmPm}`;
  const notes = document.getElementById("f-notes").value.trim();

  const checksId = currentCategory === "her" ? "service-checks-her" : "service-checks-him";
  const checkedBoxes = Array.from(document.querySelectorAll(`#${checksId} input:checked`));
  const checked = checkedBoxes.map(i => i.value);
  const checkedForApi = checkedBoxes.map(i => ({ name: i.value, price: i.dataset.price || "" }));

  const phoneDigits = phone.replace(/[^0-9]/g, "");

  if(!name || !date || !time || checked.length === 0){
    alert("Please fill in your name, date, time and select at least one service.");
    return false;
  }

  if(!phone){
    alert("Mobile number is required to book an appointment.");
    document.getElementById("f-phone").focus();
    return false;
  }

  if(phoneDigits.length < 10){
    alert("Please enter a valid mobile number (at least 10 digits).");
    document.getElementById("f-phone").focus();
    return false;
  }

  const categoryLabel = currentCategory === "her" ? "For Her" : "For Him";
  const destinationNumber = currentCategory === "her" ? SALON_WHATSAPP_HER : SALON_WHATSAPP_HIM;
  const lines = [
    `*New Appointment Request — ${SALON_NAME}*`,
    ``,
    `*Category:* ${categoryLabel}`,
    `*Name:* ${name}`,
    `*Phone:* ${phone}`,
    email ? `*Email:* ${email}` : null,
    `*Services:* ${checked.join(", ")}`,
    `*Preferred Date:* ${date}`,
    `*Preferred Time:* ${time}`,
    notes ? `*Notes:* ${notes}` : null,
  ].filter(Boolean).join("\n");

  const url = `https://wa.me/${destinationNumber}?text=${encodeURIComponent(lines)}`;
  window.open(url, "_blank");

  // Best-effort: also record this booking in the admin backend for analytics.
  // Does nothing until API_BASE_URL is set (see backend/README.md).
  if(API_BASE_URL){
    fetch(`${API_BASE_URL}/api/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category: currentCategory,
        name, phone, email,
        services: checkedForApi,
        preferred_date: date,
        preferred_time: time,
        notes
      })
    }).then(res => {
      if(!res.ok) console.warn("Booking WhatsApp message sent, but saving to admin backend failed:", res.status);
    }).catch(err => {
      console.warn("Booking WhatsApp message sent, but could not reach admin backend:", err);
    });
  } else {
    console.warn("API_BASE_URL is not set — this booking was sent via WhatsApp but will NOT appear in the admin panel. See backend/README.md.");
  }

  const successEl = document.getElementById("form-success");
  successEl.classList.add("show");
  setTimeout(() => successEl.classList.remove("show"), 8000);
  return false;
}

/* default form state */
setFormCategory("her");
