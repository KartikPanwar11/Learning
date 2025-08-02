import fs from 'fs';

fs.writeFileSync('./kartik.txt','revise krke aana');
// to write async it will do it through writeFile
// for async just go with writeFileSync

fs.writeFile('file.pdf','hello world',(err)=>{
    if (err){
    console.log('Error')}
    else{
        console.log('File Created')
    }
})


// READ


// async
let output = fs.readFileSync("kartik.txt",'utf-8',(err)=>{
    if (err) {
        console.log('ERROR')
    } else{
        console.log("DaTa")
    }
})
console.log(output)

// sync
// let output = fs.readFileSync('file.pdf','utf-8')
// console.log(output)

// APPEND

  //  sync
fs.appendFileSync('kartik.txt','\nThis is 2nd line');


  // async
fs.appendFile('kartik.txt','\nThis is 3rd addition',(err)=>{
    if(err){
        console.log('There is an error')
    }else{
        console.log('File has been updated successfully')
    }
})


// Extra
function clicker(){
    console.log('Clicked')
    const date = Date.now()
    fs.writeFileSync('log.txt',
                    date.toString())
                    // ,'utf-8','\n1st entry')
}
clicker()

// delete
fs.unlinkSync('log.txt')

// rename

fs.renameSync('kartik.txt','yo.txt')
