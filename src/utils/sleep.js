export  const sleep = (ms, type)=>{
    if (type==="reject") {
        return new Promise((resolve, reject)=>{
            setTimeout(reject, ms)
        })
    }
    return new Promise(resolve=>{
        setTimeout(resolve, ms||2000)
    })

}

export default sleep