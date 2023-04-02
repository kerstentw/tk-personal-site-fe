import "../css/HexGrid.css";
import React, {useState, useEffect} from "react";
import times from "lodash/times";
import PropTypes from "prop-types";
import isFunction from "lodash/isFunction";
import isEmpty from "lodash/isEmpty";
import Hexagon from "react-hexagon";
import PAGE_SECTIONS from "../../constants/pageSections";


const getGridDimensions = (gridWidth, gridHeight, N) => {
  const a = (5 * gridHeight) / (gridWidth * Math.sqrt(2));
  const b = gridHeight / (2 * gridWidth) - 2;

  const columns = Math.ceil((-b + Math.sqrt(b * b + 4 * N * a)) / (2 * a));

  const hexSize = Math.floor(gridWidth / (3 * columns + 0.5));
  const rows = Math.ceil(N / columns);

  return {
    columns,
    hexSize,
    hexWidth: hexSize * 1.95,
    hexHeight: Math.ceil(hexSize * Math.sqrt(3)),
    rows
  };
};



const tryInvoke = (func, params = [], defaultValue = null) => {
  return isFunction(func) ? func(...params) : defaultValue;
};



function HexagonGrid (props) {
  const {
    hexagons,
    gridHeight,
    gridWidth,
    renderHexagonContent,
    hexProps,
    x,
    y,
    enterProps
  } = props;

  const [state, setState] = useState({
    columns: 1,
    hexSize: 1,
    hexWidth: 1,
    hexHeight: 1,
    rows: 0
  });

  const [hovering, setHovering] = useState(false); 

  useEffect(() => {
    if (!isEmpty(hexagons) && gridWidth > 0 && gridHeight > 0) {
      setState(getGridDimensions(gridWidth, gridHeight, hexagons.length));
    }
  }, [hexagons, gridWidth, gridHeight]);

  const getHexDimensions = (row, col) => {
    const dimensions = {
      width: `${state.hexWidth}px`,
      height: `${state.hexHeight}px`,
      x: col * state.hexSize * 3
    };
    if (row % 2 === 1) {
      dimensions.x += state.hexSize * (3 / 2);
    }
    return dimensions;
  };

  const getRowDimensions = (row) => {
    const dimensions = {
      y: `${row * (state.hexSize * (Math.sqrt(3) / 2))}px`,
      height: `${state.hexHeight}px`,
      width: gridWidth
    };
    if (row % 2 === 0) {
      dimensions.marginLeft = `${(state.hexSize / 2) * 3}px`;
    }
    return dimensions;
  };

  return (
    <svg width={gridWidth} height={gridHeight} x={x} y={y}>
      {times(state.rows, (row) => {
        const remaining = hexagons.length - row * state.columns;
        const columns = remaining < state.columns ? remaining : state.columns;
        const rowDim = getRowDimensions(row);
        return (
          <svg
            key={row}
            width={rowDim.width}
            height={rowDim.height}
            y={rowDim.y}
          >
            {times(columns, (col) => {
              const iHexagon = row * state.columns + col;
              const hexagon = hexagons[iHexagon];
              const hexDim = getHexDimensions(row, col);
              const _hexProps = tryInvoke(hexProps, [hexagon, hovering], hexProps);
              const _enterProps = tryInvoke(enterProps, [hexagon, setHovering], enterProps);

              return (
                <svg
                  key={iHexagon}
                  height={hexDim.height}
                  width={hexDim.width}
                  x={`${hexDim.x}px`}
                >
                  <Hexagon {..._hexProps} hexProps={{..._enterProps}} flatTop>
                    {tryInvoke(renderHexagonContent, [hexagon, hovering], <tspan />)}
                  </Hexagon>
                </svg>
              );
            })}
          </svg>
        );
      })}
    </svg>
  );
};

HexagonGrid.propTypes = {
  gridWidth: PropTypes.number.isRequired,
  gridHeight: PropTypes.number.isRequired,
  hexagons: PropTypes.arrayOf(PropTypes.any).isRequired,
  hexProps: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  renderHexagonContent: PropTypes.func,
  x: PropTypes.number,
  y: PropTypes.number,
};

HexagonGrid.defaultProps = {
  hexProps: {},
  renderHexagonContent: null,
  x: 0,
  y: 0
};


const HexGrid = (props) => {
  const getHexProps = (hexagon, hovering) => {
    return {
      style: {
        fill: hovering !== hexagon.label ? "rgba(0,0,0,0)" : hexagon.hoverStyle.fill,
        stroke: "black",
      },
      onClick: () => window.location = hexagon.link
    };
  };

  const getEnterProps = (hexagon, setHovering) => {
    return {
      onMouseEnter: ()=>{setHovering(hexagon.label); props.setCurrentSection(hexagon)},
      onMouseLeave: ()=>{setHovering(null); props.setCurrentSection(null)}
    }
  }

  const renderHexagonContent = (hexagon, hovering) => {
    return (
      <text
        x="50%"
        y="60%"
        fontSize={hexagon.label !== hovering? 60 : 75}
        textAnchor="middle"
        fill = {hexagon.label !== hovering? "black" : hexagon.hoverStyle.color}
        pointerEvents = "none"
        
      >
        {hexagon.label}
      </text>
    );
  };

  let hexagons = props.sections;

  return (
    <HexagonGrid
      gridWidth={ window.innerWidth < 900? 200 : 400}
      gridHeight={window.innerWidth < 900? 700 : 400}
      hexagons={hexagons}
      hexProps={getHexProps}
      renderHexagonContent={renderHexagonContent}
      enterProps={getEnterProps}
    />
  );
};

export default function HexMenu(props) {
    const [currentSection, setCurrentSection] = useState(null);

    if (currentSection) {
      props.setCurrentSection(currentSection);
    }

    return (
        <div>
          <HexGrid sections={ PAGE_SECTIONS } setCurrentSection={setCurrentSection}/>
        </div>
    )
}