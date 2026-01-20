import { Router } from "express";
import {
  about,
  getAllCampuses,
  getCampusById,
  searchByFilter,
} from "../controllers/campuses.controller.js";
const router = Router();

router.get(["/about", "/info"], about);

router.get("/", getAllCampuses);

router.get("/search", searchByFilter);

router.get("/:id", getCampusById);

export default router;
