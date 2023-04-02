export default function Arrow(props) {
  const lightSVG = () => {
    return (<svg width={85} height={85} viewBox="0 0 22.606 21.17" {...props}>
    <g transform="translate(-23.009 30.844)">
      <path
        style={{
          fill: "none",
          stroke: "#fff",
          strokeWidth: 0.5,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        d="m27.78-22.526 6.51 7.093 6.554-7.093"
      />
      <path
        style={{
          fill: "#fff",
          fillOpacity: 0,
          stroke: "#fff",
          strokeWidth: 0.465,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        d="m29.935-23.055 4.355 4.714 4.354-4.714z"
      />
      <ellipse
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 1.5,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        cx={34.312}
        cy={-20.259}
        rx={10}
        ry={10}
      />
    </g>
  </svg>)
  }

  return lightSVG();
}