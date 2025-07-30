// Not optimized

// function search(query){
//     console.log(`Seaching for: ${query}`)
// }

// search('vikas')
// search('vikas Kumar')
// search('Vikas Kumar Singh')

// debouncing method
// function debounce(fun,delay){
//     let timeout;
//     return function(...args){ //calls function coz we updated the things
//         clearTimeout(timer); //clears the timeout
//         timer = setTimeout(() => { //sets new timer
            
//         }, delay);
//     }
// }
// function search(query){
//         console.log(`Seaching for: ${query}`)
// }

// let searchWithDebounce = debounce(search,2000); // to call the function
// searchWithDebounce('Kartik');
// searchWithDebounce('Kartik Panwar');

//Throttling

function throttle(fun,limit){
    let lastCall = 0;         //last called timer
    return function(...args){ // pass the func
        const now = Date.now;   //current call
        if (now-lastCall >= limit){
            lastCall = now; //updates the time
            fun(...args)
        }

    }
}

function search(query){
        console.log(`Seaching for: ${query}`)
}

let searchWithThrottle = debounce(search,2000); // to call the function
searchWithThrottle('Kartik');
searchWithThrottle('Kartik Panwar');