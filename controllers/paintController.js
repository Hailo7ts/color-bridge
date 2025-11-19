const express = require('express')
const Paint = require('../models/paintModel')
const Avery = require('../models/averyModel')
const Behr = require('../models/behrModel')
const BenjaminMoore = require('../models/benjaminMooreModel')
const Colorhouse = require('../models/colorhouseModel')
const Dic = require('../models/dicModel')
const Dunnedwards = require('../models/dunnEdwardsModel')
const Dutch = require('../models/dutchModel')
const FarrowBall = require('../models/farrowBallModel')
const Hks = require('../models/hksModel')
const Hl = require('../models/hlModel')
const Ikea = require('../models/ikeaModel')
const Kilz = require('../models/killzModel')
const Kobra = require('../models/kobraModel')
const Mpc = require('../models/mpcModel')
const Neenah = require('../models/neenahModel')
const Ppg = require('../models/ppgModel')
const Ral = require('../models/ralModel')
const SherwinWilliams = require('../models/sherwinWilliamsModel')
const Toyo = require('../models/toyoModel')
const Trumatch = require('../models/trumatchModel')
const Valspar = require('../models/valsparModel')
const Vista = require('../models/vistaModel')

const allBrandsArr = [Avery, Behr, BenjaminMoore, Colorhouse, Dic, Dunnedwards, Dutch, FarrowBall, 
    Hks, Hl, Ikea, Kilz, Kobra, Mpc, Neenah, Ppg, Ral, SherwinWilliams, Toyo, Trumatch, Valspar, Vista]

const getHomePage = async (request, response) => {
    try{
        const averyBook = await Avery.find()
        response.render('homePage', { info: averyBook})
    }catch(err){
        console.log(err)
    }
}

const getConvertPage = async (request, response) => {
    try{
        const avery = await Avery.find()
        response.render('convertPage', { info: avery})
    }catch(err){
        console.log(err)
    }
}

const getMatchPage = async (request, response) =>{
    try{
        response.render('matchPage')
    }catch(err){
        console.log(err)
    }
}



//add user color to be matched
const addMatch = async (request, response) =>{
    try{
        //create new paint obj
        const paint = new Paint({
            hex: request.body.hex,
            colorCode: request.body.colorCode,
            brand: request.body.brand
        })

        //take input brand and search db for hex value
        const brandSelected = request.body.brand
        //match obj holder
        let brandFromDB = {}
        

        //based on brand input find hex from db collections 
        switch (brandSelected) {
            case "anyBrand":

                //call any brand function

                //brand function
                async function  brandFindMatch (){
                    let colorMatch = null
                    let i = 0

                    //check each collection while in array and colorMatch is null
                    while(colorMatch === null && i<= allBrandsArr.length-1){
                        
                        //check collection in index                      
                        let match = await allBrandsArr[i].findOne({hex: paint.colorCode});
                        
                        //if match has obj assign colorMatch to result
                        if(match != null){
                            colorMatch = await allBrandsArr[i].findOne({hex: paint.colorCode});
                        }

                        i++
                    }                        
              
                    //return match
                    return colorMatch
                }
                brandFromDB = await brandFindMatch()
                //let matchFound = await brandFindMatch()
                //console.log(`matchFound ${matchFound}`)

                break;
            case "avery":
                brandFromDB = await Avery.findOne({hex: paint.colorCode});
                break;
            case "behr":
                brandFromDB = await Behr.findOne({hex: paint.colorCode});
                break;
            case "benjamin-moore":
                brandFromDB = await BenjaminMoore.findOne({hex: paint.colorCode});
                break;
            case "colorhouse":
                brandFromDB = await Colorhouse.findOne({hex: paint.colorCode});
                break;
            case "dic":
                brandFromDB = await Dic.findOne({hex: paint.colorCode});
                break;
            case "dunn-edwards":
                brandFromDB = await Dunnedwards.findOne({hex: paint.colorCode});
                break;
            case "dutch":
                brandFromDB = await Dutch.findOne({hex: paint.colorCode});
                break;
            case "farrow-ball":
                brandFromDB = await FarrowBall.findOne({hex: paint.colorCode});
                break;
            case "hks":
                brandFromDB = await Hks.findOne({hex: paint.colorCode});
                break;
            case "hl":
                brandFromDB = await Hl.findOne({hex: paint.colorCode});
                break;
            case "ikea":
                 brandFromDB = await Ikea.findOne({hex: paint.colorCode});
                break;
            case "kilz":
                brandFromDB = await Kilz.findOne({hex: paint.colorCode});
                break;
            case "kobra":
                brandFromDB = await Kobra.findOne({hex: paint.colorCode});
                break;
            case "mpc":
                brandFromDB = await Mpc.findOne({hex: paint.colorCode});
                break;
            case "neenah":
                brandFromDB = await Neenah.findOne({hex: paint.colorCode});
                break;
            case "ppg":
                brandFromDB = await Ppg.findOne({hex: paint.colorCode});
                break;
            case "ral":
                brandFromDB = await Ral.findOne({hex: paint.colorCode});
                break;
            case "sherwin-williams":
                brandFromDB = await SherwinWilliams.findOne({hex: paint.colorCode});
                break;
            case "toyo":
                brandFromDB = await Toyo.findOne({hex: paint.colorCode});
                break;
            case "trumatch":
                brandFromDB = await Trumatch.findOne({hex: paint.colorCode});
                break;
            case "valspar":
                brandFromDB = await Valspar.findOne({hex: paint.colorCode});
                break;
            case "vista":
                brandFromDB = await Vista.findOne({hex: paint.colorCode});
                break;
            default:
                console.log('brand not found')
        }

        console.log(`brandFromDB: ${brandFromDB}`)

        //display paint match
        response.render('convertPage', { info: brandFromDB})
       
        //save paint to db
        //await paint.save()

        //console.log('paint added')
    }catch(err){
        console.log(err)
    }
}
  


const addPaintPage = (request, response)=>{
    response.render('addPaint'/*, {valData: valData }*/)
}


//add a plant
const addPaint = async (request, response) =>{
    try{
        
        //create new plant obj
        for(let i=0; i<= averyData.length; i++){
            
            const avery = new Paint({
                name: averyData[i].name,
                label: averyData[i].label,
                hex: averyData[i].hex
            })



            //save plant to db
            await avery.save()
            //response.redirect('/')
            //console.log('paint added')
        }
        
    }catch(err){
        console.log(err)
    }
}

module.exports = {
  getHomePage,
  getConvertPage,
  getMatchPage,
  addMatch,
    addPaintPage,
    addPaint,
}