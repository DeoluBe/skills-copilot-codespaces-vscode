// Create web server
// Create a web server that listens to port 3000 and serves the comments.html file.
// We have already provided the comments.html file for you. You can download it here.
// The comments.html file contains a simple form that accepts a comment and a submit button. When the form is submitted, the data is sent to the /comments endpoint using a POST request.
// Implement the following routes:

// GET /comments - Returns the comments.html file.

// POST /comments - Logs the comment to the console and redirects the user back to the /comments page.

// Use the express.static middleware to serve the comments.html file. The comments.html file should be served from the public directory.
// Use the express.urlencoded middleware to parse the request body as form data.

const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

app.get('/comments', (req, res) => {
  res.sendFile(__dirname + '/public/comments.html')
})

app.post('/comments', (req, res) => {
  console.log(req.body.comment)
  res.redirect('/comments')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})