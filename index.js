function findMatching(drivers, name){
return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase() )
}
function fuzzyMatch(drivers, startName){
  return  drivers.filter(name => name.startsWith(startName))
}
 function matchName(drivers, data){
   let match = drivers.filter(drivers => drivers.name === data)
return match 
 }

     