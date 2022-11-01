<script setup>

import {ref, onBeforeMount} from 'vue';
import { useUserStore } from "@/stores/user";
import { useTaskStore } from "@/stores/task";

const userStore = useUserStore();
const taskStore = useTaskStore();
const tasks = ref([]);

onBeforeMount( async () => {
    const userId = userStore.profile.id;
  tasks.value = await taskStore.fetchTasks(userId);

  tasks.value.map(async task => {

    task.dueDate = Date.parse(task.dueDate);
    task.dueDate = new Date(task.dueDate)
        .toISOString()
        .split('T')[0];

    const userProfile = await userStore.fetchProfile(task.userId);
    task.username = userProfile.username;

    return task;
  });
});

function checkTask(value) {
  const taskId = value.target.id;
  const valueCheck = value.target.checked;

  taskStore.updateTask(taskId, valueCheck);
}

function deleteTask(id){
  this.tasks.value.splice(posTask,1);
  task.push(taskRemoved[0]);
}


</script>

<template>
    <div class="container-sm">
        <h1 class="text-center mt-4 mb-4">Task</h1>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-4 mb-4">
            <a href="/newtask" class="btn btn-primary me-md-2" >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-plus-square p-1" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>New Task
            </a>
        </div>


        <table class="table table-hover mt-4 mb-4 text-center" >
            <thead>
            <tr>
                <th scope="col"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-check-fill" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-2.6 5.854a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                    </svg>
                </th>
                <th scope="col">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
                        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
                        <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
                    </svg> List Task
                </th>
                <th scope="col"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg> Owner
                </th>
                <th scope="col">Date</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="task in tasks" :class="'row-bg-'+task.category">
                  <td scope="row" >
                      <div class="form-check">
                          <input :id="task.id" @change="checkTask($event)" class="form-check-input" type="checkbox" v-model="task.done" id="checkboxNoLabel" aria-label="...">
                      </div>
                  </td>
                  <td>
                      <a href="#" class="link-info">{{ task.name }}</a>
                  </td>
                  <td>{{ task.username }}</td>
                  <td>
                      <input type="date" :value="task.dueDate" />
                  </td>
                  <td>
                    <a href="/task" type="button" class="btn-close" disabled aria-label="Close" value="delete" @click="deleteTask (task.id)"></a>
                 </td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

.btn a {
    color: aliceblue;
    text-decoration: none;
}

.row-bg-kitchen {
  background-color:bisque;
}

.row-bg-pet {
  background-color: #315850;
}

</style>