<template>
  <div>
    <header>
      <div class="container">
        <div class="navbar">
          <nuxt-link to="/" class="logo">Igor Oleniuk</nuxt-link>

          <nav>
            <ul>
              <li><nuxt-link to="/who" class="logo">Who?</nuxt-link></li>
              <li><nuxt-link to="/who" class="logo">Posts</nuxt-link></li>
              <li><nuxt-link to="/contact" class="logo">Contact</nuxt-link></li>
              <li><nuxt-link to="/instagram" class="logo">Instagram</nuxt-link></li>
              <li><nuxt-link to="/instagram-2" class="logo">Instagram-2</nuxt-link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>
