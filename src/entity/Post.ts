import {Entity, Column, ManyToOne} from "typeorm";
import Model from "./Model";
import { User } from "./User";


@Entity('posts')
export class Post extends Model{
    @Column()
    title: string;

    @Column()
    body: string;

    // create userID column automatically as FK
    @ManyToOne(() => User)
    user: User;
}

