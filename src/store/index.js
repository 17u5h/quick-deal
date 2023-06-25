import {createStore} from 'vuex'
import {taskModule} from "@/store/taskModule";

export default createStore({
	modules: {
		task: taskModule,
	}
})