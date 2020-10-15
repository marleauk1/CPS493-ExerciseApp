<template>
  <div class="box has-background-dark has-text-white">
    <div class="columns is-centered">
      <div class="column is-3">
        <span class="has-text-weight-medium is-size-5">Exercise Name</span> <br>
        <span class="has-text-weight-medium is-size-5">Exercise Type</span>
      </div>

      <div class="column is-6">
        <div class="buttons is-centered">
          <button class="button is-link" @click="isEditingExercise = true">
            <span class="icon is-small">
              <i class="fas fa-edit"></i>
            </span>
            <span>Edit Exercise</span>
          </button>
        </div>
      </div>

      <div class="column is-3">
        <div class="field is-grouped is-grouped-right">
          <button class="button is-danger" @click="isDeletingExercise = true">
            <span class="icon is-small">
              <i class="fas fa-times"></i>
            </span>
            <span>Delete Exercise</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Modal Windows -->
    <div class="modal" :class="{ 'is-active': isEditingExercise }">
      <div class="modal-background" @click="isEditingExercise = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Editing Exercise</p>
          <button class="delete" aria-label="close" @click="isEditingExercise = false"></button>
        </header>
        <section class="modal-card-body">
          <AdminExerciseEdit />
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save Changes</button>
          <button class="button" @click="isEditingExercise = false">Cancel</button>
        </footer>
      </div>
    </div>

    <div class="modal" :class="{ 'is-active': isDeletingExercise }">
      <div class="modal-background" @click="isDeletingExercise = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Deleting Exercise</p>
          <button class="delete" aria-label="close" @click="isDeletingExercise = false"></button>
        </header>
        <section class="modal-card-body">
          <AdminExerciseDelete />
        </section>
        <footer class="modal-card-foot">
          <button class="button is-danger">Delete Exercise</button>
          <button class="button" @click="isDeletingExercise = false">Cancel</button>
        </footer>
      </div>
    </div>

  </div>
</template>

<script>
import AdminExerciseEdit from "@/components/admin/AdminExerciseEdit";
import AdminExerciseDelete from "@/components/admin/AdminExerciseDelete";

export default {
  data: () => ({
    isEditingExercise: false,
    isDeletingExercise: false,
  }),
  components: {
    AdminExerciseEdit,
    AdminExerciseDelete,
  },
};
</script>

<style>
</style>