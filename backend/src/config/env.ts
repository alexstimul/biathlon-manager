import dotenv from "dotenv"

dotenv.config()

const requiredEnvVars = ["SUPABASE_URL", "SUPABASE_ANON_KEY"]

for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
        throw new Error(`Environment variable ${envVar} is required`)
    }
}

export const config = {
    port: process.env.PORT || 5577,
    databaseUrl: process.env.SUPABASE_URL!,
    databaseToken: process.env.SUPABASE_ANON_KEY!,
}
