import Axios from 'axios'


const axios = Axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

export default class API {

    static async getPost(id) {
        const resp = await axios.get(`/posts/${id}`)
        return resp.data
    }
    static async getPosts() {
        const resp = await axios.get(`/posts`)
        return resp.data
    }
    static async addPost(ptitle, pbody) {
        await axios.post(`/posts`, 
        {
            title: ptitle,
            body: pbody,
            userId: 1
        })
    }
}