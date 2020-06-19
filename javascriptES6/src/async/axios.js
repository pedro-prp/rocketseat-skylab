import axios from 'axios';

export class Api {
    static async getUserInfo(username) {
        const github_url = 'https://api.github.com'

        const response = await axios.get(`${github_url}/users/${username}`);

        console.log(response);
    }
}