<template>
<nav class="nav">
    <span class="nav__logo">OUR APPLES</span>
    <ul class="nav__links">
  <li>
    <router-link to="/catalog">
      КАТАЛОГ ТОВАРУ
    </router-link>
  </li>

  <li>
    <router-link to="/about">
      ПРО НАС
    </router-link>
  </li>

  <li>
    <router-link to="/contacts">
      КОНТАКТИ
    </router-link>
  </li>
</ul>
</nav>
</template>


<script>

export default {}
</script>


<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 50px;
  gap: 20px;
  flex-wrap: wrap;
}

.nav__logo {
  font-size: clamp(24px, 4vw, 32px);
  text-transform: uppercase;
  font-weight: bold;
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 30px;

  list-style: none;
  padding: 0;
  margin: 0;

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 16px;
    transition: 0.3s;
    font-family: "Montserrat", sans-serif;

    &:hover {
      color: #FFC800;
    }
  }
}

/* Планшети */
@media (max-width: 1024px) {
  .nav__links {
    gap: 20px;
  }
}

/* Телефони */
@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    text-align: center;
    gap: 25px;
  }

  .nav__links {
    flex-direction: column;
    gap: 18px;
  }
}

/* Маленькі телефони */
@media (max-width: 480px) {
  .nav {
    margin-top: 30px;
  }

  .nav__logo {
    font-size: 24px;
  }

  .nav__links a {
    font-size: 15px;
  }
}
</style>



