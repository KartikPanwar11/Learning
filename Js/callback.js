function makeSandwich(bread,cb){
  console.log("Making sandwich with " + bread);
  cb();
}

function applySauce(sauce,cb){
  console.log("Applying " + sauce);
  cb();
}

function stuffSandwich(stuffing,cb){
  console.log("Stuffing sandwich with " + stuffing);
  cb();
}

function grillSandwich(temperature,cb){
  console.log("Grilling sandwich at " + temperature + " degrees");
  cb();
}

function servingSandwich(plate,cb){
  console.log("Serving sandwich on " + plate);
  cb();
}

makeSandwich("wheat",()=>{
  applySauce("mayo",()=>{
    stuffSandwich("cheese",()=>{
      grillSandwich(300,()=>{
        servingSandwich("plate",()=>{
          console.log("Sandwich is ready");
        })
      })
    })
  })
})