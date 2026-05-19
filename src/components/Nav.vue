<template>
<nav class="nav">
    <span class="nav__logo">OUR APPLES</span>
    <ul class="nav__links">
     <li>
  <router-link to="/catalog">
    КАТАЛОГ ТОВАРУ
  </router-link>
</li>
        <li><router-link to="/about">
            ПРО НАС
        </router-link></li>
        <router-link to="/contacts">
            КОНТАКТИ
        </router-link>
        
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
}
.nav__logo {
    font-size: 1.8em;
    text-transform: uppercase;
}

.nav__links {
    display: flex;
  gap: 30px;
  list-style: none;

    >li {
        display: inline;
 
        
        
        // &:not(:last-of-type) {margin-right: 27px};
    }
}
</style>



