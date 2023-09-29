const {createApp} = Vue;

createApp({

  data (){
    return {
      tasks: [
        'cibo hope',
        'cibo hope',
        'cibo hope'
      ],
      counter: 0
    }
  }
}).mount('#app')