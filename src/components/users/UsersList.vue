<template>
  <button @click="saveChanges">save change</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['users'],
  data() {
    return { changesSave: false };
  },
  methods: {
    saveChanges() {
      this.changesSave = true;
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log('++++++++++++++');
    console.log(to, from);
    if (this.changesSave) {
      next();
    } else {
      const acc = confirm('please fuck your self');
      next(acc);
    }
  },
  unmounted() {
    console.log('^^^^^^^^^^^^');
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
