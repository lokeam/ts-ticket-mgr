import {
  Column,
  Entity,
  PrimaryGeneratedColumn
} from "typeorm";

import { Priority } from '../enums/Priority';
import { Status } from "../enums/Status";

// Note: Entity in TypeORM is always a class of properties
// (all table cols as properties)

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
  })
  title: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  date: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'enum',
    enum: Priority,
    default: Priority.normal,
  })
  priority: Priority;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.todo,
  })
  status: Status;
}
