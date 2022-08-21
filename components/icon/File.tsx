import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.625 7v13.417c0 2.578-2.238 4.667-5 4.667-2.763 0-5-2.089-5-4.667V5.834c0-1.61 1.4-2.917 3.125-2.917s3.125 1.307 3.125 2.917v12.25c0 .641-.563 1.166-1.25 1.166-.688 0-1.25-.525-1.25-1.166V7H12.5v11.084c0 1.61 1.4 2.916 3.125 2.916s3.125-1.306 3.125-2.916V5.834c0-2.579-2.238-4.667-5-4.667-2.763 0-5 2.088-5 4.667v14.583c0 3.547 3.075 6.417 6.875 6.417s6.875-2.87 6.875-6.417V7h-1.875Z"
      fill="#424941"
    />
  </svg>
)

export default SvgComponent
