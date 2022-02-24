function sortProduct(array) {
    let totals = []
    array.forEach((e, i) => {
      let totalObj = {
        total: e*(i+1),
        i: i
      }
      totals.push(totalObj)
    })
    totals.sort((a, b) => a.total - b.total)
    let newArr = []
    totals.forEach(e => newArr.push(array[e.i]))
    console.log(totals) 
  }

sortProduct([23, 2, 3, 4, 5])