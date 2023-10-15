const pool = require('./queries').pool;

const getSchedule = (request, response) => {
    pool.query('SELECT * FROM public.schedule ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
  
const getScheduleByMounth = (request, response) => {
    const Mounth = parseInt(request.params.date)

    pool.query('SELECT * FROM public.schedule WHERE EXTRACT(MONTH FROM date) = $1 AND EXTRACT(YEAR FROM date) = 2023', [Mounth], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createSchedule = (request, response) => {
    const { user_id, date, type_id } = request.body;
    pool.query('INSERT INTO public.schedule (user_id, date, type_id) VALUES ($1, $2, $3)', 
    [user_id, date, type_id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Schedule added with ID: ${results.insertId}`)
    })
}

const updateSchedule = (request, response) => {
    const id = parseInt(request.params.id)
    const { type_id } = request.body

    pool.query(
        'UPDATE public.schedule SET type_id = $1 WHERE id = $2',
        [type_id, id],
        (error, results) => {
            if (error) {
            }
            response.status(200).send(`Schedule modified with ID: ${id}`)
        }
    )
}

const deleteSchedule = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM public.schedule WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Schedule deleted with ID: ${id}`)
    })
}
const deleteScheduleByUser = (id, response) => {
    pool.query('DELETE FROM public.schedule WHERE user_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Schedule deleted with ID: ${id}`)
    })
}

module.exports = {
    getSchedule,
    getScheduleByMounth,
    createSchedule,
    updateSchedule,
    deleteSchedule,
    deleteScheduleByUser
}