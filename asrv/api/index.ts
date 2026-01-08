import { defineApiConfig } from 'asrv'
import enrollmentscreen from './enrollmentscreen'
import powerscreenApi from './powerscreen'

export default defineApiConfig({
  // 加前缀
  api: {
    ...powerscreenApi,
    ...enrollmentscreen,
  },
})
