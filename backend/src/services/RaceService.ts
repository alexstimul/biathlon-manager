import { Competition, RaceResult } from "../models/types"

export class RaceService {
    async simulateRace(competitionId: string, saveId: string): Promise<RaceResult[]> {
        return []
    }

    async getCompetitions(saveId: string): Promise<Competition[]> {
        return []
    }

    async getRaceResults(competitionId?: string): Promise<RaceResult[]> {
        return []
    }
}

export const raceService = new RaceService()
