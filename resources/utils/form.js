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

        try {
            // show message
            message.classList.remove('hidden')
        } catch(e) {
            console.warn("mensagem nao definida, por favor defina uma tag com 'name' de message")
        }
    }

    function removeErro() {
        input.classList.remove('border-red-500')

        try {
            // hidden message
            message.classList.add('hidden')
        } catch(e) {
            console.warn("mensagem nao definida, por favor defina uma tag com 'name' de message")
        }
    }

    // executa quando usuario esta modificando
    removeErro()

    return {
        value,
        isEmpty() {
            let response = false

            if(value.trim() == '' || value == null) {
                erro()
                response = true
            } else {
                response = false
            }

            return response
        },
        setErrorMessage(text) {
            erro()
            message.textContent=text
        },
        isEqual(compare) {
            if(value != compare) {
                erro()

                return false
            }

            return true
        },
        setLength(minLength) {
            if(value.length < minLength) {
                erro()
                return false
            }

            return true
        }
    }
}
