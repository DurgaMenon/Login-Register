var db=require('../config/connection')
var collection = require('../config/collections')
const bcrypt = require('bcrypt')
const objectId = require("mongodb").ObjectId;
module.exports={
    doSignup:(userData)=>{
        return new Promise(async(resolve,reject)=>{
        userData.Password=await bcrypt.hash(userData.Password,10) 
           // db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data)=>{ 
                db.get().collection(collections.USER_COLLECTION).insertOne(userData).then((data)=>{
                    resolve(data.ops[0])
    })
})
}
}