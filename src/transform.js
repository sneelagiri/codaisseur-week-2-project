module.exports.groupAdultsByAgeRange = function(objectArray) {

  const over18 = objectArray.filter(person => person.age >= 18)
  
  const result = {
    '20 and younger': [],
    '21-30': [],
    '31-40': [],
    '41-50': [],
    '51 and older': []
  }

  const categorize = over18.reduce((people, currentPerson) => {
    return currentPerson.age <= 20 ? 
    result['20 and younger'].push(currentPerson) 
    : currentPerson.age >= 21 && currentPerson.age <= 30 ?
    result['21-30'].push(currentPerson)  
    : currentPerson.age >= 31 && currentPerson.age <= 40 ?
    result['31-40'].push(currentPerson)  
    : currentPerson.age >= 41 && currentPerson.age <= 50 ?
    result['41-50'].push(currentPerson) 
    : result['51 and older'].push(currentPerson)  
  }, 0)

  if(result['20 and younger'].length == 0) {
    delete result['20 and younger']
  }
  if(result['21-30'].length == 0) {
    delete result['21-30']
  }
  if(result['31-40'].length == 0) {
    delete result['31-40'] 
  }
  if(result['41-50'].length == 0) {
    delete result['41-50'] 
  }
  if(result['51 and older'].length == 0) {
    delete result['51 and older']
  }
  return result

  // if(over18[0] === undefined) {
  //   return result
  // }
  // else {
  //   return over18
  // }
}