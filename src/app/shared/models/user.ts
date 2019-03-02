
export class User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  education: string;
  skills: string[];
  id?: number;

  constructor(username: string, password: string, firstName: string, lastName: string,
    education: string, skills: string[], id?: number) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.education = education;
    this.skills = skills;
  }
 
}