import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={70}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 14.623c-1.25 0-2.45-.19-3.57-.538a1.065 1.065 0 0 0-1.02.226l-2.2 2.076c-2.83-1.359-5.15-3.538-6.59-6.217l2.2-2.085a.87.87 0 0 0 .25-.944 10.165 10.165 0 0 1-.57-3.368c0-.518-.45-.943-1-.943H4c-.55 0-1 .425-1 .943 0 8.859 7.61 16.038 17 16.038.55 0 1-.424 1-.943v-3.302c0-.519-.45-.944-1-.944Zm-1-3.302h2c0-4.689-4.03-8.49-9-8.49v1.886c3.87 0 7 2.953 7 6.604Zm-4 0h2c0-2.604-2.24-4.717-5-4.717V8.49c1.66 0 3 1.265 3 2.83Z"
      fill="#424941"
    />
    <circle cx={57.391} cy={2.391} r={2.391} fill="#424941" />
    <circle cx={57.391} cy={11} r={2.391} fill="#424941" />
    <circle cx={57.391} cy={19.609} r={2.391} fill="#424941" />
  </svg>
)

export default SvgComponent
