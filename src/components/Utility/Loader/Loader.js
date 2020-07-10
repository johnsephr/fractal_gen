import React, { useState } from 'react'

// Loader
import ClipLoader from 'react-spinners/ClipLoader'

// MUI
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    root: {},
    container: {
        position: 'relative',
        width: 20,
        margin: 'auto'
    }
}))

const Loader = props => {
    const classes = useStyles(props)
    const [loading, setLoading] = useState(true)
    return (
        <div className={classes.container}>
            <ClipLoader
                className={classes.root}
                sizeUnit={"px"}
                size={20}
                color={'#68686E'}
                loading={loading}
            />
        </div>
    )
}

export default Loader