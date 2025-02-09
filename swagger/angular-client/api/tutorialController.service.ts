/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Iterable } from '../model/iterable';
import { Tutorial } from '../model/tutorial';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class TutorialControllerService {

    protected basePath = 'https://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * createTutorial
     * 
     * @param tutorial tutorial
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createTutorialUsingPOST(tutorial: Tutorial, observe?: 'body', reportProgress?: boolean): Observable<Tutorial>;
    public createTutorialUsingPOST(tutorial: Tutorial, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Tutorial>>;
    public createTutorialUsingPOST(tutorial: Tutorial, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Tutorial>>;
    public createTutorialUsingPOST(tutorial: Tutorial, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (tutorial === null || tutorial === undefined) {
            throw new Error('Required parameter tutorial was null or undefined when calling createTutorialUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Tutorial>(`${this.basePath}/api/tutorials`,
            tutorial,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteAllTutorials
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteAllTutorialsUsingDELETE(observe?: 'body', reportProgress?: boolean): Observable<string>;
    public deleteAllTutorialsUsingDELETE(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public deleteAllTutorialsUsingDELETE(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public deleteAllTutorialsUsingDELETE(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<string>(`${this.basePath}/api/tutorials`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteTutorial
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteTutorialUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public deleteTutorialUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public deleteTutorialUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public deleteTutorialUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteTutorialUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<string>(`${this.basePath}/api/tutorials/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * findByPublished
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByPublishedUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<Tutorial>>;
    public findByPublishedUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Tutorial>>>;
    public findByPublishedUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Tutorial>>>;
    public findByPublishedUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Tutorial>>(`${this.basePath}/api/tutorials/published`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * View a list of available languages
     * 
     * @param title title
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllTutorialsUsingGET(title?: string, observe?: 'body', reportProgress?: boolean): Observable<Iterable>;
    public getAllTutorialsUsingGET(title?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Iterable>>;
    public getAllTutorialsUsingGET(title?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Iterable>>;
    public getAllTutorialsUsingGET(title?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (title !== undefined && title !== null) {
            queryParameters = queryParameters.set('title', <any>title);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Iterable>(`${this.basePath}/api/tutorials`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getTutorialById
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTutorialByIdUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<Tutorial>;
    public getTutorialByIdUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Tutorial>>;
    public getTutorialByIdUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Tutorial>>;
    public getTutorialByIdUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTutorialByIdUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Tutorial>(`${this.basePath}/api/tutorials/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateTutorial
     * 
     * @param id id
     * @param tutorial tutorial
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateTutorialUsingPUT(id: number, tutorial: Tutorial, observe?: 'body', reportProgress?: boolean): Observable<Tutorial>;
    public updateTutorialUsingPUT(id: number, tutorial: Tutorial, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Tutorial>>;
    public updateTutorialUsingPUT(id: number, tutorial: Tutorial, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Tutorial>>;
    public updateTutorialUsingPUT(id: number, tutorial: Tutorial, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateTutorialUsingPUT.');
        }

        if (tutorial === null || tutorial === undefined) {
            throw new Error('Required parameter tutorial was null or undefined when calling updateTutorialUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<Tutorial>(`${this.basePath}/api/tutorials/${encodeURIComponent(String(id))}`,
            tutorial,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
