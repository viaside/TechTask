const pool = require('./queries').pool;

const getUser = (request, response) => {
    pool.query('SELECT * FROM public."user" ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
  
const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM public."user" WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const { name } = request.body

    pool.query('INSERT INTO public."user" (name) VALUES ($1)', 
    [name], (error, results) => {
        if (error) {
            response.error();
        } else{
            response.status(201).send(`User added with ID: ${results.insertId}`)
        }
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name } = request.body

    pool.query(
        'UPDATE public."user" SET name = $1 WHERE id = $2',
        [name, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM public."user" WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

module.exports = {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}