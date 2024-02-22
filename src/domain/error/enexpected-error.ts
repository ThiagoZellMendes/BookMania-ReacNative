export class UnexpectedError extends Error {
  constructor() {
    super("Something wrong happended, try again in 30 seconds");
    this.name = "InvalidCredentialsError";
  }
}
