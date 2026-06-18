CREATE TABLE "notes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(60) DEFAULT 'Nota sin título' NOT NULL,
	"content" text NOT NULL,
	"created_by" text NOT NULL,
	"couple_id" text NOT NULL
);
