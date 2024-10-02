<script>
export default {
  name: "language-switcher",
  data() {
    return {
      languages: ['en', 'es'],
      language: 'en'
    }
  },
  computed: {
    uppercaseLanguages() {
      return this.languages.map(language => language.toUpperCase());
    }
  }
}
</script>

<template>
  <pv-select-button
      v-model="$i18n.locale"
      :options="uppercaseLanguages"
      class="language-switcher "
      />
</template>

<style scoped>
  .language-switcher{
    margin-right: 10px;
    background: black;
    color: white;
    padding: 5px;
    border-radius: 5px;
  }
</style>