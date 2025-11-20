import express from "express"
import { saveService } from "../services/SaveService"

export class SaveController {
    async getSave(req: express.Request, res: express.Response) {
        try {
            const save = await saveService.getSave(req.params.id)
            res.json(save)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Failed to get save" })
        }
    }

    async createSave(req: express.Request, res: express.Response) {
        try {
            const save = req.body
            const newSave = await saveService.createSave(save)
            res.json(newSave)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Failed to create save" })
        }
    }

    async updateSave(req: express.Request, res: express.Response) {
        try {
            const { id, updates } = req.body
            const save = await saveService.updateSave(id, updates)
            res.json(save)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Failed to update save" })
        }
    }

    async deleteSave(req: express.Request, res: express.Response) {
        try {
            const isDeleted = await saveService.deleteSave(req.params.id)
            res.send(isDeleted)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Failed to delete save" })
        }
    }
}

export const saveController = new SaveController()
