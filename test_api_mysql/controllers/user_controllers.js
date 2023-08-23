// Corrected import statement
import userModlee from "../modles/user_modle.js";

class UserController {

    // جلب جميع البيانات
    static async getAllUsers(request, response) {
        const result = await userModlee.getUsers();
        if (result) {
            response.json(result);
        }else{
            response.status(404).send("Not Found");
        }
    }

    static async newUser(request , response){

       const result =  await userModlee.addNewUser(request.body.name , request.body.email , request.body.eage , request.body.address);

       if(result === true   ){
        response.send("Added Success"+ result);
       }else{
        response.send("Not Found");
       }
    }


    static async deleteUserById(request , response)
    {
        const result = await userModlee.deleteUserById(request.params.id);

        if(result === true){
            response.send("Success Deleted");
        }else{
            response.send("Not Found");
        }
    }

    static async updateUser(request , response){

        const id = request.params.id;
        const { name, email, eage, address } = request.body;


        try {
            const result = await userModlee.updateUserById(id, name, email, eage, address);
            console.log("The Results  "  + result)
            if (result === true) {
                response.status(200).send("Success Updated");
            } else {
                response.status(404).send("Not Found");
            }
        } catch (error) {
                console.error('Error updating user:', error);
            response.status(500).send("Internal Server Error");
        }
    }


    static async search(request, response) {
        try {
            const character = request.params.character; // Replace "character" with the actual parameter name in your route
            const result = await userModlee.searchUser(character);
    
            console.log("Result  :" + character);
            if (result) {
                response.status(200).json(result);
            } else {
                response.status(404).send("No results found");
            }
        } catch (error) {
            console.error('Error searching user:', error);
            response.status(500).send("Internal Server Error");
        }
    }
    
}

export default UserController
