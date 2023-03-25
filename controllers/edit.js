const ItemList = require('../models/itemlist')

module.exports = {
    getEdit: async (req, res) => {
        const id = req.params.id
        try {
            const items = await ItemList.find()
            res.render("edit.ejs", {itemList: items, idItem: id})
        } catch (err){
            return res.status(500).send(err)
        } 
    },

    deleteItem: async (req, res) => {
        const id = req.params.id
        try {
            await ItemList.findByIdAndDelete(id)
            res.redirect('back')
        } catch (err){
            return res.status(500).send(err)
        } 

    },

    updateItem: async (req, res) => {
        const id = req.params.id
        try {
            await ItemList.findByIdAndUpdate(id,
                {
                    nameinput: req.body.nameinput,
                    addressinput: req.body.adddressinput,
                    numinput: req.body.numinput,
                    instock: req.body.instock,
                    date: new Date()  
                },
            )
            res.redirect('/');
        } catch (err){
            if (err) return res.status(500).send(err)
            res.redirect('/');
        } 

    },
}