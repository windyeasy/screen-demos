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

]
