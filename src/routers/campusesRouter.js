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

router.get("/:id", getCampusById);

router.get("/search", searchByFilter);

export default router;
