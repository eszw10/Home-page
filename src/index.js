import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import "./style-home.css"

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)