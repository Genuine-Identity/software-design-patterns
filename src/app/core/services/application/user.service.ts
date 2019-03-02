// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

// import { map } from 'rxjs/operators';
// import { Observable, of } from 'rxjs';
// import { first } from 'rxjs/operators';
// import 'rxjs/add/operator/mergeMap'
// import { User } from '../../../shared/models/index';
// import { PagedData, CorporateEmployee, Page } from '../../../shared/models/page';

// @Injectable()
// export class UserService {
//   users: User[];
//   constructor(private http: HttpClient) { }

//   getAll() {  
//     return this.http.get<User[]>(`/users`);
//   }

//   getById(id: number) {
//     return this.http.get(`/users/` + id);
//   }

//   register(user: User) {
//     return this.http.post(`/users/register`, user);
//   }

//   update(user: User) {
//     return this.http.put(`/users/` + user.id, user);
//   }

//   delete(id: number) {
//     return this.http.delete(`/users/` + id);
//   }

//   /**
//    * A method that mocks a paged server response
//    * @param page The selected page
//    * @returns {any} An observable containing the employee data
//    */
//   public getResults(page: Page): Observable<PagedData<User>> {
//     return this.getAll().flatMap(data => {
//       this.users = data;
//       return of(data).pipe(map(data => this.getPagedData(page)));
//     })
//   }

//   /**
//    * Package companyData into a PagedData object based on the selected Page
//    * @param page The page data used to get the selected data from companyData
//    * @returns {PagedData<User>} An array of the selected data and page
//    */
//   private getPagedData(page: Page): PagedData<User> {
//     const pagedData = new PagedData<User>();
//     page.totalElements = this.users.length;
//     page.totalPages = page.totalElements / page.size;
//     const start = page.pageNumber * page.size;
//     const end = Math.min((start + page.size), page.totalElements);
//     for (let i = start; i < end; i++) {
//       const jsonObj = this.users[i];
//       const user = new User(jsonObj.username, jsonObj.password, jsonObj.firstName, jsonObj.lastName, jsonObj.education, jsonObj.skills, jsonObj.id);
//       pagedData.data.push(user);
//     }
//     pagedData.page = page;
//     return pagedData;
//   }
// }