import express from "express"
import { saveController } from "../controllers/SaveController"

const router = express.Router()

const SAVE_PATH = "/"

router.get(SAVE_PATH, saveController.getSave)
router.put(SAVE_PATH, saveController.updateSave)
router.post(SAVE_PATH, saveController.createSave)
router.delete(SAVE_PATH, saveController.deleteSave)

export default router
