class Account {
    #password
    #balance
  
    constructor(user) {
      this.email = user.email
      this.#password = user.password
      this.#balance = 0
    }
  
    getBalance(email, password) {
      if (this.#authenticate(email, password)) {
        return this.#balance
      } else {
        return null
      }
    }
  
    #authenticate(email, password) {
      return this.email === email && this.#password === password
    }
  }

  const user = {
    email: "user@email.com",
    password: "123456"
  }
  
  const userAccount = new Account(user)
  

