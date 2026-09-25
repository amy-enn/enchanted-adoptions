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
        status: 'Avalable',
        imageUrl: '/images/moth.png',
    },
];

app.get('/api/animals', (req, res) => {
    res.json(animals);
});

