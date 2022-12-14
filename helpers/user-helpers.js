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
},

doLogin:(userData)=>{
    return new Promise(async (resolve,reject)=>{
        let loginStatus = false
            let response = {}
            let user = await db.get().collection(collections.USER_COLLECTION).findOne({Email:userData.Email})
            if(user){
                bcrypt.compare(userData.Password,user.Password).then((status)=>{
                    if(status){
                        console.log("login success");
                    }else{
                        console.log("login failed");
                    }
                })
            }else{
                console.log('login failed');
            }
        })
    }
}