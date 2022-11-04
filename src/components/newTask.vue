<script setup>
import { ref, onBeforeMount } from "vue";
import { useUserStore } from "@/stores/user";
import { useTaskStore } from "@/stores/task";
import router from "@/router";

const userStore = useUserStore();
const users = ref([]);

onBeforeMount(async () => {
  //users.value = await userStore.fetchUsers();

  const profile = userStore.profile;
  users.value.push(profile);
});

const taskStore = useTaskStore();

const categorySelected = ref("");
const taskName = ref("");
const userSelected = ref("");
const dueDate = ref("");

async function saveTask() {
  await taskStore.createTask(
    categorySelected.value,
    taskName.value,
    userSelected.value,
    dueDate.value
  );
  router.push("/task");
}

function cancel() {
  router.push("/task");
}
</script>

<template>
  <div class="container-fluid container-principal d-flex justify-content-center ">
    <div class="w-50">
      <div class="card mb-4 mt-4 w-100 border-success" style="width: 540px">
        <img
          src="../assets/pexels-ds-stories-6991384.jpg"
          class="card-img-top img-fluid"
          alt="postit"
        />
        <div class="card-header">
          <select
            v-model="categorySelected"
            class="form-select form-select mb-3 form-color-category"
            aria-label=".form-select example"
          >
            <option class="card-title" value="">Category</option>
            <option value="kitchen">Kitchen</option>
            <option value="bathroom">Bathroom</option>
            <option value="pet">Pet</option>
            <option value="room">Room</option>
          </select>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <input
              v-model="taskName"
              class="form-control form-color"
              type="text"
              placeholder="Task name"
            />
          </li>
          <li class="list-group-item">
            <select
              v-model="userSelected"
              class="form-select"
              id="inputGroupSelect01"
            >
              <option class="owner" value="">Select owner</option>
              <option v-for="user in users" :value="user.id">
                {{ user.username }}
              </option>
            </select>
          </li>
          <li class="list-group-item">
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Due Date
              </span>
              <input
                v-model="dueDate"
                type="date"
                class="form-control form-color"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <!--  <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Repeat </span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div> -->
          </li>
        </ul>
        <div class="card-body">
          <input
            class="btn btn-primary"
            type="button"
            value="Save"
            @click="saveTask"
          />
          <input
            class="btn btn-secundary"
            type="button"
            value="Cancel"
            @click="cancel"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container-principal {
  background-image: url(../assets/pexels-ben-mack-6775241.jpg)
}

img {
  height: 50px;
  width: 50px;
}

.card{
max-width: 340px;
background: honeydew;
}

.form-color{
    background-color:honeydew;
}

.form-color-category{
    background-color:rgb(206, 251, 206);
}

</style>
