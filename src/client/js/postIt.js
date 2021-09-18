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
export { postData }