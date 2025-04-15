let myPromise = new Promise((resolve,reject)=>{
     let success= true;

     setTimeout(()=>{
        if(success){
            resolve("Operation successfull")
        }
        else{
            reject("Operation failed")
        }
     },2000)
})