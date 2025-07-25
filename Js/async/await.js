// async function fetchData() {
//     const response = await fetch('https://api.github.com/users/KartikPanwar11')
//     if (!response.ok){
//         alert('Network resposne is not okay');
//         return;
//     }
//     const data = await response.json();
//     console.log(data);
// }
// fetchData();

async function fetchData() {
    const response = await fetch('https://api.github.com/users/KartikPanwar11')
    if (!response.ok){
        alert('Network resposne is not okay');
        return;
    }
    try{
        const data = await response.json();
        console.log(data);
    }
    catch{
        console.log('There was an error')
    }
}