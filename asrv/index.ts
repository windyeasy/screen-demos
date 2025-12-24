import { defineServerConfig } from 'asrv'
import apiConfig from './api/index.ts'

export default defineServerConfig({
  mode: 'static',
  // 可以对API在进行拆分
  api: apiConfig,
})
