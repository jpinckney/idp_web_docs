module.exports = {
  // user_notes: (req, res) => {
  //   const {title, usernote}
  //   const db = req.app.get('db')
  //   let newnote = db.submit_user_note({title, usernote})
  // }

  selectCategory: (req, res) => {
    console.log('hit')
    const db = req.app.get('db')
    console.log(req.params.category)
    db.select_category(req.params.category)
    .then(resp => {
      console.log(resp)
      res.status(200).send(resp)
    })
  }
}