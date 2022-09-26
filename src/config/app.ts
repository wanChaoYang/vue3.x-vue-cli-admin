import sysCfg, { ISyscfg } from "./syscfg"
const app = {
    // getConfig<T>(key:string){}
    //!获取系统配置信息
    getConfig<T>(key: keyof ISyscfg): T {
        return sysCfg[key] as unknown as T
    },

}


export default app