import express, { json } from 'express'; // creates the app
import fs from 'node:fs'; // read files from file system
import path from 'node:path'; // builds the file location
import { fileURLToPath } from 'node:url'; // converts the file path to a URL

const app = express();
const port = process.env.PORT || 3000;

app.use(json());

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// endpoint to get the whole list of animals
app.get('/api/animals', (req, res) => {
    const file = path.join(__dirname, 'data', 'animals.json');
    const animals = JSON.parse(fs.readFileSync(file, 'utf8'));
    res.json(animals);
});

// endpoint to get a specific animal by ID
app.get('/api/animals/:id', (req, res) => {
    const file = path.join(__dirname, 'data', 'animals.json');
    const animals = JSON.parse(fs.readFileSync(file, 'utf8'));

    const animal = animals.find(
        (item) => item.id === req.params.id
    );

    if (!animal) {
        return res.status(404).json({ error: 'Animal not found' });
    }

    res.json(animal);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});