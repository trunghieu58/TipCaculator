

let bill= document.querySelector('input[name="bill"]')
let people= document.querySelector('input[name="people"]')
let rateEle = document.getElementById('rate')
let result= document.getElementById('result')


function getRate() {
    return rateEle.value
}


function getBill() {
   return Number.parseInt(bill.value)
}

function getPeople() {
    return Number.parseInt(people.value)
}


function caculate() {
    let a= getBill()
    let b= getPeople()
    let c= getRate()
    let tip= a*b*c/100
    result.innerHTML = '<h4>Tip Amount</h4>'+ tip
    bill.value = ''
    people.value = ''
    rateEle.value ='0'
    
}