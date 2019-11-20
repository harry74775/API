const {
    Router
} = require('express');
const router = Router();
const getFootball = require('../lib/GetFootball');
router.post('/football', async (req, res) => {
    let data = await getFootball();
    console.log(data);
    if (data.list[0]) {
        let footballInfo = [];
        console.log(data.list.length)
        for (let i = 0; i < data.list.length; i++) {
            if (data.list[i]) {
                footballInfo.push(data.list[i].toString());
            }
        }
        console.log("Rendering page" + data.toString());
        res.render('football', {
            data: {
                footballInfo
            }
        });
    } else {
        res.render('daily', {
            err: "The location you entered does not exist."
        });
    }
})

router.get('/football', async (req, res) => {
    let query = req.query.location;
    console.log("query: " + query)
    res.render("football");
});