// /store/task.js
import { defineStore } from "pinia";
import { supabase } from "@/supabase";

export const useTaskStore = defineStore("task", {
    state: () => ({
    }),

    actions: {
        async fetchTasks() {
            const {data, error} = await supabase
            .from('tasks')
            .select();
            if (error) throw error;
            if (data) return data;
        },
        async createTask(categorySelected, taskName, userSelected, whenDate, dueDate) {
            const {data, error} = await supabase
                .from('tasks')
                .insert({
                    name: taskName,
                    dueDate: new Date(dueDate),
                    userId: userSelected,
                    category: categorySelected,
                })
                .select();
            if (error) throw error;
            if (data) return data[0];
        },
        async updateTask(idTask, checked) {
            const updates = {
                done: checked,
            };

            const {data, error} = await supabase
                .from('tasks')
                .update(updates)
                .eq('id', idTask)

            if (error) throw error;
            if (data) return data[0];
        }
    }
});

