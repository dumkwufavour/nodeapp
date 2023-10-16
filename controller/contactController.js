const asyncHandler = require("express-async-handler");
const Contact = require("../model/contactModel");

//@desc Get All Contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.find();
    res.status(200).json(contact);
});


//@desc Get Single Contact
//@route GET /api/contact/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found")
        
    }
    res.status(200).json(contact)
});




//@desc Create New Contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    console.log("The request is", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are required");
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contact)
})

//@desc Update A Single Contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params._id);
    if (!contact) {
        return next(new Error("Contact Not Found"));
    }

    res.status(200).json({ message: `Update contact for ${req.params.id}` })
})

//@desc Delete A Single Contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` })
})


module.exports = { getContacts, getContact, createContact, updateContact, deleteContact }