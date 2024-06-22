const register = async (req, res) =>{
    const {name, email, password} = req.body
    if ([name, email, password].some((field) => field?.trim() == "")) {
       res.send("name, email, password missing") 
    }
}

export {register}