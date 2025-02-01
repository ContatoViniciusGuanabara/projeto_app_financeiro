import User from "../models/user.models.js";
import bcryptjs from "bcryptjs";

export const signup = async(req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }    
}