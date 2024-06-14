import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
    PORT: number;
    AUTH_MICROSERVICE_HOST: string;
    AUTH_MICROSERVICE_PORT: number;
}

const envsSchema = joi.object({
    PORT: joi.number().required(),
    AUTH_MICROSERVICE_HOST: joi.string().required(),
    AUTH_MICROSERVICE_PORT: joi.number().required(),
})
.unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
    port: envVars.PORT,
    authMicroserviceHost: envVars.AUTH_MICROSERVICE_HOST,
    authMicroservicePort: envVars.AUTH_MICROSERVICE_PORT,
}