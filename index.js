import express from 'express';  

const app = express();

const PORT  = process.env.PORT ?? 8080;

app.get('/', (req, res) => {
    return res.json({msg : "Heelo from the server"});
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})