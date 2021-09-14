function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('url').value

    if(Client.checkForURL(formText)) {

    postData('http://localhost:8081/api', {url: formText})

    .then(function(res) {
        document.getElementById('model').innerHTML = `Model:  ${res.model}`;
        document.getElementById("scoreTag").innerHTML = 'Polarity:' + scoreConverter(res.score_tag);
        document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
     })
    } else {
        alert('Invalid URL, please try with a valid URL.');
    }
}

const scoreConverter = (sTag) => {
    if(sTag == "P"){
        return "Positive"
    }else if(sTag == "P+"){
        return "Strong Positive"
    }else if(sTag == "NEW"){
        return "Neutral"
    }else if(sTag == "N"){
        return "Negative"
    }else if(sTag == "N+"){
        return "Strong Negative"
    }else if(sTag == "NONE"){
        return "No Sentiment"
    }else {
        return "No data"
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
        const retData = await response.json();
        return retData;
    } catch (error) {
        console.log('error', error);
    }
};

export { handleSubmit }
