function handleSubmit(event) {
    event.preventDefault()// prevents anymore events
    clearResults()// clears form results
    let formText = document.getElementById('url').value// grabs input form text

    // checks if user URL input is valid
    if(Client.checkIfURL(formText)) {
        //call postData fucntion with route /api
        Client.postData('http://localhost:8081/api', {url: formText})
            // write return data to web page form
            .then(function(res) {
                let resDataToHtml = "";
                resDataToHtml += `Model:  ${res.model}<br>`;
                resDataToHtml += `Polarity:  ${scoreConverter(res.score_tag)}<br>`;
                resDataToHtml += `Agreement:  ${res.agreement}<br>`;
                resDataToHtml += `Subjectivity:  ${res.subjectivity}<br>`;
                resDataToHtml += `Confidence range 0-100:  ${res.confidence}<br>`;
                resDataToHtml += `Irony:  ${res.irony}`;
                document.getElementById('results').innerHTML = resDataToHtml;
                if(res.model != "general_en"){
                    alert('Something went wrong with your request. Please try another URL.');
                }
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
    document.getElementById('results').innerHTML = "";
}

// PostData function to post API to express server and return API response in retData
/*const postData = async (url = "", data = {}) => {
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
};*/

export { handleSubmit }
