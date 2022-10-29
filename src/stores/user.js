// /store/user.js
import { defineStore } from "pinia";
import { supabase } from "@/supabase";

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null,
        profile: null,
    }),

    actions: {
        async fetchUser() {
            const user = await supabase.auth.getUser();
            this.user = user;
        },
        async fetchUsers() {
            const { data, error } = await supabase
                .from('profiles')
                .select('id,username');
            return data;
        },
        async signUp(email, password, userName) {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
            });
            if (error) throw error;
            if (data) {
                this.user = data.user;
                await this.updateProfile(userName)
            }
        },
        async login(email, password) {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });
            if (error) throw error;
            if (data) this.user = data.user;
        },
        async updateProfile(userName) {
            const updates = {
                id: this.user.id,
                username: userName,
                updated_at: new Date(),
            };

            let { data, error } = await supabase
                .from('profiles')
                .upsert(updates)
                .select()
                .eq('id', this.user.id);
            if (error) throw error;
            if (data && data.length > 0) this.profile = data[0];
        },
        async fetchProfile(userId) {
            let { data, error } = await supabase
                .from('profiles')
                .select()
                .eq('id', userId);
            if (error) throw error;
            if (data && data.length > 0) return data[0];
        },
    },

    persist: {
        enabled: true,
        strategies: [
            {
                key: "user",
                storage: localStorage,
            },
        ],
    },
});

