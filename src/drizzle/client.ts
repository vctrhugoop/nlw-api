import postgres from 'postgres';
<<<<<<< HEAD
import { drizzle } from 'drizzle-orm/postgres-js'
import { env } from '../env';

export const pg = postgres(env.POSTGRES_URL)
export const db = drizzle(pg)
=======
import { env } from '../env';

export const pg = postgres(env.POSTGRES_URL)
>>>>>>> 5ad998e71d85e64292f7264ef7a8e4adffe6d9e0
