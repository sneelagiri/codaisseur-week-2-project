module.exports.groupAdultsByAgeRange = function(objectArray) {
  const over18 = objectArray.filter(person => person.age >= 18)
  
  if(over18[0] === undefined) {
    return {}
  }
  else {
    return over18
  }
}