import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAuthors(): string[]{
    return ['author1', 'author2', 'author3'];
}
}
