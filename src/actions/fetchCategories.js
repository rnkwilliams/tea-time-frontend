export function fetchCategories() {
  dispatch
  fetch('http://localhost:3000/api/v1/teas')
    .then(resp => resp.json())
    .then(dataObj => console.log(dataObj.data))
}