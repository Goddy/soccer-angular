/**
 * Soccer API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: voetbalsvk@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import {PresenceDTO} from './presenceDTO';


export interface DoodleDTO {
    created?: Date;
    currentPresence?: PresenceDTO;
    id?: number;
    modified?: Date;
    presences?: Array<PresenceDTO>;
    reserves?: Array<PresenceDTO>;
    status?: DoodleDTO.StatusEnum;
    stringCreated?: string;
    stringModfied?: string;
    total?: number;
}
export namespace DoodleDTO {
    export type StatusEnum = 'OPEN' | 'CLOSED';
    export const StatusEnum = {
        OPEN: 'OPEN' as StatusEnum,
        CLOSED: 'CLOSED' as StatusEnum
    }
}
