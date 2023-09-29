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
    }

  },
  mounted () {    
  }
}).mount('#app')