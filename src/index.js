import DynamicTree from "./components/DynamicTree.vue";

function install(Vue) {
    if (install.installed) return
    install.installed = true
    Vue.component('DynamicTree', DynamicTree)
  }
  
  const plugin = {
    install
  }
  
  let GlobalVue = null
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.vue
  }
  
  if (GlobalVue) {
    GlobalVue.use(plugin)
  }
  
  DynamicTree.install = install

  export default DynamicTree