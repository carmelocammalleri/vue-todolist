const {createApp} = Vue;

createApp({

  data (){
    return {
      tasks: [
        'cibo hope',
        'compiti',
        'chiamare vicio',
        'chiamare vicio',
        'chiamare vicio',
      ],
      newTask: []
    }
  },
  methods:{
    addNewTask (){
      this.tasks.unshift(this.newTask)
    }

  },
  mounted () {    
  }
}).mount('#app')