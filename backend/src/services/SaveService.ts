import { Save } from "../models/types"

export class SaveService {
    async getSave(id: string): Promise<Save> {
        return {} as Save
    }

    async createSave(save: Partial<Save>): Promise<Save> {
        return {} as Save
    }

    async updateSave(saveId: string, updates: Partial<Save>): Promise<Save> {
        return {} as Save
    }

    async deleteSave(id: string): Promise<boolean> {
        return false
    }
}

export const saveService = new SaveService()
