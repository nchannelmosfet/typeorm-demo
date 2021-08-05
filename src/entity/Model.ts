import {
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity, 
    CreateDateColumn, 
    UpdateDateColumn, 
    BeforeInsert
} from "typeorm";

import { v4 as uuid } from 'uuid'


export default abstract class Model extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'uuid' })
    uuid: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @BeforeInsert()
    createUuid() {
        this.uuid = uuid();
    }

    // allow subclasses to initialize in constructor
    constructor(model?: Partial<any>) {
        super();
        Object.assign(this, model);
    }

    toJSON() {
        // ...this refers to all fields of current object, override and set id to undefined to hide id
        return { ...this, id: undefined};  
    }
}