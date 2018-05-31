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
/* tslint:disable:no-unused-variable member-ordering */

import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpResponse} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import {AddressDTO} from '../model/addressDTO';
import {ResponseEntity} from '../model/responseEntity';
import {TeamDTO} from '../model/teamDTO';

import {BASE_PATH} from '../variables';
import {Configuration} from '../configuration';


@Injectable()
export class TeamsRestControllerService {

    protected basePath = 'https://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * Create a new team
     *
     * @param teamDTO teamDTO
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createTeam(teamDTO: TeamDTO, observe?: 'body', reportProgress?: boolean): Observable<TeamDTO>;

    public createTeam(teamDTO: TeamDTO, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        if (teamDTO === null || teamDTO === undefined) {
            throw new Error('Required parameter teamDTO was null or undefined when calling createTeam.');
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["X-Auth-Token"]) {
            headers = headers.set('X-Auth-Token', this.configuration.apiKeys["X-Auth-Token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<TeamDTO>(`${this.basePath}/api/v1/teams`,
            teamDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    public createTeam(teamDTO: TeamDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TeamDTO>>;
    public createTeam(teamDTO: TeamDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TeamDTO>>;

    /**
     * Delete a team
     *
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteTeam(id: number, observe?: 'body', reportProgress?: boolean): Observable<ResponseEntity>;

    public deleteTeam(id: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteTeam.');
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["X-Auth-Token"]) {
            headers = headers.set('X-Auth-Token', this.configuration.apiKeys["X-Auth-Token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.delete<ResponseEntity>(`${this.basePath}/api/v1/teams/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    public deleteTeam(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseEntity>>;
    public deleteTeam(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseEntity>>;

    /**
     * Get team by id
     *
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTeam(id: number, observe?: 'body', reportProgress?: boolean): Observable<TeamDTO>;

    public getTeam(id: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTeam.');
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["X-Auth-Token"]) {
            headers = headers.set('X-Auth-Token', this.configuration.apiKeys["X-Auth-Token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<TeamDTO>(`${this.basePath}/api/v1/teams/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    public getTeam(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TeamDTO>>;
    public getTeam(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TeamDTO>>;

    /**
     * Get all addresses
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTeamAddresses(observe?: 'body', reportProgress?: boolean): Observable<Array<AddressDTO>>;

    public getTeamAddresses(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["X-Auth-Token"]) {
            headers = headers.set('X-Auth-Token', this.configuration.apiKeys["X-Auth-Token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Array<AddressDTO>>(`${this.basePath}/api/v1/teams/addresses`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    public getTeamAddresses(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<AddressDTO>>>;
    public getTeamAddresses(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<AddressDTO>>>;

    /**
     * Get teams
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTeams(observe?: 'body', reportProgress?: boolean): Observable<Array<TeamDTO>>;

    public getTeams(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["X-Auth-Token"]) {
            headers = headers.set('X-Auth-Token', this.configuration.apiKeys["X-Auth-Token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Array<TeamDTO>>(`${this.basePath}/api/v1/teams`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    public getTeams(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<TeamDTO>>>;
    public getTeams(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<TeamDTO>>>;

    /**
     * Update a team
     *
     * @param teamDTO teamDTO
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateTeam(teamDTO: TeamDTO, observe?: 'body', reportProgress?: boolean): Observable<ResponseEntity>;

    public updateTeam(teamDTO: TeamDTO, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        if (teamDTO === null || teamDTO === undefined) {
            throw new Error('Required parameter teamDTO was null or undefined when calling updateTeam.');
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["X-Auth-Token"]) {
            headers = headers.set('X-Auth-Token', this.configuration.apiKeys["X-Auth-Token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.put<ResponseEntity>(`${this.basePath}/api/v1/teams`,
            teamDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    public updateTeam(teamDTO: TeamDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseEntity>>;
    public updateTeam(teamDTO: TeamDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseEntity>>;

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

}
