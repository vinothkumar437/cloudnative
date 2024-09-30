app.get('/api/load', (req, res) => {
    const delay = Math.random() * 3000; // Random delay between 0-3 seconds
    setTimeout(() => {
        if (Math.random() < 0.2) { // 20% chance to simulate an error
            return res.status(500).json({ error: 'Simulated error!' });
        }
        res.json({ message: 'Load generated successfully!' });
    }, delay);
});
