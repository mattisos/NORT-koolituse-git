const http = require("http");

const host = 'localhost';
const port = 8080;

const matkadeAndmed = {
    matkad: [
        {
            pealkiri: 'Matk nr 1',
            kestvus: '6h',
            pikkus: '2km',
            kirjeldus: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut expedita veritatis eius deserunt vitae esse minima in totam, sunt sit? Molestiae illo nam, corrupti maxime aliquid sapiente sit adipisci.',
        },
        {
            pealkiri: 'Matk nr 2',
            kestvus: '6h',
            pikkus: '2km',
            kirjeldus: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut expedita veritatis eius deserunt vitae esse minima in totam, sunt sit? Molestiae illo nam, corrupti maxime aliquid sapiente sit adipisci.',
        },
                {
            pealkiri: 'Matk nr 3',
            kestvus: '6h',
            pikkus: '2km',
            kirjeldus: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut expedita veritatis eius deserunt vitae esse minima in totam, sunt sit? Molestiae illo nam, corrupti maxime aliquid sapiente sit adipisci.',
        },
        {
            pealkiri: 'Matk nr 4',
            kestvus: '6h',
            pikkus: '2km',
            kirjeldus: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut expedita veritatis eius deserunt vitae esse minima in totam, sunt sit? Molestiae illo nam, corrupti maxime aliquid sapiente sit adipisci.',
        },
        {
            pealkiri: 'Matk nr 5',
            kestvus: '6h',
            pikkus: '2km',
            kirjeldus: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut expedita veritatis eius deserunt vitae esse minima in totam, sunt sit? Molestiae illo nam, corrupti maxime aliquid sapiente sit adipisci.',
        },
                {
            pealkiri: 'Matk nr 6',
            kestvus: '6h',
            pikkus: '2km',
            kirjeldus: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut expedita veritatis eius deserunt vitae esse minima in totam, sunt sit? Molestiae illo nam, corrupti maxime aliquid sapiente sit adipisci.',
        },
    ]
}

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.end(JSON.stringify(matkadeAndmed));
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

