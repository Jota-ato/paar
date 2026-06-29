ALTER TABLE "memories" ALTER COLUMN "created_by" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "memories" ALTER COLUMN "couple_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "couples" ADD COLUMN "user_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "couples" ADD CONSTRAINT "couples_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;