declare module '*.sass' {
  const styles: Record<string, string>

  export default styles
}

declare module '*.svg' {
  export const SVGComponent: React.FC<React.SVGAttributes<SVGAElement>>

  export default SVGComponent
}

declare module '*.png' {
  export const image: string

  export default image
}

declare module '*.jpg' {
  export const image: string

  export default image
}
