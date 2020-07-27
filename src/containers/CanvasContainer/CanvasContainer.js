

import React, { Fragment, useRef, useContext, useEffect } from 'react'

// MUI
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// contexts
import { ControlPanelContext } from '../../contexts/ControlPanelContext';

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {},
    text: {
        flexGrow: 1
    }
}))

const CanvasContainer = props => {
    const classes = useStyles(props)
    const { genTrigger, branchesCount, angleValue, random } = useContext(ControlPanelContext);
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas && branchesCount && angleValue) {

            // init canvas as ctx
            const ctx = canvas.getContext('2d')

            //
            const maxLevel = 5;

            // the amount of branches that come off of the previous branch
            const branches = 2;

            // the amount of "branches" or sides the fractal will have
            const sides = random ? Math.floor((Math.random() * 10) + 3) : branchesCount;

            // save canvas position before translation begins
            ctx.save();

            // move canvas to corner of screen to clear previous drawing
            ctx.setTransform(1, 0, 0, 1, 0, 0);

            // clear previous drawing
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // push the canvas (back) to the middle of the screen
            ctx.translate(canvas.width / 2, (canvas.height / 2) + -50);

            // the angle at which the branches split into smaller ones
            const angle = Math.PI * 2 * angleValue;

            // (recursive) function to draw fractal
            function drawLine(level) {
                if (level > maxLevel) return;

                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(0, 0);
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
    }, [genTrigger, branchesCount, angleValue, random])

    return (
        <Fragment>
            <canvas
                ref={canvasRef}
                width={window.innerWidth}
                height={window.innerHeight - 150}
                style={{
                    position: 'relative',
                    top: 0,
                    left: 0,
                    background: 'black'
                }}
            />
        </Fragment>
    )
}

export default CanvasContainer
