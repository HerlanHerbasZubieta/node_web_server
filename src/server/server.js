//const express = require('express');
import express from 'express'

//const path = require('path');
import path from 'path'

export const startServer = (options) =>{
    const {port, public_path = 'public'} = options
    const app = express()

    //par apoder usar middleware se usa la palabra use (express)
    app.use(express.static(public_path))

    app.get('/', (req, res) =>{
    const indexPath = path.join(__dirname + `../../../${public_path}/index.html`) //ubicar el archivo html
    res.senFile(indexPath)
    })

   app.listen(port, () =>{
    console.log(`Escuchando en en puerto ${port}`)
   })
}

