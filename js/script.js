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
      counter: 0
    }
  },
  methods:{
    addNewTask (){
      this.tasks.unshift(this.newTask);
      this.newTask= ''
    }

  },
  mounted () {    
  }
}).mount('#app')