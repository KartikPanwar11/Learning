const GITHUB_API = 'https://api.github.com/users/KartikPanwar11'

    fetch(GITHUB_API).then((response)=>{
        if(!response.ok){
            throw new Error('Network error')
        }
        return response.json()
    })
    .then((data)=>{
        console.log('Waiting for the data');
        return data;
    })

    .then((data)=>{
        console.log(data)
    })
    // .then((recieving)=>{
    //     console.log('Please wait while we recieve your data')
    // })
    // .then((filtering)=>{
    //     console.log("Filtering it")
    // })
    // .then((printing)=>{
    //     console.log('Printing the data')
    // })
    .catch((error)=>{
        console.log('something went wrong')
    })
    .finally(()=>{
        console.log('Task has been completed')
    })