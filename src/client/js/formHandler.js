function handleSubmit(event) {
    event.preventDefault()// prevents anymore events
    clearResults()// clears form results
    let formText = document.getElementById('url').value// grabs input form text

    // checks if user URL input is valid
    if(Client.checkIfURL(formText)) {
        //call postData fucntion with route /api
        postData('http://localhost:8081/api', {url: formText})
            // write return data to web page form
            .then(function(res) {
                document.getElementById('model').innerHTML = `Model:  ${res.model}`;
                document.getElementById("scoreTag").innerHTML = 'Polarity:' + scoreConverter(res.score_tag);
                document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
                document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
                document.getElementById("confidence").innerHTML = `Confidence range 0-100: ${res.confidence}`;
                document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
            })
    } else {
        alert('Invalid URL, please try with a valid URL.');
    }
}

// function to convert json res.score_tag to a word
const scoreConverter = (sTag) => {
    if(sTag == "P"){
        return "Positive"
    }else if(sTag == "P+"){
        return "Strong Positive"
    }else if(sTag == "NEU"){
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

// function to clear form results
const clearResults = () => {
    document.getElementById('model').innerHTML = "";
    document.getElementById("scoreTag").innerHTML = "";
    document.getElementById("agreement").innerHTML = "";
    document.getElementById("subjectivity").innerHTML = "";
    document.getElementById("confidence").innerHTML = "";
    document.getElementById("irony").innerHTML = "";
}

// PostData function to post API to express server and return API response in retData
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
