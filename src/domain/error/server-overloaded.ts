export class OverloadedError extends Error {
  constructor() {
    super("Try again in 30 seconds");
    this.name = "ServerOverloaded";
  }
}
