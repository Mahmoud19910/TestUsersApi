import mySqlApp from "mysql";



const db = mySqlApp.createPool({
    host:"localhost",
    database:"first_test_api_db",
    user:"root",
    password:""
});

db.getConnection(()=>{
    console.log("My Data Base")
})

export default db;
