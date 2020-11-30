<template>
  <div class="box has-background-dark has-text-white">
    <div class="columns is-centered">
      <div class="column is-3">
        <span class="has-text-weight-medium is-size-5">{{ userData.id }}</span> <br />
        <span class="has-text-weight-medium is-size-5">{{ userData.FirstName }}</span> <br />
        <span class="has-text-weight-medium is-size-5"> {{ userData.LastName }} </span> <br />
        <span class="has-text-weight-medium is-size-5"> {{ userData.DOB }} </span> <br />
        <span class="has-text-weight-medium is-size-5"> {{ userData.PrimaryEmail }} </span> <br />
        <span
          v-if="User_Type == 8"
          class="has-text-weight-medium has-text-warning is-size-5"
        >
          Admin
        </span>
      </div>

      <div class="column is-6">
        <div class="buttons is-centered">
          <!--
          <button class="button is-link" @click="isViewingUser = true">
            <span class="icon is-small">
              <i class="fas fa-eye"></i>
            </span>
            <span>View User</span>
          </button>
-->

          <button class="button is-link" @click="isEditingUser = true">
            <span class="icon is-small">
              <i class="fas fa-user-edit"></i>
            </span>
            <span>Edit User</span>
          </button>
        </div>
      </div>

      <div class="column is-3">
        <div class="field is-grouped is-grouped-right">
          <button class="button is-danger" @click="isDeletingUser = true">
            <span class="icon is-small">
              <i class="fas fa-user-slash"></i>
            </span>
            <span>Delete User</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Modal Windows -->
    <!--    
  <div class="modal" :class="{ 'is-active': isViewingUser }">
      <div class="modal-background" @click="isViewingUser = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Viewing {{ FirstName }}</p>
          <button
            class="delete"
            aria-label="close"
            @click="isViewingUser = false"
          ></button>
        </header>
        <section class="modal-card-body">
          <AdminUserView v-bind:workouts="workouts" />
        </section>
        <footer class="modal-card-foot">
          <button class="button" @click="isViewingUser = false">Close</button>
        </footer>
      </div>
    </div>
-->

    <div class="modal" :class="{ 'is-active': isEditingUser }">
      <div class="modal-background" @click="isEditingUser = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Editing {{ FirstName }}</p>
          <button
            class="delete"
            aria-label="close"
            @click="isEditingUser = false"
          ></button>
        </header>
        <section class="modal-card-body">
          <AdminUserEdit v-bind:userData="userData" />
        </section>
        <footer class="modal-card-foot">
          <button class="button" @click="isEditingUser = false">Cancel</button>
        </footer>
      </div>
    </div>

    <div class="modal" :class="{ 'is-active': isDeletingUser }">
      <div class="modal-background" @click="isDeletingUser = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Deleting {{ FirstName }}</p>
          <button
            class="delete"
            aria-label="close"
            @click="isDeletingUser = false"
          ></button>
        </header>
        <section class="modal-card-body">
          <AdminUserDelete v-bind:id="userData.id" />
        </section>
        <footer class="modal-card-foot">
          <button class="button" @click="isDeletingUser = false">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
// import AdminUserView from "@/components/admin/AdminUserView";
import AdminUserEdit from "@/components/admin/AdminUserEdit";
import AdminUserDelete from "@/components/admin/AdminUserDelete";

export default {
  data: () => ({
    // isViewingUser: false,
    isEditingUser: false,
    isDeletingUser: false,
  }),
  components: {
    // AdminUserView,
    AdminUserEdit,
    AdminUserDelete,
  },
  props: {
    userData: {
      id: Number,
      FirstName: String,
      LastName: String,
      DOB: String,
      PrimaryEmail: String,
      User_Type: Number,
    },
  },
};
</script>

<style>
</style>