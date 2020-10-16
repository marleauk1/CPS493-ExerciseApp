<template>
  <article class="message">
    <div class="message-header">
      <p>{{ date }}</p>
    </div>
    <div class="message-body">
      <div class="columns">
        <div class="column">{{ type }}</div>
        <div class="column">{{ time }}</div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    date: Object,
    type: Object,
    time: Object,
  }
};
</script>

<style>
</style>