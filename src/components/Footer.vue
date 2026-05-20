


<template>

 <div class="footer">
      <div class="footer-content">
      
      <div class="footer-info">
        <h2>Apple Garden</h2>
        <p>
          Натуральні яблука прямо з нашого саду. 
          Смак природи у кожному плоді 🍎
        </p>
      </div>
 <div class="socials">
        <a href="#">
          <i class="fa-brands fa-instagram"></i>
        </a>

        <a href="#">
          <i class="fa-brands fa-facebook-f"></i>
        </a>

        <a href="#">
          <i class="fa-brands fa-telegram"></i>
        </a>
      </div>

      <button class="top-btn" @click="scrollTop">
        <i class="fa-solid fa-angles-up"></i>
      </button>

    </div>


 </div>
</template>


<script>
export default {
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
}

</script>


<style lang="scss">
.footer {
  width: 100%;
  margin-top: 100px;
  padding: 40px 20px;
  background: #1f1f1f;
  color: white;
  border-top: 4px solid #FFC800;
    box-sizing: border-box;

}

.footer-content {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  flex-wrap: wrap;
    box-sizing: border-box;
}

.footer-info {
  max-width: 450px;

  h2 {
    color: #FFC800;
    margin-bottom: 10px;
    font-size: clamp(28px, 4vw, 32px);
  }

  p {
    font-size: clamp(14px, 2vw, 16px);
    opacity: 0.8;
    font-family: "Montserrat", sans-serif;
    line-height: 1.6;
  }
}

.footer-links {
  display: flex;
  gap: 25px;

  a {
    color: white;
    font-size: 17px;
    transition: 0.3s;
    font-family: "Montserrat", sans-serif;

    &:hover {
      color: #FFC800;
    }
  }
}
.socials {
  display: flex;
  gap: 20px;

  a {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #2c2c2c;

    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-size: 20px;
    transition: 0.3s;

    &:hover {
      background: #FFC800;
      color: black;
      transform: translateY(-5px);
    }
  }
}

.top-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background: #FFC800;
  color: #1f1f1f;
  font-size: 22px;
  cursor: pointer;
  transition: 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;
   flex-shrink: 0;

  &:hover {
    transform: translateY(-5px);
    background: #ffd83d;
  }
}


/* Планшети */
@media (max-width: 1024px) {
  .footer-content {
    gap: 30px;
  }
}

/* Телефони */
@media (max-width: 768px) {
  .footer {
    padding: 40px 15px;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 25px;
  }

  .footer-info {
    max-width: 100%;
  }

  .socials {
    gap: 15px;
  }

  .top-btn {
    width: 55px;
    height: 55px;
    font-size: 20px;
  }
}

/* Маленькі телефони */
@media (max-width: 480px) {
  .footer {
    margin-top: 70px;
    padding: 30px 10px;
  }

  .socials a {
    width: 45px;
    height: 45px;
    font-size: 18px;
  }

  .top-btn {
    width: 50px;
    height: 50px;
    font-size: 18px;
  }
}






</style>



