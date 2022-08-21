import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#424941"
      d="M.508.045H6.87v21.044H.508zM11.276.045h6.362v21.044h-6.362z"
    />
  </svg>
)

export default SvgComponent
