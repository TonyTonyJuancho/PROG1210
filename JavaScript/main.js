document.addEventListener('DOMContentLoaded',()=>{

    authentication.addBtnEvents();
})

const formHandler = (()=>
{ 
    const getFormInputs = (formName, id)=>
    {
        formName = formName.toLowerCase()
        const form = document.querySelector(`#${formName}-form`)
        var inputs = form.querySelectorAll("input");
        var filteredInputs = Array.from(inputs).filter(function(input) {
            return input.type !== "submit";
        });
        return filteredInputs
    }
    const getFormValues = (formName, id)=>{
        let data = {}
        formName = formName.toLowerCase()
        const form = document.querySelector(`#${formName}-form${(id)?`-${id}`:""}`)
        console.log(form)

        for (let i = 0, element; element = form[i]; i++) // Obtain form input values
        {
            if(element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement)
            {

                if(element.name!="submit") // if it doesn't have a name, it's a submit button
                {
                    data[element.name] = element.value
                }
            }
        }
        return data
    }

    const resetFormErrors = (formName)=>
    {
        let inputs = formHandler.getFormInputs(formName)
        inputs.forEach(input=>{
            input.addEventListener('focus', function(){
                let name = this.name;
                console.log(name)
                document.querySelector(`#login-${name}-error`).style.opacity = 0;
            })
        })
        
    }

    const containsObject = (obj, objList) =>
    {
       
        
        for (let i = 0; i < objList.length; i++) 
        {
            const keys = Object.keys(objList[i])
            let result = {}
            for (let j = 0; j < keys.length - 1; j++) 
            {
                
                if (objList[i][keys[j]] == obj[keys[j]])
                {
                    result[keys[j]] = true
                }
                else
                {
                    result[keys[j]] = false
                }
            }
            result[keys[keys.length-1]] = (objList[i][keys[2]])
            return result;
        }
    
        return false;
    }

    return {getFormInputs,getFormValues, containsObject, resetFormErrors}
})()

const authentication = (()=>
{
    var _sampleData =
        [{email: 'admin@email.com', password: 'password1', type: 'admin'},
        { email: 'tech@email.com', password: 'password1', type: 'tech' },
        { email: 'sales@email.com', password: 'password1', type: 'sales' }];


   
    const _loginEvent = (()=>
    {
        login_data = formHandler.getFormValues('login');
        login_result = formHandler.containsObject(login_data, _sampleData)
        const keys = Object.keys(login_result)
        if (login_result[keys[0]] && login_result[keys[1]])
        {
            document.cookie = 'admin'

        }
        else
        {
            console.log(login_result.password)
            if(!login_result.email)
            {
                document.querySelector('#login-email-error').innerHTML = "Email field is empty/incorrect or does not exist"
                document.querySelector('#login-email-error').style.opacity = 1;
            }
            if (!login_result.password)
            {
                document.querySelector('#login-password-error').innerHTML = "Password field is empty/incorrect"
                document.querySelector('#login-password-error').style.opacity = 1;
            }
        }

        return false
    })

     const addBtnEvents = (()=>
    {
        formHandler.resetFormErrors('login');
        document.querySelector('#login-form').addEventListener('submit', (e)=>
        {
            e.preventDefault()
            _loginEvent();
            return false;
        });

    })
    return {addBtnEvents}
})()