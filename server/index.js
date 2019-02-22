const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var mongoose = require('mongoose');
const url = 'mongodb://localhost/contactDB';
 
const Contact = require('./ContactSchema');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.post('/api/contacts/create', (req, res, next) => {
	mongoose.connect(url, function(err){
		if(err) throw err;
		const contact = new Contact({
			name: req.body.name,
			company: req.body.company,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message
        })
        console.log('contact data recd:', contact)
		contact.save((err, resp) => {
            console.log('contact data saved:', resp)
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: resp
			})
		})
	});
})

app.get('/api/contacts', (req, res, next) => {
	mongoose.connect(url, function(err){
		
        console.log('contact data list fetch:')
		Contact.find({}, (err, contacts) => {
            console.log('contact data fetched:', contacts)
			if(err) throw err;
			return res.status(200).send(contacts);
		})
	});
})
 
app.listen(3000, () => console.log('steady contact server running on port 3000!'))