import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class Services
 {
    constructor(private http: HttpClient) { }

    public getAgeName(name: string) {
      try{
      const url = "https://api.agify.io/"
      return this.http.get(url + '?name=' + name)
      }catch(err){
        console.log(err)
        return of({
          name: "",
          age: 0,
          error: err
        });
      }
    }
 }
