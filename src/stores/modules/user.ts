import { defineStore } from "pinia";
import { IUserState } from "../interface";

export const useUsersStore = defineStore("user", {
	state: (): IUserState => {
		return { username: "" };
	},
});
