
const submit = document.querySelector('#submit');
submit.addEventListener("click", submitfunc)

// function for saving data in local Storage
function submitfunc() {
    event.preventDefault()

    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let address = document.querySelector('#address').value
    let amount = document.querySelector('#amount').value
    if (name == "") {
        alert("Please Enter your Name")
    }
    else if (email == "") {
        alert("Please Enter your Email")
    }
    else if (address == "") {
        alert("Please Enter your Address")
    }
    else if (amount == "") {
        alert("Please Enter your Amout")
    }
    else {
        let obj = {
            name: form.name.value,
            email: form.email.value,
            address: form.address.value,
            amount: Number(form.amount.value)
        }
        localStorage.setItem("user", JSON.stringify(obj))

        document.querySelector('#name').value = "";
        document.querySelector('#email').value = "";
        document.querySelector('#address').value = "";
        document.querySelector('#amount').value = "";
    }


}