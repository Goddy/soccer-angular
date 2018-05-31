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
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {CustomHttpUrlEncodingCodec} from '../encoder';

import {Observable} from 'rxjs/Observable';
import {RegistrationDTO} from '../model/registrationDTO';
import {ResponseEntity} from '../model/responseEntity';

import {BASE_PATH} from '../variables';
import {Configuration} from '../configuration';


@Injectable()
export class RegistrationRestControllerService {

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
     * Create an account
     *
     * @param registrationDTO registrationDTO
     * @param captchaResponse captchaResponse
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createAccount(registrationDTO: RegistrationDTO, captchaResponse: string, observe?: 'body', reportProgress?: boolean): Observable<ResponseEntity>;

    public createAccount(registrationDTO: RegistrationDTO, captchaResponse: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        if (registrationDTO === null || registrationDTO === undefined) {
            throw new Error('Required parameter registrationDTO was null or undefined when calling createAccount.');
        }
        if (captchaResponse === null || captchaResponse === undefined) {
            throw new Error('Required parameter captchaResponse was null or undefined when calling createAccount.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (captchaResponse !== undefined) {
            queryParameters = queryParameters.set('captchaResponse', <any>captchaResponse);
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

        return this.httpClient.post<ResponseEntity>(`${this.basePath}/api/v1/registration`,
            registrationDTO,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    public createAccount(registrationDTO: RegistrationDTO, captchaResponse: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseEntity>>;
    public createAccount(registrationDTO: RegistrationDTO, captchaResponse: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseEntity>>;

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
