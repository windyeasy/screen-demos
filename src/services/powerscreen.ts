import request from '.'

export function getPowerScreenData() {
  return request.get({
    url: '/powerscreen',
  })
}
