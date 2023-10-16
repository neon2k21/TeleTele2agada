export const getData = async(url, endPont) => {
    
    try{
        const fullURL = url + endPont;
        const response = await fetch(fullURL);
        const responseJson = await response.json();
        return responseJson;
    
    }
    catch(error){
        return error.toString();
    }
    
};
