import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="#A3A3A3"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12.933 10a1.1 1.1 0 0 0 .22 1.213l.04.04a1.332 1.332 0 0 1-.432 2.176 1.334 1.334 0 0 1-1.454-.289l-.04-.04a1.1 1.1 0 0 0-1.214-.22 1.1 1.1 0 0 0-.666 1.007V14a1.333 1.333 0 1 1-2.667 0v-.06A1.1 1.1 0 0 0 6 12.933a1.1 1.1 0 0 0-1.213.22l-.04.04a1.334 1.334 0 1 1-1.887-1.886l.04-.04a1.1 1.1 0 0 0 .22-1.214 1.1 1.1 0 0 0-1.007-.666H2A1.333 1.333 0 0 1 2 6.72h.06A1.1 1.1 0 0 0 3.067 6a1.1 1.1 0 0 0-.22-1.213l-.04-.04A1.333 1.333 0 1 1 4.693 2.86l.04.04a1.1 1.1 0 0 0 1.214.22H6a1.1 1.1 0 0 0 .667-1.007V2a1.333 1.333 0 1 1 2.666 0v.06A1.1 1.1 0 0 0 10 3.067a1.1 1.1 0 0 0 1.213-.22l.04-.04a1.333 1.333 0 1 1 1.887 1.886l-.04.04a1.1 1.1 0 0 0-.22 1.214V6a1.1 1.1 0 0 0 1.007.667H14a1.333 1.333 0 0 1 0 2.666h-.06a1.1 1.1 0 0 0-1.007.667Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
