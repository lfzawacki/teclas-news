import { userRoutes, dashboardRoutes } from 'aeria-ui'
import { AuthWall } from 'aeria-app-layout'
import { routes as autoRoutes } from 'vue-router/auto-routes'
import DashboardLayout from './pages/dashboard.vue'

export const routes = autoRoutes.concat(
  userRoutes(AuthWall),
  dashboardRoutes(DashboardLayout),
  [
    {
      path: '/',
      redirect: '/user/signin',
    },
  ],
)

