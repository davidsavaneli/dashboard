export interface IRouteItems {
  path: string
  element: React.ReactNode
  children?: IRouteItems[]
}

export interface IRoutes {
  mainPath: string
  indexElement: React.ReactNode
  items: IRouteItems[]
}
