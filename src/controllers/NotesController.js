const knex = require('../database/knex')

class NotesController {
  async create(request, response) {
    const { title, description, rating, movie_tags } = request.body
    const { user_id } = request.params

    const note_id = await knex('movie_notes').insert({
      title,
      description,
      rating,
      user_id
    })

    const tagsInsert = movie_tags.map(name => {
      return {
        name,
        note_id,
        user_id
      }
    })
    await knex('movie_tags').insert(tagsInsert)

    response.json()
  }
}

module.exports = NotesController
