
module.exports = {
    getHouses: async (req, res) => {
        const db = req.app.get('db')
        const allHouses = await db.get_houses()
        res.status(200).send(allHouses)
    },
    addHouse: async (req, res) => {
        const db = req.app.get('db')
        const {name, address, city, state, zip, img, monthlyMortgage, monthlyRent} = req.body
        const addHouse = await db.add_house([name, address, city, state, zip, img, monthlyMortgage, monthlyRent])
        if (addHouse){
            res.sendStatus(200)
        } else {
            res.status(500).send('Something went wrong with the server. Please try again.')
        }
    },
    deleteHouse: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        await db.delete_house([id])
        res.sendStatus(200)
    }
}