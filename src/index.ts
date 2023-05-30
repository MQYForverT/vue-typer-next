import { App } from 'vue';
import vueTyperNext from './components/typer.vue';

const components = [vueTyperNext];
const install = (app: App) => {
    components.map(item => {
      app.component(item.name, item)
    })
}
//实现按需引入
export { vueTyperNext } 

export default install // 批量的引入