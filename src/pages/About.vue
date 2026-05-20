<template>  
  <div class="about">
    <div class="container">
        <button class="back-btn" @click="goHome">
      <i class="fa-solid fa-angles-left"></i>
    </button>

    <!-- HERO -->
    <section class="hero">
      <div class="overlay">
        <h1>Наш яблуневий сад</h1>

        <p>
          Натуральні яблука, вирощені з любов’ю
          та турботою про кожне дерево 🍎
        </p>
      </div>
    </section>
    

    <!-- ПРО НАС -->
    <section class="about-info">

      <div class="text">
        <h2>Наше виробництво</h2>

        <p>
          Ми вирощуємо яблука вже багато років,
          поєднуючи природний догляд та сучасні
          методи вирощування.
        </p>

        <p>
          Наш сад — це свіже повітря, сонце,
          натуральність та справжній смак яблук.
        </p>
      </div>

      <img src="/img/tree.jpg" alt="apple">

    </section>

    <!-- СТАТИСТИКА -->
    <section class="stats">

      <div class="card">
        <h2>500+</h2>
        <p>Яблунь у саду</p>
      </div>

      <div class="card">
        <h2>12</h2>
        <p>Сортів яблук</p>
      </div>

      <div class="card">
        <h2>1000+</h2>
        <p>Задоволених клієнтів</p>
      </div>

      <div class="card">
        <h2>100%</h2>
        <p>Натуральний продукт</p>
      </div>

    </section>

    <!-- ВІДГУКИ -->
    <section class="reviews">

      <h2>Відгуки клієнтів</h2>

      <div class="reviews-box">

        <div
          class="review"
          v-for="(review, index) in reviews"
          :key="index"
        >
          <p>"{{ review.text }}"</p>
          <h4>— {{ review.name }}</h4>
        </div>

      </div>

      <!-- ФОРМА -->
      <div class="review-form">

        <h3>Залишити відгук</h3>

        <input
          type="text"
          placeholder="Ваше ім’я"
          v-model="newName"
        >

        <textarea
          placeholder="Ваш відгук..."
          v-model="newText"
        ></textarea>

        <button @click="addReview">
          Додати відгук
        </button>

      </div>

    </section>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

      newName: '',
      newText: '',

      reviews: [
        {
          name: 'Олександр',
          text: 'Дуже соковиті та свіжі яблука.'
        },

        {
          name: 'Марія',
          text: 'Замовляємо вже не перший раз, якість супер 🍎'
        },

        {
          name: 'Ірина',
          text: 'Справжній натуральний смак.'
        }
      ]
    }
  },

  methods: {

    addReview() {

      if(this.newName.trim() && this.newText.trim()) {

        this.reviews.push({
          name: this.newName,
          text: this.newText
        })

        this.newName = ''
        this.newText = ''
      }

    },
     
    goHome() {
      this.$router.push('/')
    }
  }

  }

</script>

<style scoped>

.about {
  border-radius: 30px;
  overflow: hidden;
  background: #f8f8f8;
  font-family: sans-serif;
}

/* HERO */

.hero {
    margin-top: 20px;
      min-height: 80vh;
  border-radius: 30px;
  overflow: hidden;

  background-image: url('/img/garden.jpg');
  background-size: cover;
  background-position: center;
  box-shadow: 0 10px 40px rgba(32, 131, 29, 0.336);

  position: relative;
 
}

.overlay {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.45);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: white;
  padding: 20px;
}

.overlay h1 {
  font-size: clamp(36px, 8vw, 70px);
  margin-bottom: 20px;
}

.overlay p {
   font-size: clamp(16px, 3vw, 22px);
  max-width: 700px;
  line-height: 1.6;
}

/* ABOUT */

.about-info {
  padding: 100px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  background: white;
  flex-wrap: wrap;
}

.text {
  flex: 1;
  min-width: 300px;
}

.text h2 {
  font-size: 45px;
  margin-bottom: 25px;
  color: #2e7d32;
}

.text p {
  color: #555;
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 20px;
}

.about-info img {
 width: 100%;
  max-width: 500px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);

  display: block;
}

/* STATS */

.stats {
  padding: 80px 10%;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  background: #eef7ea;
}

.card {
  width: 220px;
  background: white;
  padding: 40px 20px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-8px);
}

.card h2 {
  font-size: 45px;
  color: #43a047;
}

.card p {
  margin-top: 10px;
  color: #666;
}

/* REVIEWS */

.reviews {
  padding: 100px 10%;
  background: white;
}

.reviews h2 {
  text-align: center;
  font-size: 45px;
  color: #2e7d32;
  margin-bottom: 50px;
}

.reviews-box {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.review {
   width: 100%;
  max-width: 320px;

  background: #f7f7f7;
  padding: 30px;
  border-radius: 20px;

  box-shadow: 0 5px 20px rgba(0,0,0,0.08);

  box-sizing: border-box;

}

.review p {
  color: #555;
  line-height: 1.7;
  margin-bottom: 20px;
}

.review h4 {
  color: #43a047;
}

/* FORM */

.review-form {
  max-width: 500px;
  margin: 70px auto 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.review-form h3 {
  text-align: center;
  font-size: 32px;
  color: #2e7d32;
}

.review-form input,
.review-form textarea {
  padding: 15px;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  outline: none;
  background: #f3f3f3;
}

.review-form textarea {
  min-height: 130px;
  resize: none;
}

.review-form button {
  width: 100%;
  padding: 15px;

  border: none;
  border-radius: 12px;

  background: #FFC800;

  cursor: pointer;
  font-size: 16px;

  transition: 0.3s;
}

.review-form button:hover {
  background: #ffd83d;
}

  


.back-btn {
  position: fixed;
  top: 30px;
  left: 30px;

  width: 55px;
  height: 55px;

  border: none;
  border-radius: 50%;

  background: white;
  color: #2e7d32;

  font-size: 22px;
  cursor: pointer;

  z-index: 1000;

  box-shadow: 0 5px 15px rgba(0,0,0,0.15);

  transition: 0.3s;
}

.back-btn:hover {
  transform: translateX(-5px);
  background: #2e7d32;
  color: white;
}


/* TABLET */
@media (max-width: 900px) {

  .hero {
    min-height: 65vh;
  }

  .overlay h1 {
    font-size: 48px;
  }

  .overlay p {
    font-size: 18px;
  }

  .about-info {
    flex-direction: column;
    padding: 70px 20px;
    text-align: center;
  }

  .text h2 {
    font-size: 38px;
  }

  .stats {
    padding: 70px 20px;
  }

  .reviews {
    padding: 70px 20px;
  }

  .reviews h2 {
    font-size: 38px;
  }
}

/* MOBILE */
@media (max-width: 768px) {

  .hero {
    min-height: 55vh;
    border-radius: 20px;
  }

  .overlay {
    padding: 20px;
  }

  .overlay h1 {
    font-size: 36px;
  }

  .overlay p {
    font-size: 16px;
  }

  .text h2 {
    font-size: 32px;
  }

  .text p {
    font-size: 16px;
  }

  .card {
    width: 100%;
    max-width: 280px;
  }

  .card h2 {
    font-size: 36px;
  }

  .reviews h2 {
    font-size: 32px;
  }

  .review-form h3 {
    font-size: 28px;
  }

  .back-btn {
    width: 50px;
    height: 50px;

    top: 20px;
    left: 20px;

    font-size: 18px;
  }
}

/* SMALL MOBILE */
@media (max-width: 480px) {

  .about {
    border-radius: 15px;
  }

  .hero {
    min-height: 50vh;
    border-radius: 15px;
  }

  .overlay h1 {
    font-size: 30px;
  }

  .overlay p {
    font-size: 15px;
  }

  .about-info,
  .stats,
  .reviews {
    padding: 50px 15px;
  }

  .review {
    padding: 20px;
  }

  .review-form {
    gap: 15px;
  }

  .review-form input,
  .review-form textarea {
    padding: 12px;
    font-size: 15px;
  }
}

</style>