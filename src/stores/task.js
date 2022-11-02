// /store/task.js
import { defineStore } from "pinia";
import { supabase } from "@/supabase";

export const useTaskStore = defineStore("task", {
    state: () => ({
    }),

    actions: {
        async fetchTasks(userId) {
            const {data, error} = await supabase
            .from('tasks')
            .select()
            .eq('userId', userId);
            if (error) throw error;
            if (data) return data;
        },
        async createTask(categorySelected, taskName, userSelected, dueDate) {
            const {error} = await supabase
                .from('tasks')
                .insert({
                    name: taskName,
                    dueDate: new Date(dueDate),
                    userId: userSelected,
                    category: categorySelected,
                });
            if (error) throw error;
        },
        async updateTask(idTask, checked) {
            const {error} = await supabase
                .from('tasks')
                .update({
                    done: checked,
                })
                .eq('id', idTask);

            if (error) throw error;
        },
        async deleteTask(idTask) {
            const { error } = await supabase
                .from('tasks')
                .delete()
                .eq('id', idTask);

            if (error) throw error;
        },
        

    }
});

