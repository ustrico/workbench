import mongoose from 'mongoose'
const Schema = mongoose.Schema

const emailTplSchema = new Schema({
  brand: {
    type: String,
    'default': ''
  }
}, {
  collection: 'emailtpl',
  timestamps: true
})

let EmailTpl = mongoose.model('EmailTpl', emailTplSchema)

export default EmailTpl
