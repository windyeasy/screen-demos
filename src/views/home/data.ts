export interface DemoInfo {
  title: string
  cover?: string
  isAssetsImg?: boolean
  link: string
}

export type DemosInfo = DemoInfo[]

export const demosInfo: DemosInfo = [
  {
    title: 'powerscreen',
    cover: 'democovers/powerscreen.png',
    link: '/demos/powerscreen',
  },
  {
    title: 'picscreen',
    cover: 'democovers/picscreen.png',
    link: '/demos/picscreen',
  },
  {
    title: 'enrollmentscreen',
    cover: 'democovers/demo3.png',
    link: '/demos/enrollmentscreen',
  },
  {
    title: 'monitoring-center-screen',
    cover: 'democovers/demo4.png',
    link: '/demos/monitoring-center-screen',
  },
]
