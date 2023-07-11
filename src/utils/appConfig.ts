import z from "zod";

const envVariables = z.object({
  NEXT_PUBLIC_INTERCOM_APP_ID: z.string(),
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}

envVariables.parse(process.env);
