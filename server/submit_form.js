const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/submit-form', async (req, res) => {
    const formData = req.body;
    const recaptchaResponse = formData['g-recaptcha-response'];

    try {
        const verification = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
            params: {
                secret: process.env.RECAPTCHA_SECRET_KEY,
                response: recaptchaResponse
            }
        });

        if (!verification.data.success) {
            return res.status(400).send('reCAPTCHA verification failed.');
        }

        // If reCAPTCHA verification succeeds, process form data.
        // Save data, send email, etc.
        
        res.send('Form submitted successfully!');

    } catch (err) {
        res.status(500).send('Server error.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
