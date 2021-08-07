const express = require('express')
const app = express()

const data = [
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
        "vcsvN3ADrRs",
        "Vu94KGpV4Pg",
        "QZShA_a-5r8",
        "MLzK8R6XqUk",
        "L_jWHffIx5E",
        "afpNaQyHaDw",
        "0imhOmhRgfI",
        "246cTmV3vr8",
        "kGpBmrbtctY",
        "JUJ_cr11PSY",
        "6M-NkQAo-3E",
        "hH9M-m3WD0g",
        "BJk6gZuPKRE",
        "tRWpY3TV-j4",
        "W8x4m-qpmJ8",
        "VN-DG5MgDy0",
        "UXiwRmlCZ7E",
        "g3jCAyPai2Y",
        "waKumDkYrDY",
        "M5V_IXMewl4",
        "KF32DRg9opA",
        "G70S5fumHso",
        "z97qLNXeAMQ",
        "1tilu4vEh0k",
        "kLp_Hh6DKWc",
        "z5LW07FTJbI",
        "fPO76Jlnz6c",
        "SFzMs2SN--s",
        "E5DCW-7-hCQ",
        "4IXOM4Q2Apc",
        "oJlfuBHLf0o",
        "GCspMiRl2C0",
        "pcHjO3C-3TQ",
        "y-J4fJ85ARs",
        "7Kn0V5mpJe4",
        "YTeUdtilREo",
        "xe2FPP4lX14",
        "g2x2dEerjQo",
        "4GmLoVGmgDw",
        "Wjar_TtxnV4",
        "K3Qzzggn--s",
        "AuEjB_AO90Y",
        "2MtOpB5LlUA",
        "AOeY-nDp7hI",
        "6l6vqPUM_FE",
        "IIrCDAV3EgI",
        "Cfw85wT13Bg",
        "iX6ex5fYT7o",
        "GlUeW7IOSFc",
        "TwVBfMoSAu4",
        "2iNjot3oCxA",
        "3I8_Q5ftBpA",
        "7PwhYOGXvUA"
    ]

app.set('view engine', 'ejs');

/*app.use((req,res,next) => {
    res.header('Refresh','120; url=https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    next()
})*/

app.use(express.static(__dirname + "/public"));



app.get('/',(req,res) => {

    var item = data[Math.floor(Math.random()*data.length)];
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