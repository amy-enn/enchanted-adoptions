import express, { json } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(json());

const animals = [

    {
        id: 1,
        name: 'Moth',
        species: 'Hearth dragon',
        age: "Juvenile",
        status: 'Available',
        imageUrl: '/images/moth.png',
    },
];

app.get('/api/animals', (req, res) => {
    res.json(animals);
});

app.get('/api/animals/:id', (req, res) => {
    const animal = animals.find(
        (item) => item.id === Number(req.params.id)
    );

    if (!animal) {
        return res.status(404).json({ message: 'Animal not found' });
    }

    res.json(animal);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});