// 定义小仓库数据类型
export interface UserState {
  token: string | null
}

// route
import type { RouteRecordRaw } from 'vue-router'
export interface typeRoute {
  menuRoutes: RouteRecordRaw[]
}
