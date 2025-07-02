const express = require('express');
const axios = require('axios');
const app = express();

const HELLO_URL = process.env.HELLO_URL || 'http://hello-app:3000/hello';

app.get('/health', async (req, res) => {
    try {
        const response = await axios.get(HELLO_URL);
        if (response.status === 200) {
            return res.status(200).send('Healthy');
        }
        res.status(500).send('Unhealthy');
    } catch (err) {
        res.status(500).send('Unhealthy');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`health-app running on port ${PORT}`));
