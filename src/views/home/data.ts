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
    // cover: 'https://wallpaperm.cmcm.com/398f4912b45260cca24eb3ec9b37e711.jpg',
    link: '/demos/powerscreen',
  },
  {
    title: 'picscreen',
    cover: 'democovers/picscreen.png',
    link: '/demos/picscreen',
  },
  {
    title: 'enrollmentscreen',
    // cover: 'democovers/picscreen.png',
    link: '/demos/enrollmentscreen',
  },
  {
    title: 'monitoring-center-screen',
    // cover: 'democovers/picscreen.png',
    link: '/demos/monitoring-center-screen',
  },
]
