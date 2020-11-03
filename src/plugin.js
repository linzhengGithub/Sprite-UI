export default {
  install: (app,options) => {
    app.config.globalProperties.$toast = function(message){
      alert(message)
    }
  }
}