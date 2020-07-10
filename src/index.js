import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ThemeProvider from './containers/ThemeProvider'
import './fonts/SF-Pro-Text/SF-Pro-Text-Heavy.otf'
import './fonts/SF-Pro-Text/SF-Pro-Text-Medium.otf'
import './fonts/SF-Pro-Text/SF-Pro-Text-Regular.otf'

//MUI
import { CssBaseline } from '@material-ui/core'

ReactDOM.render(
    <ThemeProvider>
        <CssBaseline />
        <App />
    </ThemeProvider>,
    document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
