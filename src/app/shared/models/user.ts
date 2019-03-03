export class User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  education: string;
  skills: string[];
  public aadharCardNumber: string;
  public panCardNumber: string;
  public passportNumber: string;

  id: string;
  constructor(username: string, password: string, firstName: string, lastName: string,
    education: string, skills: string[], id: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.education = education;
    this.skills = skills;
  }
}