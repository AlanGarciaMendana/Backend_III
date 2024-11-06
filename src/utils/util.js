import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt"





const generateUser = () =>{
    const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    return{
        id: faker.database.mongodbObjectId(),
        user: faker.person.fullName(),
        password:createHash("coder123"),
        role:"user",
        pet:[]
    }
    }
const generatePets= () =>{
    return{
        name:faker.animal.petName(),
        type:faker.animal.type()
    }
}

export { generateUser, generatePets };

