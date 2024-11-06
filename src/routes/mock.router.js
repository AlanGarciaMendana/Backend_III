import { Router } from "express";
import { generateUser, generatePets } from "../utils/util.js";

const router = Router();

let usuarios = [];
let petsList = [];

router.get("/mockinguser", (req, res) => {
    try {
            for (let i = 0; i < 50; i++) {
                usuarios.push(generateUser());
            }
        
        res.json(usuarios);}
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.post("/generateData", (req, res) => {
    try {
        const users = parseInt(req.query.users);
        const petsCount = parseInt(req.query.pets);

        for (let i = 0; i < users; i++) {
            const user = generateUser();
            usuarios.push(user);
        }

        for (let j = 0; j < petsCount; j++) {
            const pet = generatePets();
            petsList.push(pet);
        }

        res.status(201).json({
            success: true,
            message: `${users} users and ${petsCount} pets generated successfully`,
        })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
})


router.get("/generateData", (req, res) => {
    try {
        res.json({ usuarios, petsList })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
})

export default router