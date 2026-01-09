import { defineApiConfig } from 'asrv'
import enrollmentscreen from './enrollmentscreen'
import monitoringCenterScreenApi from './monitoring-center-screen'
import powerscreenApi from './powerscreen'

export default defineApiConfig({
  // 加前缀
  api: {
    ...powerscreenApi,
    ...enrollmentscreen,
    ...monitoringCenterScreenApi,
  },
})
