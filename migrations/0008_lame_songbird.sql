CREATE TABLE "logs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"target" varchar(255) NOT NULL,
	"initiator" varchar(255) NOT NULL,
	"action" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "logs_id_unique" UNIQUE("id")
);
