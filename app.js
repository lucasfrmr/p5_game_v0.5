const express = require('express');
const app = express();
const path = require('path');

const { PORT } = process.env;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Set up a route to the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
