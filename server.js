const express = require('express')
const app = express()
const PORT = 8000


const TechStaff = {
    "laptops":{
        
        "macbook_1":"mackbook pro 2021 M1 256 gig, mackbook Air 2021 gig 256, mackbook pro 2020 M1, 500gig",
        "mackbook_link":"https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__bsza6x4fldiq_large_2x.jpg",
        "hp":"HP Envy 13 (2021) The best 13-inch laptop,HP Pavilion Aero 13,HP Spectre x360 13",
        "hp_link":"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06731786.png"

    },
    "mobile_phones":{
        "iphones":"iphone 8+  gig 256 factory unlocked, iphone 11  64gig factory unlocked, iphone 12pro 256gig factory unlocked",
        "iphone_link":"https://images.macrumors.com/t/0Zj1WH6WzmS6tRd3uQIM1O_fiJg=/400x0/article-new/2016/05/talliphone8.jpg?lossy",
        "samsung":"galaxy s6 32gig, galaxy s9+ 64 gig, galaxy s20 132 gig",
        "samsung_link":"https://images.samsung.com/is/image/samsung/assets/africa_en/2202/pcd/smp/PCD_B_KV_Merchandising_264x264_mo.png?$264_264_PNG$"
    },
    "accessories":{
        "headset":"HP H200 Wired Stere, JBL Free WFH Wired, Cyber Acoustics, ASUS Republic",
        "headset_links":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFctmwX0oaRT0i_fg70UBdp7lm8uEB7sV5q8VafWTNVbyXOUphZFVcLIjb9JkKTKA3tk&usqp=CAU",
        "drives":"pendrive 32gig, pendrive 64gig, hauwai moderm, 500gig external hardrive",
        "drive_link":"https://www.tradeinn.com/f/13809/138091500/hp-v250w-usb-2.0-32gb-pendrive.jpg"
    },
    "unknown":{
        "unknown":"............................................",
        "unknown":"............................................",
        "unknown":"............................................",
        "unknown":"............................................",

    }
}

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get('/api/:addinfo',(req,res)=>{
    const addinfo = req.params.addinfo.toLowerCase()
    if(TechStaff[addinfo]){
        res.json(TechStaff[addinfo])
    }else{
        res.json(TechStaff['unknown'])
    }
    
})
app.listen(PORT, ()=>{
    console.log('this is the port')
})