// display wallet balance
let wallet = JSON.parse(localStorage.getItem("user"))
const balance = document.querySelector('#balance');
balance.innerText = wallet.amount



let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`
fetch(url).then(function (res) {
    return res.json()
}).then(function (res) {
    console.log(res[0].vouchers)
    display(res[0].vouchers)
}).catch(function (err) {
    console.log(err)
})

let display = (data) => {
    data.forEach(function (elem) {
        const voucher_list = document.querySelector('#voucher_list');

        const voucher = document.createElement('div');
        voucher.setAttribute("class", "voucher")

        const img = document.createElement('img');
        img.src = elem.image

        const name = document.createElement('h3');
        name.setAttribute("class", "name")
        name.innerText = elem.name

        const price = document.createElement('p');
        price.setAttribute("class", "price")
        price.innerText = elem.price

        const buy = document.createElement('button');
        buy.setAttribute("class", "buy_voucher")
        buy.innerText = "Buy"
        buy.addEventListener("click", function () {
            buyFunc(elem)
        })

        voucher.append(img, name, price, buy)
        voucher_list.append(voucher)
    })
}
let purchaseItems = []
// let purchaseItems = JSON.parse(localStorage.getItem("purchase")) || []

let buyFunc = (elem) => {

    purchaseItems.push(elem)
    localStorage.setItem("purchase", JSON.stringify(purchaseItems))

    let wallet = JSON.parse(localStorage.getItem("user"))

    if (wallet.amount > elem.price) {
        wallet.amount = wallet.amount - elem.price
        localStorage.setItem("user", JSON.stringify(wallet))
        alert("Hurray! purchase successful")

        const balance = document.querySelector('#balance');
        balance.innerText = wallet.amount
    }
    else if (wallet.amount < elem.price) {
        alert("Sorry! insufficient balance")
    }
}