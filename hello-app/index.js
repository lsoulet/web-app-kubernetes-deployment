const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.status(200).send('Hello from hello-app!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`hello-app running on port ${PORT}`));
