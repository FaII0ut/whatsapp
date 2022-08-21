import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M14.208 13.207h-.724l-.257-.254a6.21 6.21 0 0 0 1.44-3.99c0-3.388-2.668-6.133-5.959-6.133-3.29 0-5.958 2.745-5.958 6.132 0 3.387 2.668 6.132 5.958 6.132a5.835 5.835 0 0 0 3.878-1.481l.247.264v.745l4.584 4.708 1.365-1.406-4.574-4.717Zm-5.5 0c-2.282 0-4.125-1.896-4.125-4.245s1.843-4.245 4.125-4.245c2.283 0 4.125 1.896 4.125 4.245 0 2.35-1.842 4.245-4.125 4.245Z"
        fill="#424941"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h22v22.641H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
