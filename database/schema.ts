import { auth } from "@/auth";
import { create } from "domain";
import { integer, text, boolean, pgTable, uuid, varchar, pgEnum, date, timestamp } from "drizzle-orm/pg-core";

export const STATUS_ENUM = pgEnum('status', [ 
    'APPROVED', 
    'REJECTED',
]);
export const ROLE_ENUM =  pgEnum('role', [
    'USER', 
    'ADMIN',
    'LEADER',
    'DEVELOPER'
]);

export const users = pgTable("users", {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  inGameName: varchar("ingame_name", { length: 255 }).notNull(),
  email: text("email").notNull().unique(),
  classId: varchar("class_id", { length: 255 }).notNull(),
  userImage: text("user_image").default(""),
  password: text('password').notNull(),
  status: STATUS_ENUM('status').default('REJECTED'),
  role: ROLE_ENUM('role').default('USER'),
  lastActivityDate: date('last_activity_date').defaultNow(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

export const guides = pgTable("guides", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  author: varchar("author", { length: 255 }).notNull(),
  classCategory: text("genre").notNull(),
  coverUrl: text("cover_url").notNull(),
  coverColor: varchar("cover_color", { length: 7 }).notNull(),
  description: text("description").notNull(),
  summary: text("summary").notNull(),
  videoUrl: text("video_url"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
