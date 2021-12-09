const app = require('./app');
const PORT = 3000;

// LISTENER
app.listen(PORT, () => console.log('App running on http://localhost:' + PORT));
