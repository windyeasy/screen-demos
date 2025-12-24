import { defineApiConfig } from 'asrv'
import powerscreenApi from './powerscreen'

export default defineApiConfig({
  // 加前缀
  api: {
    ...powerscreenApi,
  },
})
