controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        //son dos consultas, una devuelve videos, y la otra todas las categories
        conn.query('SELECT * FROM video ORDER BY date DESC', (err, videos) => {
            conn.query('SELECT categoria FROM video group by categoria', (err2, categories) => {
                conn.query("select direccion from video ORDER BY date DESC", (err3, link) => {
                    if (err3) {
                        res.json(err3);
                    }
                    res.render('videos', {
                        opcionesList: categories, //aqui se envian los dos parametros al videos.ejs
                        data: videos,
                        link: link
                    });
                });
            });
        });
    });
};