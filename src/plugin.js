export default {
  install: (app,options) => {
    app.config.globalProperties.$toast = (message) => {
      alert(message)
    }
  }
}