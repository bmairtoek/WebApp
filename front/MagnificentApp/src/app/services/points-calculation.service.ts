import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ApiPaths } from "src/environments/api-paths.enum";
import { environment } from "src/environments/environment";

import { PointsCounterDto } from "../models/points-counter-dto.model";

@Injectable()
export class PointsCalculationService {
    public constructor(private http: HttpClient) {}

    public getPoints(dto: PointsCounterDto): Observable<number> {
        var queryString = Object.keys(dto).map(key => key + '=' + (dto as any)[key]).join('&');
        var params= new HttpParams({fromString: queryString});
        return this.http
            .get<number>(`${environment.backendUrl}${ApiPaths.PointsCounter}`, { params })        
            .pipe(catchError((error: any) => throwError(error.json())));
    }
}