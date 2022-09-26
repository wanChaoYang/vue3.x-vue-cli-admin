
//定义全局类型申明
declare global {
    declare namespace GlobalType {
        type Ikey = string | number
        type IRecode = Record<Ikey, any>
    }

    interface Window {
        app: GlobalType.IRecode
    }
}

//全局挂载方法申明
declare module 'vue' {
    interface ComponentCustomProperties {
        app: GlobalType.IRecode
    }
}


export { }