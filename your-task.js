function fetchData(){
    return new Promise((userName)=>{
        setTimeout(()=>{
             userName("User Loaded Sadre")
        },3000)
    })
}

async function getData(){
   const user = await fetchData()
   console.log(user);
   
}

getData()
