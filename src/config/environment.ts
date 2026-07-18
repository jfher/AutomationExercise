import dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

function getEnv(name: string): string {
    const value = process.env[name];

    if (!value) {
        throw new Error(`Environment variable ${name} is missing.`);
    }
    return value;
}

export const Environment = {
    baseUrl: getEnv('BASE_URL'),
    headless: getEnv('HEADLESS') === 'true',
    defaultTimeout: Number(getEnv('DEFAULT_TIMEOUT')),
    expectTimeout: Number(getEnv('EXPECT_TIMEOUT'))
};