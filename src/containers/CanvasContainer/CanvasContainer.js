

import React, { Fragment, useRef, useState, useEffect } from 'react'

// MUI
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {},
    text: {
        flexGrow: 1
    }
}))

// render canvas initially and run the 'draw fractal' code,
// button onClick destroys canvas element and creates a new one, 
// then the 'draw fractal' code runs to draw a new fractal.

// so i need a function that 

const CanvasContainer = props => {
    const classes = useStyles(props)
    const [genTrigger, setGenTrigger] = useState(0)
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas) {
            const ctx = canvas.getContext('2d')
            const maxLevel = 5;
            const branches = 2;
            const sides = Math.floor((Math.random() * 10) + 3);

            // save canvas position before translation begins
            ctx.save();

            // push canvas to middle of the screen on initial render
            if (genTrigger === 0) {
                // console.log(genTrigger)
                ctx.translate(canvas.width / 2, canvas.height / 2);
            }

            // on button click, restore canvas position and clear the canvas
            if (genTrigger >= 1) {
                // ctx.restore();
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                // setGenTrigger(0);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.translate(canvas.width / 2, canvas.height / 2);
            }

            // the angle at which the branches split into smaller ones
            const angle = Math.PI * 2 * 0.85;

            function drawLine(level) {
                if (level > maxLevel) return;

                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(0, 0);
                // ctx.moveTo(canvas.width / 2, canvas.height / 2)
                ctx.lineTo(200, 0);
                ctx.stroke();

                for (let i = 1; i < branches + 1; i++) {
                    ctx.save();
                    ctx.translate(200 * i / (branches + 1), 0);
                    ctx.scale(0.5, 0.5);
                    ctx.save();

                    ctx.rotate(angle);
                    drawLine(level + 1);
                    ctx.restore();
                    ctx.save();

                    ctx.rotate(-angle);
                    drawLine(level + 1);
                    ctx.restore();

                    ctx.restore();
                }
            }

            for (let i = 0; i < sides; i++) {
                drawLine(0);
                ctx.rotate(Math.PI * 2 / sides);
            }
        }
    }, [genTrigger])

    return (
        <Fragment>
            <canvas
                ref={canvasRef}
                width={window.innerWidth}
                height={window.innerHeight}
                style={{
                    position: 'relative',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'black'
                }}
            />
            <button onClick={() => setGenTrigger(genTrigger + 1)}>Generate Fractal</button>
            {/* <button onClick={() => renderCanvas()}>Generate Fractal</button> */}

        </Fragment>
    )
}

export default CanvasContainer
