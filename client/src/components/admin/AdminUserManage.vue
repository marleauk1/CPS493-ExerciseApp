<template>
  <div>
    <div class="buttons has-addons is-centered">
      <button class="button is-link" @click="isAddingUser = true">
        <span class="icon is-small">
          <i class="fas fa-user-plus"></i>
        </span>
        <span>Add User</span>
      </button>
    </div>

    <AdminUserCard
      v-for="(x, i) in list"
      :key="i"
      :user="x"
      v-bind:id="x.id"
      v-bind:FirstName="x.FirstName"
      v-bind:LastName="x.LastName"
      v-bind:DOB="x.DOB"
      v-bind:PrimaryEmail="x.PrimaryEmail"
      v-bind:User_Type="x.User_Type"
    />

    <!-- Add User Modal -->
    <div class="modal" :class="{ 'is-active': isAddingUser }">
      <div class="modal-background" @click="isAddingUser = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Adding User</p>
          <button
            class="delete"
            aria-label="close"
            @click="isAddingUser = false"
          ></button>
        </header>
        <section class="modal-card-body">
          <AdminUserAdd />
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Add User</button>
          <button class="button" @click="isAddingUser = false">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import AdminUserCard from "@/components/admin/AdminUserCard.vue";
import AdminUserAdd from "@/components/admin/AdminUserAdd.vue";

import { getList } from "@/models/users.js"

export default {
  data: () => ({
    isAddingUser: false,
    list: []
  }),
  async created(){
      this.list = await getList(); 
  },
  components: {
    AdminUserCard,
    AdminUserAdd,
  },
};
</script>

<style>
</style>