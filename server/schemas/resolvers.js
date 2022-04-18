const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { Administrator, User, SuperAdmin } = require('../models');

const resolvers = {
    Query: {
        getUsers: async (parent, args, context) => {
            //Temporarily comment out administrator validation
            // if(context.user.isAdministrator) {
                const userData = await User.find().select('-__v -password -reset_code -code_expiration');
                return userData;
            // }
            throw new AuthenticationError("Access denied!");           
        },
        meUser: async (parent, args, context) => {
            if(context.user) {
                const user = await User.findById({ _id: context.user._id })
                                        .select('-__v -password -reset_code -code_expiration');
                return user;
            }
            throw new AuthenticationError("Not logged in!");
        },
        meAdministrator: async (parent, args, context) => {
            if(context.user) {
                const user = await Administrator.findById({ _id: context.user._id })
                                                .select('-__v -password -reset_code -code_expiration')
                                                .populate("assignedUsers");
                return user;
            }
            throw new AuthenticationError("Not logged in!");
        },
        getAdministrators: async (parent, args, context) => {
            //Temporarily comment out administrator validation
            // if(context.user.isAdministrator) {
                const administratorData = await Administrator.find()
                                                    .select('-__v -password -reset_code -code_expiration')
                                                    .populate("assignedUsers");
                return administratorData;
            // }
            throw new AuthenticationError("Access denied!");
        },
        queryUser: async (parent, { id }, context) => {
            const user = await User.findById({ _id: id }).select('-__v -password -reset_code -code_expiration');
            return user;
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { user, token };
        },
        addAdministrator: async (parent, args, context) => {
            if(context.user) {
                const administrator = await Administrator.create(args);
                return administrator;
            }
            throw new AuthenticationError("Access denied!");
        },
        addSuperAdmin: async (parent, args) => {
            const user = await SuperAdmin.create(args);
            const token = signToken(user);
            return { token, user };
        },
        loginUser: async (parent, { username, password }) => {
            //Try username
            let user = await User.findOne({ username });
            if(!user) {
                //If username doesn't work, try email
                user = await User.findOne({ email: username });
                if(!user) {
                    throw new AuthenticationError("Invalid credentials!");
                }
            }
            //Check password if user found
            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw) {
                throw new AuthenticationError("Invalid credentials!");
            }

            const token = signToken(user);
            return { user, token };
        },
        loginAdministrator: async (parent, { username, password }) => {
            let user = await Administrator.findOne({ username })
                                            .select('-__v -reset_code -code_expiration')
                                            .populate("assignedUsers");
            if(!user) {
                user = await Administrator.findOne({ email: username })
                                            .select('-__v -reset_code -code_expiration')
                                            .populate("assignedUsers");
                if(!user) {
                    throw new AuthenticationError("Invalid credentials!");
                }
            }
            //Check password if user found
            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw) {
                throw new AuthenticationError("Invalid credentials!");
            }

            const token = signToken(user);
            return { user, token };
        },
        loginSuperAdmin: async (parent, { username, password }) => {
            let user = await SuperAdmin.findOne({ username })
                                            .select('-__v -reset_code -code_expiration');
            if(!user) {
                user = await SuperAdmin.findOne({ email: username })
                                            .select('-__v -reset_code -code_expiration');
                if(!user) {
                    throw new AuthenticationError("Invalid credentials!");
                }
            }
            //Check password if user found
            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw) {
                throw new AuthenticationError("Invalid credentials!");
            }

            const token = signToken(user);
            return { user, token };
        }
    }
}

module.exports = resolvers;