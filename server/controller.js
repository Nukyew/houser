
module.exports = {
    getHouses: async (req, res) => {
        const db = req.app.get('db')
        const allHouses = await db.get_houses()
        res.status(200).send(allHouses)
    },
    addHouse: async (req, res) => {
        const db = req.app.get('db')
        const {name, address, city, state, zip, img, monthlyMortgage, monthlyRent} = req.body
        console.log(img)
        // const addedHouse = await db.add_house([name, address, city, state, zip])
        await db.add_house([name, address, city, state, zip, img, monthlyMortgage, monthlyRent])
        // res.status(200).send(addedHouse)
        res.sendStatus(200)
    },
    deleteHouse: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        await db.delete_house([id])
        res.sendStatus(200)
    }
}