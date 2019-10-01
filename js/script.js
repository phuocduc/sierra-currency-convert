// async function getConvertValue(conversion,amount)
// {
//     const api = `https://free.currconv.com/api/v7/convert?q=${conversion}&compact=y&apiKey=e213d359c5b51eabb964`
    
//     const json = await fetch(api)
//     const result = await json.json()
//     console.log(result[conversion])
//     console.log(amount)
//     return result[conversion].val * amount
    
    
// }

// async function convertAmountRate()
// {
//     const from = document.getElementById('from').value;
//     const to = document.getElementById('to').value;
//     const amount = document.getElementsByTagName('input')[0].value;

//     console.log(typeof amount)
//     console.log(from,to)
//     const convertValue = await getConvertValue(`${from}_${to}`, amount)
//     console.log('convertValue', convertValue)
//     document.getElementById('show').innerHTML = convertValue;
// }

async function convertAmountRate(){
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const amount = document.getElementsByTagName('input')[0].value;
    const conversion = await getAmountRateFromApi(`${from}_${to}`,amount)
    const Format = formatCurrency(to,conversion)
    document.getElementById('show').innerHTML = Format;
}

async function getAmountRateFromApi(conversion,amount)
{
    const url = `https://free.currconv.com/api/v7/convert?q=${conversion}&compact=y&apiKey=e213d359c5b51eabb964`;
    const json = await fetch(url)
    const obj = await json.json()
    const result = (obj[conversion].val * amount).toFixed(5)
    console.log(result)
    return result
    
}

function formatCurrency(type,value){
    const formatter = new Intl.NumberFormat(type,{
      currency: type,
      style:"currency"
    })
    return formatter.format(value);
  }
  