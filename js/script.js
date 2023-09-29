const {createApp} = Vue;

createApp({

  data (){
    return {
      tasks: [
        'cibo hope',
        'compiti',
        'chiamare vicio'
      ],
      
    }
  }
}).mount('#app')