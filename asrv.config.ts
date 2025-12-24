import { defineConfig } from 'asrv'
import serverConfig from "./asrv/index"

export default defineConfig({
  port: 9000,
  $deps: ['./asrv/**/*.ts'],
  server: serverConfig,
})
