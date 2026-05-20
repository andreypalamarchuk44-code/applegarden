<template>
  <div class="catalog">
     <button class="back-btn" @click="goHome">
      <i class="fa-solid fa-angles-left"></i>
    </button>

    <h1>Каталог яблук 🍎</h1>

    <div class="cards">

      <div class="card" v-for="apple in apples" :key="apple.id">
        <img :src="apple.image" :alt="apple.title">

        <h2>{{ apple.title }}</h2>

        <p>{{ apple.description }}</p>

        <div class="price">
          <span class="new-price">{{ apple.price }} <i class="fa-solid fa-hryvnia-sign"></i></span>

          <span class="old-price">
            {{ apple.oldPrice }} <i class="fa-solid fa-hryvnia-sign"></i>
          </span>
        </div>

        <button>Замовити</button>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      apples: [
        {
          id: 1,
          title: 'Голден Делішес',
          description: 'Солодкі жовті яблука',
          price: 45,
          oldPrice: 60,
          image: '/img/apple1.jpg'
        },

        {
          id: 2,
          title: 'Гала',
          description: 'солодкі з легкою кислинкою',
          price: 55,
          oldPrice: 70,
          image: '/img/apple2.jpg'
        },

        {
          id: 3,
          title: 'Ренет Симиренка',
          description: 'Кисло-солодкий смак',
          price: 50,
          oldPrice: 65,
          image: '/img/apple3.jpg'
        },
            {
          id: 4,
          title: 'Фуджі',
          description: 'Дуже солодкі',
          price: 50,
          oldPrice: 65,
          image: '/img/apple4.jpg'
        },
            {
          id: 5,
          title: 'Granny Smith',
          description: 'Кисло-солодкий смак',
          price: 50,
          oldPrice: 65,
          image: '/img/apple5.jpg'
        },    
        {
          id: 6,
          title: 'Айдаред',
          description: 'Кисло-солодкий смак',
          price: 50,
          oldPrice: 65,
          image: '/img/apple6.jpg'
        
      },
      {
          id: 7,
          title: 'Джонаголд',
          description: 'Cолодкі з легкою кислинкою',
          price: 50,
          oldPrice: 65,
          image: '/img/apple7.jpg'
         
        
      },
      {
          id: 8,
          title: 'Антонівка',
          description: 'Kислі та дуже ароматні',
          price: 50,
          oldPrice: 65,
          image: '/img/apple16.jpg'
         
        
        
      },
      
      
        
      ]
  }
  },
    methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}


</script>

<style scoped lang="scss">
.catalog {
  width: 90%;
  max-width: 1300px;
  margin: 60px auto;
  padding: 0 15px;
  box-sizing: border-box;
  
  
  .back-btn {
  width: 60px;
  height: 60px;

  border: none;
  border-radius: 50%;

  background: #FFC800;
  color: #1f1f1f;

  font-size: 22px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s;

  box-shadow: 0 5px 15px rgba(0,0,0,0.1);

  &:hover {
    transform: translateX(-5px);
    background: #ffd83d;
  }
}

  h1 {
    text-align: center;
    margin-bottom: 50px;
    font-size: clamp(32px, 5vw, 48px);
  }
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.card {
  background: white;
  border-radius: 25px;
  overflow: hidden;

  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  transition: 0.3s;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 85%;
    height: 250px;
    object-fit: cover;


    display: block;
   
  }

  h2 {
    padding: 20px 20px 10px;
    font-size: clamp(22px, 3vw, 28px);
  }

  p {
    padding: 0 20px;
    font-family: "Montserrat", sans-serif;
    line-height: 1.6;
    font-size: clamp(14px, 2vw, 16px);

  }

  .price {
    padding: 20px;

    display: flex;
    align-items: center;
    gap: 15px;
  }

  .new-price {
    font-size: 28px;
    color: #78b900;
 
  }

  .old-price {
    text-decoration: line-through;
    color: gray;
  }

  button {
    margin: 0 20px 20px;
    width: calc(100% - 40px);
    padding: 15px;
    border: none;
    border-radius: 12px;
    background: #FFC800;
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;

    &:hover {
      background: #ffd83d;
    }
  }
  /* Планшети */
@media (max-width: 768px) {
  .catalog {
    width: 95%;
    margin: 40px auto;
  }

  .cards {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .card {
    img {
      height: 220px;
    }
  }
}

/* Телефони */
@media (max-width: 480px) {
  .catalog {
    width: 100%;
    padding: 0 10px;
  }

  .catalog .back-btn {
    width: 50px;
    height: 50px;
    font-size: 18px;
  }

  .card {
    border-radius: 18px;

    img {
      height: 200px;
    }

    h2 {
      padding: 15px 15px 10px;
    }

    p {
      padding: 0 15px;
    }

    .price {
      padding: 15px;
      gap: 10px;
    }

    button {
      margin: 0 15px 15px;
      width: calc(100% - 30px);
    }
  }
}
}
</style>