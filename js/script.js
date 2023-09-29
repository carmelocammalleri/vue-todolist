const {createApp} = Vue;

createApp({

  data (){
    return {
      tasks: [
        'cibo hope',
        'compiti',
        'giocare alla play'
      ],
      newTask: [],
      isError: false,
      isActive: false
    }
  },
  methods:{
    addNewTask (){
      if(this.newTask.length <5){
        this.isError=true
      } else {
        this.tasks.unshift(this.newTask);
        this.newTask= ''
        this.isError=false
      }
    },
    removeTask(index){
      this.tasks.splice(index,1)
      console.log(isDone);
    },
    taskDone() {
      if (!this.isActive) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
      console.log(this.isActive);
    }
  },
  mounted (){

  }
}).mount('#app')