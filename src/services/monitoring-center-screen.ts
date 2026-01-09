import request from '.'

export function getMonitoringCenterScreenData() {
  return request.get({
    url: '/monitoringCenterScreen',
  })
}
