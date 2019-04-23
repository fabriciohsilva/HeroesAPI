const Mongoose=  require('mongoose')
const heroiSchema = new Mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    poder: {
        type: String,
        required: true
    },
    fraqueza: {
        type: String,
        required: true
    },
    vilao: {
        type: Boolean,
        required: true
    },
    avatar: {
        type: String,
        required: false
    },
    insertedAt: {
        type: Date,
        default: new Date()
    }
})

//mocha workaround
module.exports = Mongoose.models.herois || Mongoose.model('heroes', heroiSchema)