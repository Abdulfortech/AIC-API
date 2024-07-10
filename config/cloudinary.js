const cloudinary = require('cloudinary-react')

cloudinary.config({
    cloud_name:"",
    api_key:"",
    api_secret:""
})
exports.upload =(file)=>{
    return new Promise((resolve)=>{
        cloudinary.uploader.upload(
            file,
            (result)=>{
                resolve({url:result.url,id:result.id})
            },
            { resource_type: 'auto'}
        )
    })
}
module.exports={cloudinary}