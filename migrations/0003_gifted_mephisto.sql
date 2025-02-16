CREATE TABLE "guides" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"author" varchar(255) NOT NULL,
	"genre" text NOT NULL,
	"cover_url" text NOT NULL,
	"cover_color" varchar(7) NOT NULL,
	"description" text NOT NULL,
	"summary" text NOT NULL,
	"video_url" text,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "guides_id_unique" UNIQUE("id")
);
