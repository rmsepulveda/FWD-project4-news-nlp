function handleSubmit(event) {
    event.preventDefault()

    // grab the user input text and store it in formText
    let formText = document.getElementById('url').value

    if(Client.checkForURL(formText)) {
    //console.log("Form Submitted")

    postData('http://localhost:8081/api', {url: formText})

    .then(function(res) {//fill in the with output data
        document.getElementById('model').innerHTML = 'Polarity: ' ${res.model};
        document.getElementById("scoreTag").innerHTML = `Score: ${res.score_tag}`;
        document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
        //document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
    })
    } else {
        alert('Invalid URL, please try with a valid URL.');
    }
}

const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

// API response output swtich/case the score results store in display.
/*const polarityChecker = (score) => {
    let display;
    switch (score){
        case 'P+':
            display = 'strong positive';
            break;
        case 'P':
            display = 'positive';
            break;
        case 'NEW':
            display = 'neutral';
            break;
        case 'N':
            display = 'negative';
            break;
        case 'N+':
            display = 'strong negative';
            break;
        case 'NONE':
            display = 'no sentiment';
    }
    return display.toUpperCase();
}*/
export { handleSubmit }
export { polarityChecker }