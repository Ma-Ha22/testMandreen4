 // نجلب كل الكروت من الحاوية المخفية كـ array
  const allCards = Array.from(document.querySelectorAll('#allCards .review-card'));
  const visible = document.getElementById('visible');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
let cardsToShow = window.innerWidth <= 877 ? 1 : 2;
  if (!allCards.length) {
    visible.innerHTML = '<div style="padding:20px">لا يوجد كروت للعرض</div>';
  } else {
    let start = 0; // بداية المصفوفة

    // دالة تعرض كارتين ابتداءً من index start
    function render() {
      visible.innerHTML = '';
      // نعرض دائماً عنصران: start و start+1 (مع التدوير باستخدام modulo)
      for (let i = 0; i < cardsToShow; i++) {
        const idx = (start + i) % allCards.length;
        const clone = allCards[idx].cloneNode(true); // نعمل clone عشان ما نغير الأصل
        visible.appendChild(clone);
      }
    }

    // تأثير بصري بسيط عند التغيير
    function doSlide(step) {
      visible.classList.remove('show');
  visible.classList.add('hidden');
      setTimeout(() => {
        // نحدث مؤشر البداية بمقدار step (مثلاً +2 أو -2) مع تدوير دائري
        start = (start + step + allCards.length) % allCards.length;
        render();
        // نعيد الظهور
        requestAnimationFrame(() => {
          // نستخدم requestAnimationFrame لضمان تطبيق الـ CSS transition
         visible.classList.remove('hidden');
    visible.classList.add('show');
        });
      }, 180); // مدة تطابق الـ transition في CSS
    }

    // أحداث الأزرار: تنقل بمقدار كارتين (2)
    nextBtn.addEventListener('click', () => {
      doSlide(cardsToShow);
      nextBtn.classList.add("activBtn");
      prevBtn.classList.remove("activBtn");
    });
    prevBtn.addEventListener('click', () => {
      doSlide(-cardsToShow);
      prevBtn.classList.add("activBtn");
      nextBtn.classList.remove("activBtn");
    });
window.addEventListener('resize', () => {
  const newCount = window.innerWidth <= 877 ? 1 : 2;
  if (newCount !== cardsToShow) {
    cardsToShow = newCount;
    render();
  }
});
    // عرض أول مرتين
    render();
  }





  // product section
  const mainImg = document.getElementById("main-img");
  const thumbs = document.querySelectorAll(".thumbs img");

  thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
      // تغيير الصورة الرئيسية
      mainImg.src = thumb.src;

      // إزالة active من كل الصور
      thumbs.forEach(t => t.classList.remove("active"));
      
      // إضافة active للصورة اللي اخترتها
      thumb.classList.add("active");
    });
  });
  // end
  // qunty
    function increment(el) {
    el.previousElementSibling.stepUp();
  }
  function decrement(el) {
    el.nextElementSibling.stepDown();
  }
  // end qunty