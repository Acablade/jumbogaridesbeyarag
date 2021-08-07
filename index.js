const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(__dirname));

app.get('/',(req,res) => {
    
    res.set({
        'Refresh': '5; url=https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    })
    res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(3000)