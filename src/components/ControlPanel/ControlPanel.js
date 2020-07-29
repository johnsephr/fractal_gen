import React, { useContext } from 'react'

// react-input-number
import InputNumber from 'react-input-number'

// react-color
import { ChromePicker } from 'react-color';


// MUI
import { Button, Grid, Typography, Checkbox, FormGroup, FormControlLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// contexts
import { ControlPanelContext } from '../../contexts/ControlPanelContext'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {
        height: '100%',
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    grid: {
        height: '100%'
    },
    gridItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'flex-start'
    },
    label: {
        color: theme.palette.primary.main,
        marginTop: 10
    },
    input: {
        height: 50,
        width: 100,
        fontSize: 20,
        outline: 'none',
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        textAlign: 'center',
        background: 'transparent',
        borderRadius: 4,
    },
    trackMouseFormControl: {
        position: 'absolute',
        right: 20,
        top: 20,
    }
}))

const ControlPanel = props => {
    const classes = useStyles(props)
    const {
        genTrigger,
        setGenTrigger,
        branches,
        setBranches,
        angle,
        setAngle,
        levels,
        setLevels,
        strokeStyle,
        setStrokeStyle,
        downloadImage,
        setDownloadImage
    } = useContext(ControlPanelContext);

    // update stroke style on color change
    const handleColorChange = (color, event) => {
        setStrokeStyle(color.hex)
    }

    return (
        <div className={classes.root}>
            <FormGroup row style={{ marginBottom: 20 }}>
                <Grid container>
                    <Grid item xs={12} className={classes.gridItem}>
                        <Button variant="contained" color="primary" onClick={() => setGenTrigger(genTrigger + 1)} style={{
                            height: 50
                        }}>
                            Generate Fractal
                        </Button>
                        {/* < FormControlLabel
                            className={classes.trackMouseFormControl}
                            control={
                                < Checkbox
                                    checked={random}
                                    onChange={onCheckboxChange}
                                    name="random"
                                    color="primary"
                                    style={{
                                        borderColor: 'white'
                                    }}
                                />
                            }
                            label="Randomize"
                        /> */}
                    </Grid>
                </Grid>
            </FormGroup>

            <FormGroup row>
                <Grid container>
                    <Grid item xs={4} className={classes.gridItem}>
                        <InputNumber className={classes.input} step={1} value={branches} onChange={setBranches} enableMobileNumericKeyboard />
                        <Typography className={classes.label}>Branches</Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.gridItem}>
                        <InputNumber className={classes.input} step={1} value={angle} onChange={setAngle} enableMobileNumericKeyboard />
                        <Typography className={classes.label}>Angle</Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.gridItem}>
                        <InputNumber className={classes.input} step={1} value={levels} min={1} max={5} onChange={setLevels} enableMobileNumericKeyboard />
                        <Typography className={classes.label}>Levels</Typography>
                    </Grid>

                    <Grid item xs={12} className={classes.gridItem} style={{
                        paddingTop: 20
                    }}>
                        <Button variant='contained' color='primary' onClick={() => setDownloadImage(!downloadImage)}>Download</Button>
                    </Grid>

                    <Grid item xs={12} className={classes.gridItem} style={{
                        paddingTop: 20
                    }}>
                        <ChromePicker color={strokeStyle} onChange={handleColorChange} disableAlpha />
                    </Grid>
                </Grid>
            </FormGroup>
        </div>
    )
}

export default ControlPanel