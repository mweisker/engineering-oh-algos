function trackGeneralSuppliers(newSuppliers, previousSuppliers) {
  const newArray = newSuppliers.split(',');
  const previousArray = previousSuppliers.split(',');
  const returnObj = {
    toSend: new Set(),
    total: new Set()
  }
  for (let i = 0; i < previousArray.length; i++) {
    const add = previousArray[i].trim();
    returnObj.total.add(add)
  }
  console.log(returnObj)
  for (let i = 0; i < newArray.length; i++) {
    const send = newArray[i].trim();
    if (!returnObj.total[send]) {
      returnObj.toSend.add(send);
      returnObj.total.add(send);
    }
  }

  const letters = new Set();
  letters.add('a')
  letters.add('b')
  letters.add('b')
  console.log(letters);

  return returnObj;
}

console.log(trackGeneralSuppliers('"Platt", "Stoneway"', '"North Coast", "Stoneway", "Wesco", "Wilbert Precast"'))


const findTotalSent = (newSuppliers, previousSuppliers) => {
  const newArray = newSuppliers.split(',');
  const previousArray = previousSuppliers.split(',');
  const output = []
  for (let i = 0; i < previousArray.length; i++) {
    const add = previousArray[i].trim();
    output.push(add)
  }
  for (let i = 0; i < newArray.length; i++) {
    const send = newArray[i].trim();
    if (!output.includes(send)) output.push(send)
  }
  return output;
}

console.log(findTotalSent('"Platt", "Stoneway"', '"North Coast", "Stoneway", "Wesco", "Wilbert Precast"'))

const findNew = (newSuppliers, previousSuppliers) => {
  const newArray = newSuppliers.split(',');
  const previousArray = previousSuppliers.split(',');
  const output = {};
  const alreadySent = {}
  for (let i = 0; i < previousArray.length; i++) {
    const add = previousArray[i].trim();
    alreadySent[add] = true
  }
  console.log(alreadySent)
  for (let i = 0; i < newArray.length; i++) {
    const send = newArray[i].trim();
    if (!alreadySent[send]) output[send] = true
  }
  return output;
}

console.log(findNew('"Platt", "Stoneway"', '"North Coast", "Stoneway", "Wesco", "Wilbert Precast"'))
