const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt'); //Needed if this is the User model

const superAdminSchema = new Schema({
    //Schema properties go here
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        match: [/.+@.+\..+/, 'Must use a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    },
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    //used to reset password if forgotten - wiil be reset after usage/expiration
    reset_code: {
        type: Number,
        default: 100000 + Math.floor(Math.random()*900000)
    },
    //if code has expired, a new one will be generated and code_expiration reset
    code_expiration: {
        type: Date,
        default: Date.now
    },
    isAdministrator: {
        type: Boolean,
        default: true
    },
    isSuperAdmin: {
        type: Boolean,
        default: true
    },
}
);

//set up pre-save middleware to create password
superAdminSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

// compare the incoming password with the hashed password
superAdminSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

const SuperAdmin = model('SuperAdmin', superAdminSchema);



module.exports = SuperAdmin;