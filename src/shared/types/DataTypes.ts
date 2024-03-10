import { IEntityTypes, IUpdateEntities } from "./EntityTypes";

export interface ICreatedData {
    data: IEntityTypes,
    message: string
}

export interface IUpdatedData {
    updateData: IUpdateEntities,
    data: IEntityTypes,
    message: string
}

export interface IDeletedData {
    data: IEntityTypes,
    message: string
}