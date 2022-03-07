const express=require("express")

const app=express()

app.use(logger)




app.get("/books",(req,res)=>{
    return res.send({ route: "/books"})
})

app.get("/libraries", checkPermission ,(req,res)=>{
    return res.send( { route: "/libraries", permission: true}

    )
})

app.get("/authors",checkPermission,(req,res)=>{
    return res.send({ route: "/authors", permission: true})
})



function logger(req,res,next){
    console.log("Before Module+Route Handler")
    next()
}




function checkPermission(req,res,next){
    
    if(req.path==="/libraries"){
       
        console.log("Libarrry invoke1")
    }else if(req.path==="/authors"){
        
        console.log("aurthor invoke")
    }else{
        req.role="Route is not found"
    }
    next()
}




app.listen(5000,()=>{
    console.log("Listing port 5000")
})