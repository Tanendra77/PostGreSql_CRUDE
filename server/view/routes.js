import express from "express";
import { getAllEmp,addEmp,updateEmp,deleteEmp } from "../controller/userController.js";
const router=express.Router();

router.get("/getAll",getAllEmp);//read data

router.post("/addEmp",addEmp);// add data

router.put("/emp/:empId",updateEmp);//update data

router.delete("/emp/:empId",deleteEmp);//delete data

export default router;