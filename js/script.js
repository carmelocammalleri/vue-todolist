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
      isError: false
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

    }

  },
  mounted () {    
  }
}).mount('#app')