import {httpService} from './httpService';
const targetURL = 'https://opentdb.com/api.php?amount=10'

export const getQuizQuestions = () => {
    return httpService("GET", targetURL, null).then(
        (response) => {
            console.log(response.data.results);
        })
}




