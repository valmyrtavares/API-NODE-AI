import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Aluno {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  idade!: string;

  @Column()
  curso!: string;

  @Column()
  inscrito!: boolean;
}
