//your JS code here. If required.
function countParents(element) {
  let count = 0;
  while (element.parentNode) {
    count++;
    element = element.parentNode;
    // Stop counting when we reach the document object to avoid counting it as a parent
    if (element === document) {
      break;
    }
  }
  return count;
}

// Example usage:
// Assume you have an element with the ID 'myElement' in your HTML document
const myElement = document.getElementById('level');
const numberOfParents = countParents(myElement);
alert("The level of the element is : "+ numberOfParents);
