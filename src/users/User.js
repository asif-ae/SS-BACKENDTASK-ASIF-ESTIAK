const jwt = require('jsonwebtoken')
const BaseModel = require("../BaseModel")
const bcrypt = require('bcrypt')
const UserModel = require('../../models/User')
const { ApolloError } = require("apollo-server-express")
const { UNAUTHORIZED, RESOURCE_NOT_FOUND } = require('../../utils/errorCode')
const { createAccessToken } = require('../../utils/auth')

class User extends BaseModel {
  static async login(_, args, context) {
    const { userData } = args;

    try {
      const findUser = await UserModel.findOne({ username: userData?.username }).exec();
      if (!findUser) throw new ApolloError('User not found!', RESOURCE_NOT_FOUND);
  
      const checkPass = await bcrypt.compare(userData.password, findUser.password);

      if (checkPass) {
        const newUser = {
          id: findUser.id,
          firstName: findUser.firstName,
          lastName: findUser.lastName,
          email: findUser.email,
          username: findUser.username,
        }
  
        const accessToken = createAccessToken(newUser);
    
        console.log({newUser});
        return {
          accessToken
        }
      } else {
        throw new ApolloError(UNAUTHORIZED)
      }
    } catch (error) {
      throw new ApolloError(UNAUTHORIZED)
    }
  }

  static async createUser(_, args, context) {
    const { userData } = args;

    const oldUserEmail = await UserModel.findOne({ email: userData?.email }).exec();
    if (oldUserEmail) throw new ApolloError('This email is occupied!', UNAUTHORIZED);

    const oldUserUsername = await UserModel.findOne({ username: userData?.username }).exec();
    if (oldUserUsername) throw new ApolloError('This username is occupied!', UNAUTHORIZED);

    let password = await bcrypt.hash(userData?.password, 10);

    const newData = {
      ...userData,
      name: `${userData.firstName} ${userData.lastName}`,
      password,
    }

    const user = new UserModel(newData)
    await user.save()
    const newUser = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
    }

    const accessToken = createAccessToken(newUser);

    console.log({newUser});
    return {
      accessToken
    }
  }

  static async makeAuthorizedUser(_, args, context) {
    const { id = '' } = args;

    const findUserByID = await UserModel.findById(id);
    if (!findUserByID) throw new ApolloError('User not found!', RESOURCE_NOT_FOUND);

    try {
      findUserByID.isAuthenticated = true

      await findUserByID.save()
      return true
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = User;