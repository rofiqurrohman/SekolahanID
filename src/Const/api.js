import axios from 'axios'

export default axios.create({
    // baseURL: 'https://cors-anywhere.herokuapp.com/http://jendela.data.kemdikbud.go.id/api/index.php',
    baseURL: 'http://47.74.71.135:8080/api',
});