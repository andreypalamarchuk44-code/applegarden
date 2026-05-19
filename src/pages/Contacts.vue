<template>

  <div class="contacts">

    <div class="container">

      <!-- КНОПКА НАЗАД -->

      <button class="back-btn" @click="goHome">
        <i class="fa-solid fa-angles-left"></i>
      </button>

      <!-- HERO -->
<section class="hero">

  <div class="blur blur1"></div>
  <div class="blur blur2"></div>

  <div class="contact-card">
    <h1>Контакти</h1>

    <p>
      Ми завжди раді вашим питанням та замовленням 🍎
    </p>
  </div>

</section>
   

      <!-- CONTACTS -->

      <section class="contact-box">

        <div class="info">

          <h2>Наші контакти</h2>

          <div class="item">
            <i class="fa-solid fa-phone"></i>
            <p>+380 93 943 00 16</p>
          </div>

          <div class="item">
            <i class="fa-solid fa-envelope"></i>
            <p>andreypalamarchuk@gmail.com</p>
          </div>

          <div class="item">
            <i class="fa-solid fa-location-dot"></i>
            <p>Україна, Вінницька область, Ладижин</p>
          </div>

          <div class="item">
            <i class="fa-solid fa-clock"></i>
            <p>Щодня: 08:00 - 20:00</p>
          </div>

        </div>

        <!-- ФОРМА -->

        <div class="form-box">

          <h2>Написати нам</h2>

          <input
            type="text"
            placeholder="Ваше ім’я"
            v-model="name"
          >

          <input
            type="email"
            placeholder="Email"
            v-model="email"
          >

          <textarea
            placeholder="Ваше повідомлення..."
            v-model="message"
          ></textarea>

          <button @click="sendMessage">
            Надіслати
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

      name: '',
      email: '',
      message: ''

    }
  },

  methods: {

    goHome() {
      this.$router.push('/')
    },

    sendMessage() {

      if(
        this.name.trim() &&
        this.email.trim() &&
        this.message.trim()
      ) {

        alert('Повідомлення успішно надіслано 🍎')

        this.name = ''
        this.email = ''
        this.message = ''

      }

    }

  }

}

</script>

<style scoped>

.contacts {
  background: #f8f8f8;
  min-height: 100vh;
  font-family: sans-serif;
}

/* .hero {
  height: 70vh;

  background-image: url('/img/redapple.jpg');
  background-size: cover;
  background-position: center;

  border-radius: 30px;
  overflow: hidden;

  position: relative;
  margin-top: 20px;
}

.overlay {
  width: 100%;
  height: 100%;

  background: rgba(0,0,0,0.45);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  text-align: center;

  padding: 20px;
}

.overlay h1 {
  font-size: 70px;
  margin-bottom: 20px;
  
}

.overlay p {
  font-size: 22px;
} */
.hero {
  height: 70vh;

  background-image: url('/img/redapple.jpg');
  background-size: cover;
  background-position: center;

  border-radius: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;

  position: relative;
  overflow: hidden;
}

/* легке затемнення */
.hero::before {
  content: '';

  position: absolute;
  inset: 0;

  background: rgba(0,0,0,0.25);
}

/* картка */
.contact-card {
  position: relative;
  z-index: 2;

  width: 500px;

  padding: 50px;

  border-radius: 30px;

  background: rgba(255,255,255,0.12);

  backdrop-filter: blur(12px);

  border: 1px solid rgba(255,255,255,0.2);

  text-align: center;

  color: white;
}

/* заголовок */
.contact-card h1 {
  font-size: 65px;
  margin-bottom: 20px;

  font-weight: 700;
}

/* текст */
.contact-card p {
  font-size: 22px;
  line-height: 1.6;
}


/* CONTACT BOX */

.contact-box {
  padding: 100px 0;

  display: flex;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;
}

.info,
.form-box {
  flex: 1;
  min-width: 320px;

  background: white;
  padding: 40px;

  border-radius: 25px;

  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
}

.info h2,
.form-box h2 {
  font-size: 40px;
  color: #2e7d32;
  margin-bottom: 30px;
}

.item {
  display: flex;
  align-items: center;
  gap: 20px;

  margin-bottom: 25px;
}

.item i {
  width: 55px;
  height: 55px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #eef7ea;
  color: #43a047;

  border-radius: 50%;

  font-size: 22px;
}

.item p {
  font-size: 18px;
  color: #555;
}

/* FORM */

.form-box {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-box input,
.form-box textarea {
  padding: 16px;

  border: none;
  outline: none;

  background: #f3f3f3;

  border-radius: 15px;

  font-size: 16px;
}

.form-box textarea {
  min-height: 150px;
  resize: none;
}

.form-box button {
  padding: 16px;

  border: none;
  border-radius: 15px;

  background: #FFC800;
  color: black;

  font-size: 17px;
  cursor: pointer;

  transition: 0.3s;
}

.form-box button:hover {
  background: #ffd83d;
}

/* BACK BUTTON */

.back-btn {
  position: fixed;

  top: 30px;
  left: 30px;

  width: 55px;
  height: 55px;

  border: none;
  border-radius: 50%;

  background: white;
  color: #ff0808;

  font-size: 22px;

  cursor: pointer;

  z-index: 1000;

  box-shadow: 0 5px 15px rgba(0,0,0,0.15);

  transition: 0.3s;
}

.back-btn:hover {
  transform: translateX(-5px);

  background: #b60404;
  color: white;
}

/* ADAPTIVE */

@media(max-width: 900px) {

  .overlay h1 {
    font-size: 45px;
  }

  .overlay p {
    font-size: 18px;
  }

}

</style>