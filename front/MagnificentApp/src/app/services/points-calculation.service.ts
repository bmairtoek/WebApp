import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ApiPaths } from "src/environments/api-paths.enum";
import { environment } from "src/environments/environment";

import { PointsCounterDto } from "../models/points-counter-dto.model";

@Injectable()
export class PointsCalculationService {
    public constructor(private http: HttpClient) {}

    public getPoints(dto: PointsCounterDto): Observable<number> {
        return this.http
            .post<number>(`${environment.backendUrl}${ApiPaths.PointsCounter}`, dto)
            .pipe(catchError((error: any) => throwError(error.json())));
    }
}