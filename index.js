function produceDrivingRange(blockRange){
  return function(start, end){
    startInt = parseInt(start.substring(0,2))
    endInt = parseInt(end.substring(0,2))
    distance = Math.abs(endInt - startInt)

    if(distance > blockRange){
      console.log(`${distance - blockRange} blocks out of range`)
      return `${distance - blockRange} blocks out of range`

    }else{
      console.log(`within range by ${blockRange - distance}`)
      return `within range by ${blockRange - distance}`

    };
  };
}

let eightBlockRange = produceDrivingRange(8)
eightBlockRange('10th', '20th');



function produceTipCalculator(percentage){
  return function(total){
    return percentage * total;
  }
}

//
//
// describe('produceTipCalculator', function(){
//   it('returns a function', function(){
//     expect(typeof produceTipCalculator()).to.equal('function')
//   })
//
//   it('configures the percentage tip returned', function(){
//     let tenPercentTip = produceTipCalculator(.10)
//     expect(tenPercentTip(50)).to.equal(5)
//     expect(tenPercentTip(30)).to.equal(3)
//   })
// })
//
// describe('createDriver', function(){
//   const Driver = createDriver()
//
//   it('returns a class that allows us to create a driver with a name attribute', function(){
//     expect(new Driver('Sam').name).to.equal('Sam')
//   })
//
//   it('increments the driverId each time a driver is created', function(){
//     expect(new Driver('Sam').id).to.not.equal(new Driver('Bob').id)
//   })
// })
// })
