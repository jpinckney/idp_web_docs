module.exports = {
  // user_notes: (req, res) => {
  //   const {title, usernote}
  //   const db = req.app.get('db')
  //   let newnote = db.submit_user_note({title, usernote})
  // }

  selectCategory: (req, res) => {
    console.log('hit select category')
    const db = req.app.get('db')
    console.log(req.params.category)
    db.select_category(req.params.category)
    .then(resp => {
      console.log(resp)
      res.status(200).send(resp)
    })
  },
  topic: (req, res) => {
    console.log('hit select topic')
    const db = rq.app.get('db')
    db.select_topic(req.params.topic)
    .then(resp => {
      console.log(resp)
      res.status(200).send(resp)
    })
  }
}