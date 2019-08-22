<template>
  <article>
    <PageTitle title="Stay Tuned With Us" titleId="stay-tuned-with-us"></PageTitle>

    <section id="articles"></section>
  </article>
</template>

<script>
import PageTitle from "./PageTitle.vue";

export default {
  components: {
    PageTitle
  }
};
</script>

<style>
#articles {
  padding: 120px 0;
  background-color: #f4f7f9;
}
</style>