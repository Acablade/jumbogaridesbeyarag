const express = require('express')
const app = express()

/*app.use((req,res,next) => {
    res.header('Refresh','10; url=https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    next()
})*/

app.use(express.static(__dirname + "/public"));



app.get('/',(req,res) => {
    res.sendFile('index.html')
    /*res.set({
        'Access-Control-Expose-Headers': 'ETag',
        'Refresh': '5; url=https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    })*/
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });