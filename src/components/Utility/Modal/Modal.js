import React, { useState } from 'react'

// MUI
import { Modal, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    root: {
        height: 'auto'
    },
    modal: {
        position: 'absolute',
        margin: 'auto',
        height: 200,
        width: 300,
        backgroundColor: theme.palette.modal.background,
        color: theme.palette.modal.text,
        padding: 10,
        borderRadius: 5
    },
    modalContent: {
        outline: 0
    },
    modalHeader: {
    },
    button: {
        margin: 'auto'
    }
  }))

const ButtonModal = props => {
    const classes = useStyles(props)
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Button type="button" onClick={handleOpen}>
                Open Modal
            </Button>
            <Modal
                className={classes.modal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div className={classes.modalContent}>
                    <h2 id="simple-modal-title" className={classes.modalHeader}>Text in a modal</h2>
                    <p id="simple-modal-description" className={classes.modalBody}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </p>
                    {/* <Button className={classes.button}>Close</Button> */}
                </div>
            </Modal>
        </div>
    )
}

export default ButtonModal