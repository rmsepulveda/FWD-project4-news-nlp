function handleSubmit(event) {
    event.preventDefault()// prevents anymore events
    document.getElementById('results').innerHTML = "";// clears form results
    let formText = document.getElementById('url').value// grabs input form text

    // checks if user URL input is valid - if true call postApi
    if(Client.checkIfURL(formText)) {
        //call postData fucntion with route /api
        Client.postApi('http://localhost:8081/api', {url: formText})
            // write return data to web page form
            .then(function(res) {
                //build form htlm
                let resDataToHtml = "";
                resDataToHtml += `Model:  ${res.model}<br>`;
                resDataToHtml += `Polarity:  ${Client.scoreConverter(res.score_tag)}<br>`;
                resDataToHtml += `Agreement:  ${res.agreement}<br>`;
                resDataToHtml += `Subjectivity:  ${res.subjectivity}<br>`;
                resDataToHtml += `Confidence range 0-100:  ${res.confidence}<br>`;
                resDataToHtml += `Irony:  ${res.irony}`;
                //write results to web page
                document.getElementById('results').innerHTML = resDataToHtml;
                if(res.model != "general_en"){//check for bad data
                    alert('Something went wrong with your request. Please try another URL.');
                }
            })
    } else {
        alert('Invalid URL, please try with a valid URL.');
    }
}

export { handleSubmit }
