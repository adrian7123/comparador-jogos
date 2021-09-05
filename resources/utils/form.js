export function inputGeneric(element) {
    let value = ''
    let input = null

    if(element.target == undefined) {
        value = element.value
        input = element
    } else {
        value = element.target.value
        input = element.target
    }

    let message = input.parentElement.children.message

    function erro() {
        input.classList.add('border-red-500')

        // show message
        message.classList.remove('hidden')
    }

    function removeErro() {
        input.classList.remove('border-red-500')

        // hidden message
        message.classList.add('hidden')
    }

    // executa quando usuario esta modificando
    removeErro()

    return {
        value,
        checkEmpty() {
            let response = false

            if(value.trim() == '' || value == null) {
                erro()
                response = true
            } else {
                response = false
            }

            return response
        },

        setMessage(text) {
            erro()
            console.log(message.textContent)
            message.textContent=text
        }
    }
}
