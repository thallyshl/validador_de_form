const validator = {
    handleSubmit:(event)=>{
        event.preventDefault();

        const send = true
        const inputs = sign.querySelectorAll('input')

        for(let i = 0; i<inputs.length; i++){
            let input = inputs [i]
            let check = validator.checkInput(input)
            if(check !== true){
                send = false
                console.log(check)
            }
        }

        if(send){
            sign.submit();
        }
    },
    checkInput:(input) =>{
        let rules = input.getAttribute('data-rules')
        if(rules !== null){
            rules = rules.split('|');
            for(let k in rules){
                let rDetails = rules[k].split('=')
                switch(rDetails[0]){
                    case 'required':
                        if(input.value !== ""){
                            return "Campo não pode ser vazio"
                        }
                    break;
                    
                }
            }
        }
        return true

    }
}

const form = document.querySelector(".form")

form.addEventListener("submit", validator.handleSubmit);




