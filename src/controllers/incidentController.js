const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        console.log(ong_id)

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return response.json({ id });
    },
    async get_all(request, response) {
        const incidents = await connection('incidents').select('*');

        return response.json({ incidents })
    }
};