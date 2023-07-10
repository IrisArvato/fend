import {updateUI, showError } from "./updateUI"

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('message').value
    console.log('formText', formText)
    if (formText.length == 0) {
        showError('Please provide the sentence for sentiment analysis!')
        return;
    }

    console.log("::: Form Submitted :::")

    try {
        
        await fetch('http://localhost:8080/analyze', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({txt: formText})
            })
        .then(res => res.json())
        .then(function(res) {
            updateUI(res)
        })

    }
    catch (e) {
        showError('Error occurs when trying to get the sentence analyzed')
    }
}

export { handleSubmit }
