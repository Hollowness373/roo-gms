import { integer, text, boolean, pgTable, uuid, varchar, pgEnum, date, timestamp } from "drizzle-orm/pg-core";

export const STATUS_ENUM = pgEnum('status', [
    'PENDING', 
    'APPROVED', 
    'REJECTED',
]);
export const ROLE_ENUM =  pgEnum('role', [
    'USER', 
    'ADMIN',
]);

export const users = pgTable("users", {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  inGameName: varchar("ingame_name", { length: 255 }).notNull(),
  email: text("email").notNull().unique(),
  classId: varchar("class_id", { length: 255 }).notNull(),
  userImage: text("user_image").default(""),
  password: text('password').notNull(),
  status: STATUS_ENUM('status').default('PENDING'),
  role: ROLE_ENUM('role').default('USER'),
  lastActivityDate: date('last_activity_date').defaultNow(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});
