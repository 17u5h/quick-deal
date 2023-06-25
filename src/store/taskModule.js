import axios from "axios";
import {API_URL} from "@/constants/URL";

export const taskModule = {
	state: () => ({
		tasks: [],
		isLoading: false
	}),
	getters: {},
	mutations: {
		setTasks(state, tasks) {
			state.tasks = tasks
		},
		setIsLoading(state) {
			state.isLoading = !state.isLoading
		},
		createTask(state, task) {
			state.tasks.unshift(task)
			localStorage.setItem('yadrenkin', JSON.stringify(state.tasks))  //здесь по идее post запрос
		},
		removeTask(state, task) {
			state.tasks = state.tasks.filter(el => task.id !== el.id)
			localStorage.setItem('yadrenkin', JSON.stringify(state.tasks))  //здесь по идее delete запрос
		},
		editTask(state, [newTitle, task]) {
			const index = state.tasks.indexOf(task)
			state.tasks[index].title = newTitle
		},
		fetchChanges(state) {
			localStorage.setItem('yadrenkin', JSON.stringify(state.tasks))  // здесь по идее post или patch запрос
		},
	},
	actions: {
		async fetchTasks({commit}) {																		//этого всего не будет, когда будет бэкенд часть
			const jsonTaskList = localStorage.getItem('yadrenkin')		//
			if (jsonTaskList) {																						//
				const taskList = JSON.parse(jsonTaskList)										//
				commit('setTasks', taskList)																//
				return              																				//
			}																															//
			try {
				commit('setIsLoading', true)
				setTimeout(async () => {
					const {data} = await axios.get(`${API_URL}/todos?_limit=10`)
					localStorage.setItem('yadrenkin', JSON.stringify(data))    //этого не будет, когда будет бэкенд часть
					commit('setTasks', data)
					commit('setIsLoading', false)
				}, 500)
			} catch (e) {
				console.error(e)
			}
		},
	},
	namespaced: true,
}
