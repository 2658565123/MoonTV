declare module 'user-agents' {
  class UserAgent {
    constructor(options?: { deviceCategory?: string; platform?: string });
    toString(): string;
  }

  export default UserAgent;
}
