import axios from 'axios'

export default function getApi(url, callback) {
    axios.get(url)
        .then(function (data) {
            callback({
                'result': 'ok',
                'data': data.data
            });
        })
        .catch(function (error) {
            callback({
                'result': 'error',
                'error': error
            });
            console.log(error);
        });
}