export interface User {
    id: string
    firstName: string
    lastName: string
    login: string
    email: string
    createdAt: Date
}

export interface Save {
    id: string
    userId: string
    name: string
    currentSeason: number
    currentMoney: number
    createdAt: Date
    updatedAt?: Date
}

export interface Athlete {
    id: string
    saveId: string
    teamId: string
    firstName: string
    lastName: string
    speed: number
    stamina: number
    accuracy: number
    mentalStrength: number
    form: number
    fatigue: number
    morale: number
    potential: number
    experience: number
    createdAt: Date
    updatedAt?: Date
    countryId?: string
}

export type CompetitionTypeName = "Индивидуальная гонка" | "Спринт" | "Гонка преследования" | "Масс-старт"

export interface CompetitionType {
    id: string
    name: CompetitionTypeName
    description: string
    baseDistance: number
    shootingRounds: number
    createdAt: Date
    penaltySeconds?: number
}

export interface Competition {
    id: string
    saveId: string
    competitionTypeId: string
    name: CompetitionTypeName
    season: number
    stage: number
    startTime: number // ms
    isCompleted: boolean
    scheduledDate: Date
    createdAt: Date
    weatherCinditions?: string
    completedAt?: Date
}

export interface RaceResult {
    id: string
    athleteId: string
    competitionId: string
    totalTime: number
    shootingMisses: number
    missesStanding: number
    missesProne: number
    place: number
    pointsGained: number // очков заработано
    prizeMoney: number
    performanceRating: number
    createdAt: Date
}

export interface Country {
    id: string
    name: string
    code: string
    createdAt: Date
}

export interface Team {
    id: string
    saveId: string
    name: string
    budget: number
    reputation: number
    createdAt: Date
    countryId?: string
}

export interface TrainingType {
    id: string
    name: string
    description: string
    attributeAffected: string
    baseImprovement: number
    baseFatigueCost: number
    moneyCost: number
    durationHours: number
    unlockLevel?: number
    createdAt: Date
}

export interface TrainingSession {
    id: string
    athleteId: string
    trainingTypeId: string
    saveId: string
    improvementGained: number
    fatigueIncreased: number
    formInpact: number
    createdAt: Date
    completedAt?: Date
}
