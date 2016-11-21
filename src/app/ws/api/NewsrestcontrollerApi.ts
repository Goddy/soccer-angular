/**
 * Soccer API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH }                                         from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class NewsrestcontrollerApi {
    protected basePath = 'https://localhost:8080/';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
	
	/**
     * 
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }

    /**
     * Get news
     * 
     * @param id id
     * @param commentId commentId
     */
    public deleteComment(id: number, commentId: number, extraHttpRequestParams?: any): Observable<models.ResponseEntity> {
        return this.deleteCommentWithHttpInfo(id, commentId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Delete news
     * 
     * @param id id
     */
    public deleteNews(id: number, extraHttpRequestParams?: any): Observable<models.ResponseEntity> {
        return this.deleteNewsWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get news
     * 
     * @param id id
     * @param commentDTO commentDTO
     */
    public editComment(id: number, commentDTO: models.CommentDTO, extraHttpRequestParams?: any): Observable<models.ResponseEntity> {
        return this.editCommentWithHttpInfo(id, commentDTO, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get news
     * 
     * @param id id
     */
    public getNews(id: number, extraHttpRequestParams?: any): Observable<models.NewsDTO> {
        return this.getNewsWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get news
     * 
     * @param page page
     * @param size size
     */
    public getNewsPage(page: number, size?: number, extraHttpRequestParams?: any): Observable<models.PageDTONewsDTO> {
        return this.getNewsPageWithHttpInfo(page, size, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get news
     * 
     * @param id id
     * @param commentDTO commentDTO
     */
    public postComment(id: number, commentDTO: models.CommentDTO, extraHttpRequestParams?: any): Observable<models.ResponseEntity> {
        return this.postCommentWithHttpInfo(id, commentDTO, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Search news
     * 
     * @param term term
     * @param page page
     * @param size size
     */
    public searchNewsPage(term: string, page: number, size?: number, extraHttpRequestParams?: any): Observable<models.PageDTONewsDTO> {
        return this.searchNewsPageWithHttpInfo(term, page, size, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Get news
     * 
     * @param id id
     * @param commentId commentId
     */
    public deleteCommentWithHttpInfo(id: number, commentId: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/v1/news/${id}/comment/${commentId}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteComment.');
        }
        // verify required parameter 'commentId' is not null or undefined
        if (commentId === null || commentId === undefined) {
            throw new Error('Required parameter commentId was null or undefined when calling deleteComment.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Delete news
     * 
     * @param id id
     */
    public deleteNewsWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/v1/news/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteNews.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get news
     * 
     * @param id id
     * @param commentDTO commentDTO
     */
    public editCommentWithHttpInfo(id: number, commentDTO: models.CommentDTO, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/v1/news/${id}/comment`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling editComment.');
        }
        // verify required parameter 'commentDTO' is not null or undefined
        if (commentDTO === null || commentDTO === undefined) {
            throw new Error('Required parameter commentDTO was null or undefined when calling editComment.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];
        
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: commentDTO == null ? '' : JSON.stringify(commentDTO), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get news
     * 
     * @param id id
     */
    public getNewsWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/v1/news/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getNews.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get news
     * 
     * @param page page
     * @param size size
     */
    public getNewsPageWithHttpInfo(page: number, size?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/v1/news`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'page' is not null or undefined
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getNewsPage.');
        }
        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }
        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get news
     * 
     * @param id id
     * @param commentDTO commentDTO
     */
    public postCommentWithHttpInfo(id: number, commentDTO: models.CommentDTO, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/v1/news/${id}/comment`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling postComment.');
        }
        // verify required parameter 'commentDTO' is not null or undefined
        if (commentDTO === null || commentDTO === undefined) {
            throw new Error('Required parameter commentDTO was null or undefined when calling postComment.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];
        
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: commentDTO == null ? '' : JSON.stringify(commentDTO), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Search news
     * 
     * @param term term
     * @param page page
     * @param size size
     */
    public searchNewsPageWithHttpInfo(term: string, page: number, size?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/v1/news/search/${term}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'term' is not null or undefined
        if (term === null || term === undefined) {
            throw new Error('Required parameter term was null or undefined when calling searchNewsPage.');
        }
        // verify required parameter 'page' is not null or undefined
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling searchNewsPage.');
        }
        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }
        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
