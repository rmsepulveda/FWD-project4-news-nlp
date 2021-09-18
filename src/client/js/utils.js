// PostData function to post API to express server and return API response in retData
const postApi = async (url = "", data = {}) => {
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
};

export { 
    postApi,
    scoreConverter
}