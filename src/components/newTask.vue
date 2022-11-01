<script setup>

import {ref, onBeforeMount} from 'vue';
import { useUserStore } from "@/stores/user";
import { useTaskStore } from "@/stores/task";
import router from "@/router";

const userStore = useUserStore();
const users = ref([]);

onBeforeMount( async () => {
    //users.value = await userStore.fetchUsers();

    const profile = userStore.profile;
    users.value.push(profile);
});

const taskStore = useTaskStore();

const categorySelected = ref('');
const taskName = ref('');
const userSelected = ref('');
const whenDate = ref('');
const dueDate = ref('');

function saveTask() {
  const data = taskStore.createTask(categorySelected.value, taskName.value, userSelected.value, whenDate.value, dueDate.value);
  if(data) {
    router.push('/task');
  }
}

function cancel() {
  router.push('/task');
}

</script>

<template>
    <div class="container-sm">
    <h1>Category</h1>
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            <select v-model="categorySelected" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected>Category</option>
                <option value="kitchen">Kitchen</option>
                <option value="bathroom">Bathroom</option>
                <option value="pet">Pet</option>
                <option value="room">Room</option>
            </select>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">
            <input v-model="taskName" class="form-control form-control-lg" type="text" placeholder="Task name">
        </li>
        <li class="list-group-item">

            <select v-model="userSelected" class="form-select" id="inputGroupSelect01">
                <option v-for="user in users" :value="user.id">{{ user.username }}</option>
            </select>
        </li>
        <li class="list-group-item">
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> When</span>
                <input v-model="whenDate" type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Due Date </span>
                <input v-model="dueDate" type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div>
          <!--  <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Repeat </span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div> -->
        </li>
        </ul>
        <div class="card-body">
            <input class="btn btn-primary dropdown-toggle-split" type="button" value="Save" @click="saveTask"/>
            <input class="btn btn-secundary dropdown-toggle-split" type="button" value="Cancel" @click="cancel"/>

        </div>
    </div>
   
    </div>
</template>
