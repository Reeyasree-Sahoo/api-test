const express = require('express');
const app = express();
const PORT = process.env.PORT || 5003;

app.use(express.json()); // Middleware to parse JSON requests

// GET method endpoint
app.get('/operation_code', (req, res) => {
    res.json({
        operation_code: '1'
    });
});

// POST method endpoint
app.post('/process_data', (req, res) => {
    const { userId, collegeEmailId, collegeRollNumber, numbers, alphabets } = req.body;

    if (!userId || !collegeEmailId || !collegeRollNumber || !numbers || !alphabets) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const highestLowercaseAlphabet = alphabets
        .filter(char => char >= 'a' && char <= 'z')
        .reduce((highest, char) => char > highest ? char : highest, 'a');

    res.json({
        status: 'success',
        userId,
        collegeEmailId,
        collegeRollNumber,
        numbers,
        alphabets,
        highestLowercaseAlphabet
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
