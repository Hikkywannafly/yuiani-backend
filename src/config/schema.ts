import { z } from 'zod';

export const booleanSchema = z.preprocess((val) => val === 'true', z.boolean());

export const configSchema = z.object({
  server: z
    .object({
      // port of web server
      port: z.coerce.number().default(8080),

      // space seperated list of allowed cors domains
      cors: z.string().default(''),

      // disable cross origin restrictions, allow any site.
      // overwrites the cors option above
      allowAnySite: booleanSchema.default(false),

      // should it trust reverse proxy headers? (for ip gathering)
      trustProxy: booleanSchema.default(false),

      // should it trust cloudflare headers? (for ip gathering, cloudflare has priority)
      trustCloudflare: booleanSchema.default(false),

      // prefix for where the instance is run on. for example set it to /backend if you're hosting it on example.com/backend
      // if this is set, do not apply url rewriting before proxing
      basePath: z.string().default('/'),
    })
    .default({}),
  logging: z
    .object({
      // format of the logs, JSON is recommended for production
      format: z.enum(['json', 'pretty']).default('pretty'),

      // show debug logs?
      debug: booleanSchema.default(false),
    })
    .default({}),
  // Thay đổi từ
  postgres: z.object({
  // connection URL for postgres database
  connection: z.string(),

  // run all migrations on boot of the application
  migrateOnBoot: booleanSchema.default(false),

  // try to sync the schema on boot, useful for development
  // will always keep the database schema in sync with the connected database
  // it is extremely destructive, do not use it EVER in production
  syncSchema: booleanSchema.default(false),

  // Enable debug logging for MikroORM - Outputs queries and entity management logs
  // Do NOT use in production, leaks all sensitive data
  debugLogging: booleanSchema.default(false),

  // Enable SSL for the postgres connection
  ssl: booleanSchema.default(false),
  }),
  // Thành
  postgres: z.object({
  // connection URL for postgres database
  connection: z.string().default(process.env.DATABASE_URL || ''),

  // run all migrations on boot of the application
  migrateOnBoot: booleanSchema.default(false),

  // try to sync the schema on boot, useful for development
  // will always keep the database schema in sync with the connected database
  // it is extremely destructive, do not use it EVER in production
  syncSchema: booleanSchema.default(false),

  // Enable debug logging for MikroORM - Outputs queries and entity management logs
  // Do NOT use in production, leaks all sensitive data
  debugLogging: booleanSchema.default(false),

  ssl: booleanSchema.default(false),
  }).default({}),
  crypto: z.object({
  // session secret. used for signing session tokens
  sessionSecret: z.string().min(32).default('your_default_secret_key_at_least_32_chars_long'),
  }).default({}),
  meta: z.object({
  // name and description of this backend
  name: z.string().min(1).default('Yuiani Backend'),
  description: z.string().min(1).optional().default('Backend API for Yuiani'),
  }).default({}),
  captcha: z
    .object({
      // enabled captchas on register
      enabled: booleanSchema.default(false),

      // captcha secret
      secret: z.string().min(1).optional(),

      clientKey: z.string().min(1).optional(),
    })
    .default({}),
  ratelimits: z
    .object({
      // enabled captchas on register
      enabled: booleanSchema.default(false),
      redisUrl: z.string().optional(),
    })
    .default({}),
});
