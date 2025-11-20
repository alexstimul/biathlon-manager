import { Athlete } from "../models/types";

export class AthleteService {
    async getAthletesBySave(saveId: string): Promise<Athlete[]> {
        return []
    }

    async getAthletesByTeam(teamId: string): Promise<Athlete[]> {
        return []
    }

    async updateAthlete(athleteId: string, updates: Partial<Athlete>): Promise<Athlete> {
        return {} as Athlete
    }
}

export const athleteService = new AthleteService()
