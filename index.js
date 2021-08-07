const express = require('express')
const app = express()

const data = {
    videos:[
        "S0yLbdZRu3A",
        "_S7WEVLbQ-Y",
        "DN0gAQQ7FAQ",
        "O8MtMb2RkKg",
        "AIobdZ8OGso",
        "G1IbRujko-A",
        "wDgQdr8ZkTw",
        "zecnwqXe850",
        "VCbH_xY4B9o",
        "wMeKOT-W-mE",
        "SkgTxQm9DWM",
        "9hhMUT2U2L4",
        "2kUq0X8jJRI",
        "NqM032dnPtk",
        "S5o9g22BdXw",
        "fEZTtlgX3Vo",
        "yf-SKbbQJHY",
        "8lTY6LWGoXY",
        "Jz5udRnFVTQ",
        "vcsvN3ADrRs"
    ]
}

app.set('view engine', 'ejs');

/*app.use((req,res,next) => {
    res.header('Refresh','120; url=https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    next()
})*/

app.use(express.static(__dirname + "/public"));



app.get('/',(req,res) => {

    var item = data.videos[Math.floor(Math.random()*data.videos.length)];
    res.render("index.ejs",{
        url:item
    })
    /*res.set({
        'Access-Control-Expose-Headers': 'ETag',
        'Refresh': '5; url=https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    })*/
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });