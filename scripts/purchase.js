// display wallet balance
let wallet = JSON.parse(localStorage.getItem("user"))
const balance = document.querySelector('#balance');
balance.innerText = wallet.amount

let purchaseItems = JSON.parse(localStorage.getItem("purchase"))

let display = (data) => {
    data.forEach(function (elem) {
        const purchased_vouchers = document.querySelector('#purchased_vouchers');

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

        voucher.append(img, name, price)
        purchased_vouchers.append(voucher)
    })
}
display(purchaseItems)
