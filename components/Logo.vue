<template>
  <div class="site-logo">
    <nuxt-link to="/" >
      <i>Code</i> <span>Boom</span>
    </nuxt-link>
  </div>
</template>

<style scoped lang="scss">
.site-logo {
  text-transform: uppercase;
  z-index: 3;
  font-size: 1.125rem;
  /* font-family: ${font.headline.family}; */

    & a {
        position: relative;
        color: #ffff00;
        text-decoration: none;
    }
    & i {
        position: absolute;
        z-index: 2;
        top: -5px;
        padding: .25rem .35rem;
        border-radius: 3px;
        font-style: inherit;
        font-size: 1rem;
        font-weight: 700;
        background-color: #000009;
       
    }
    & span {        
        position: relative;
        left: 35px;
        z-index: 1;
        padding: .45rem .5rem .45rem 1.15rem;
        border-radius: 4px;
        font-size: 1.2rem;
        font-weight: 900;
        color: black;
        background-color: #ffff00;        
    }
  
}

</style>
