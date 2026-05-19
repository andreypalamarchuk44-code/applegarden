<template>
    <div class="lead">

    <h1>OUR APPLES</h1>

    <img src="/img/apples-3.jpg" alt="apples">

    <div class="info">
    <h5>Хто ми?</h5> 
    </div>

    <div class="describe">

            Ми — сімейний сад, де кожне яблуко вирощується з любов’ю та турботою. Наші фрукти дозрівають під сонцем у природних умовах, щоб дарувати вам справжній смак свіжості та користь природи.

             Ми дбайливо доглядаємо за деревами, відбираємо лише найкращі плоди та доставляємо їх свіжими прямо до вашого столу. У нашому саду поєднуються натуральність, якість і традиції справжнього фермерського вирощування.

            Соковиті, ароматні та хрусткі яблука — це не просто фрукти, а частинка природи, яку ми хочемо подарувати кожному покупцю. Обираючи нас, ви обираєте свіжість, натуральний смак та якість без компромісів.
        </div>
          <div class="slider">

    <div class="slide">
      <img :src="slides[currentSlide]" alt="apple">
    </div>

    <button class="prev" @click="prevSlide">
      ←
    </button>

    <button class="next" @click="nextSlide">
      →
    </button>

    <div class="dots">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: currentSlide === index }"
        @click="currentSlide = index"
      ></span>
    </div>

  </div>

<RouterLink to="/about">
  <button>Інфо про нас</button>
</RouterLink>
      
</div>
  <div class="sad">
    <h1>ЧОМУ САМЕ МИ</h1>
    <p>Ми вирощуємо яблука у власному сімейному саду, дбаючи про кожне дерево від першого цвітіння до збору врожаю. Наші яблука — свіжі, соковиті та натуральні, без тривалого зберігання і зайвої обробки.
Ми поєднуємо любов до садівництва, якісний догляд та чесний підхід, щоб ви отримували справжній смак домашніх яблук.
Яблука — це не лише смачний фрукт, а й джерело вітамінів, природної енергії та користі для організму. Вони містять корисні мікроелементи, підтримують імунітет та чудово підходять для щоденного раціону всієї родини.</p>  
</div>
<div class="illustrations">
  <div class="card">
      <h3>1</h3>
      <img src="/img/sad-1.jpg" alt="sad">
      <h2>Натуральне вирощування</h2> 
    <p>Смак, який створює природа
Наш сад вирощується з турботою про якість плодів та природний баланс. Ми приділяємо увагу кожному етапу догляду, щоб яблука залишались ароматними, соковитими та корисними.</p>
</div>
<div class="card">
      <h3>2</h3>
      <img src="/img/sad-2.jpg" alt="sad">
      <h2>Свіжий збір</h2> 
    <p>Яблука прямо з саду
Ми збираємо врожай у сезон та швидко доставляємо яблука покупцям. Завдяки цьому плоди зберігають свіжість, природний аромат і насичений смак.
Свіжі яблука містять більше корисних речовин, природної соковитості та вітамінів, які роблять їх чудовим вибором для здорового харчування.</p>
</div>

  <div class="card">
      <h3>3</h3>
      <img src="/img/sad-3.jpg" alt="sad">
      <h2>Надійність та співпраця на роки</h2>
    <p>Ми займаємось масштабним вирощуванням яблук, поєднуючи сучасний підхід, стабільну якість та відповідальне виробництво. Для нас важлива довіра клієнтів і довготривала співпраця, тому ми завжди прагнемо забезпечити якісний продукт та високий рівень сервісу.</p>
</div>
</div>


</template> 

<script>
export default {
  data() {
    return {
      currentSlide: 0,

      slides: [
        '/img/apple8.jpg',
        '/img/apple8.jpg',
        '/img/apple12.jpg',
        '/img/apple13.jpg',
        '/img/apple14.jpg',
        '/img/apple15.jpg',
    
      ]
    }
  },

  methods: {
    nextSlide() {
      if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide++
      } else {
        this.currentSlide = 0
      }
    },
    

    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--
      } else {
        this.currentSlide = this.slides.length - 1
      }
  },
  
    scrollToInfo() {
      window.scrollTo({
        top: 900,
        behavior: 'smooth'
      })
    }
  },
  mounted() {
  this.sliderInterval = setInterval(() => {
    this.nextSlide()
  }, 4000)
},

beforeUnmount() {
  clearInterval(this.sliderInterval)
}

}



</script>


<style lang="scss" scoped>

.lead {
  padding: 20px;

h1 {
    margin-top: 100px;
  text-align: center;
   font-size: clamp(2.5rem, 8vw, 5rem);
}
}

img {
    width: 100%;
  max-width: 900px;
  height: auto;
  display: block;
  margin: 20px auto;
  border-radius: 20px; 
    
}
.seal {
    width: 100px;
    height: 50px;

}
.info {
   text-align: center;
   margin-top: 30px;
   font-size: 1.2em;
  font-family: "Montserrat", sans-serif;
}
.describe {
  text-align: center;
  margin-top: 20px;
  font-size: 1.7em;
 font-family: "Montserrat", sans-serif;

}
button {
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background: yellow;
  cursor: pointer;
  display: block;
  margin: 30px auto;
  transition: 0.8s;

  &:hover {
    background: red;
    transform: scale(1.05);
  }
}
.slider {
  position: relative;
  width: 74%;
  max-width: 1100px;
  margin: 80px auto;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: 0 10px 40px rgba(122, 10, 10, 0.87);
  background: rgb(42, 49, 42);
}

.slide img {
  width: 100%;
  height: 550px;
  object-fit: cover;
  display: block;
  // transition: 0.5s;
 transition: opacity 0.5s ease;
}

/* Кнопки */

.prev,
.next {
  position: absolute;
  top: 40%;
  transform: translateY(-50%);

  width: 60px;
  height: 60px;

  border: none;
  border-radius: 50%;

  background: rgba(32, 30, 30, 0.3);
  backdrop-filter: blur(10px);

  color: rgb(228, 215, 215);
  font-size: 26px;

  cursor: pointer;
  transition: 0.3s;

  z-index: 10;
}

.prev:hover,
.next:hover {
  transform: translateY(-50%) scale(1.1);
  background: rgba(27, 26, 26, 0.5);
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}

/* Кружечки */

.dots {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  gap: 12px;
}

.dots span {
  width: 14px;
  height: 14px;

  border-radius: 50%;
  background: rgba(255,255,255,0.5);

  cursor: pointer;
  transition: 0.3s;
}

.dots span:hover {
  transform: scale(1.2);
}

.dots .active {
  background: white;
  transform: scale(1.3);
}
.sad {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  margin-top: 30px;

  p {
    margin-top: 30px;
    font-size: 1.7em;
  }
}
.illustrations {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
   gap: 40px;
   margin-top: 80px;
   padding: 20px;
} 
 
  .card {
      background: #31312928;

  border-radius: 25px;

  padding: 25px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0);

  transition: 0.4s;

  text-align: center;
  }
.card:hover {
  transform: translateY(-10px);
}
  
 .card h3 {
   width: 45px;
  height: 45px;

  background: #271414;

  color: white;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto 20px;

  font-size: 1.2em;
   
  }
  .card img {
     width: 100%;
    height: 260px;

  object-fit: cover;

  border-radius: 20px;

  margin-bottom: 20px;
 
  }
.card h2 {
    font-size: 1.6em;
  margin-bottom: 15px;

  color: #2b2b2b;
 
}
.card p {
   font-size: 1.05em;

  line-height: 1.7;

  color: #555;
//   margin-top: 10px;
//  font-size: 1.2em;
}




/* Адаптив */

@media (max-width: 768px) {

  .slide img {
    height: 350px;
  }

  .prev,
  .next {
    width: 45px;
    height: 45px;
    font-size: 18px;
  }
}
</style>



