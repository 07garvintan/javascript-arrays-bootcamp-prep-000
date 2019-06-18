var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array, element) {
  newArray = [element,...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element)
   return array
}

function addElementToEndOfArray(array,n) {
  newArray = [...array, n]
  return newArray
  
}

function destructivelyAddElementToEndOfArray(array,n) {
  
}