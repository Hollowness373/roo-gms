ALTER TABLE "users" ALTER COLUMN "status" SET DEFAULT 'APPROVED';--> statement-breakpoint
ALTER TABLE "public"."users" ALTER COLUMN "status" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "public"."status";--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('APPROVED', 'REJECTED');--> statement-breakpoint
ALTER TABLE "public"."users" ALTER COLUMN "status" SET DATA TYPE "public"."status" USING "status"::"public"."status";