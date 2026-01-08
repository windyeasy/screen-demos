import request from '.'

export function getEnrollmentscreenData() {
  return request.get({
    url: '/enrollmentscreen',
  })
}
