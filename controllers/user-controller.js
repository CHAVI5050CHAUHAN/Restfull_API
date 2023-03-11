import User from "../model/User";


export const getAlluser = async (req,res,next) => {
    let users;
    try{
        users = await User.find();

    }catch(err){
        console.log(err);
    }
    if(!users) {
        return res.status(404).json({message: "No Users Found"});
    }
    return res.status(200).json({users});
};


export const add = async (req,res) => {
    //for new user
    const { name,email, birth,address,discription,creation_date } = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({email});
    }catch(err){
       return console.log(err);
    };
    if(existingUser) {
        return res
        .status(400)
        .json({ message: "User Aleardy Exist!!" });
    };


    const user = new User({
        name, 
        email,
        birth,
        address,
        discription,
        creation_date,
        blogs: [],
    });
   

    try{
        await user.save();    //to save in DB
    }catch (err){
       return console.log(err);
    }
    return res.status(201).json({user});

};



// Login controller

// export const login = async (req,res,next) => {
//     const { email, password } = req.body;    //No need of name

//     // for existing user
//     let existingUser;
//     try{
//         existingUser = await User.findOne({email});
//     }catch(err){
//        return console.log(err);
//     }
//     if(!existingUser) {
//         return res
//         .status(404)
//         .json({ message: "Could not Find any User By this Email" });
//     }
//     const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
//     if(!isPasswordCorrect){
//         return res.satatus(400).json({nessage:"Icorrect Password"});
//     }
//     return res.status(200).json({message:"Login Successfull"});
// };