
import app from "./app"
// window["app"]=app

//优化：申明全局相关类型 只能是以下两种
type GlobalVarKey = "app" | "Ajax"
const iGlobalVars: GlobalType.IRecode = {
    "app": app,//全局应用对象
}
Object.keys(iGlobalVars).forEach(stKey => {
    (window as any)[stKey as GlobalVarKey] = iGlobalVars[stKey]
})

// (window as any).app="12558"
export const initApp = async () => {
    console.log("88")
}