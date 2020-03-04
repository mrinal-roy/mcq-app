import axios from 'axios';

const targetURL = 'https://opentdb.com/api.php?amount=10'

export const getQuizQuestions = () => {
    return axios.get(targetURL).then((response) => {
        console.log(response);
        console.log(response.data);
        console.log(response.data.results);
        return response.data.results
    })
    
}