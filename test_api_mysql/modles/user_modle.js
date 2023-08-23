import { resolve } from "path";
import dataBase from "../config/db.js";
import { error } from "console";

class UserModle {

    // جلب جميع المستخدمين
    static async getUsers() {
       
            return new Promise(resolve => { // Use the correct resolve function
                dataBase.query("select * from infousers",[], (error, result) => {
                    if (!error) {
                        resolve(result);
                    }
                });
            });
        
    }

    static async addNewUser(name, email, eage, address) {
        return new Promise(resolve => {
            dataBase.query(
                "insert into infousers (name, email, eage, address) values (?, ?, ?, ?)",
                [name, email, eage, address],
                (error, result) => {
                    if (!error) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                }
            );
        });
    }


    static async deleteUserById(id){

        return new Promise((resolve=>{

            dataBase.query("delete from infousers where id = ? " , [id] , (error , rtesult)=>{

                if(!error){
                    resolve(true);
                }else{
                    resolve(false);
                }
            })
        }))
    }

    static async updateUserById(id, name, email, eage, address) {
        console.log("Success" + id)

        return new Promise((resolve, reject) => {
            const query = "UPDATE infousers SET name=?, email=?, eage=?, address=? WHERE id=?";
            dataBase.query(query, [name, email, eage , address, id], (error, result) => {
                if (!error) {
                    resolve(true);
                } else {
                    console.error('Error updating user:', error);
                    reject(error);
                }
            });
        });
    }

    static async searchUser(character) {
        return new Promise(resolve => {
            const query = "SELECT * FROM infousers WHERE name  LIKE ? ";
            dataBase.query(query, [`%${character}%`], (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(error);
                    console.log("Error  :"+ error)
                }
            });
        });
    }
    
    
}

export default UserModle;
