import { useState } from "react";
import Konva from "konva"
import { Circle, Layer, Stage } from "react-konva";
import useWindowDimensions from '../hooks/useWindowDimensions';

export interface SpinnerProps {

}

export function Spinner(props: SpinnerProps) {
    const [color, setColor] = useState<string>("green");
    const { height, width } = useWindowDimensions();

    function handleClick() {
        setColor(Konva.Util.getRandomColor());
    };

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Circle
                    x={width/2}
                    y={height/2}
                    radius={width/8}
                    fill={color}
                    shadowBlur={5}
                    onClick={handleClick}
                />
            </Layer>
        </Stage>
    );
  }
