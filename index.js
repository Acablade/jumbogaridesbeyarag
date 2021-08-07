const express = require('express')
const app = express()

app.get('/',(req,res) => {
    
    res.set({
        'Refresh': '5; url=https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    })
    res.sendFile(__dirname +'/index.html')
})

app.listen(3000)