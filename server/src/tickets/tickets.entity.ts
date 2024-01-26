import { Entity, PrimaryGeneratedColumn } from "typeorm";

// Note: Entity in TypeORM is always a class of properties
// (all table cols as properties)

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}