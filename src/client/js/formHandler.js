function handleSubmit(event) {
    event.preventDefault()// prevents anymore events
    document.getElementById('results').innerHTML = "";// clears form results
    let formText = document.getElementById('url').value// grabs input form text

    // checks if user URL input is valid
    if(Client.checkIfURL(formText)) {
        //call postData fucntion with route /api
        Client.postApi('http://localhost:8081/api', {url: formText})
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

export { handleSubmit }
