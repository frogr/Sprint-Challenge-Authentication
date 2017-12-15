
#Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
*Middleware is software that "glues together" parts of the program together. For example, a common middleware we use globally in all of our servers is body-parser. Body-parser is a middleware that extracts the entire incoming request stream and exposes it through req.body*
*Sessions inside express are usually used and interfaced with using a middleware called express-sessions and they're used to write, read, and modify cookie data for authentication and session purposes. It allows every different user to experience a similar, but ultimately different experience on any website.*
*bcrypt is another middleware that is used to hash passwords. it creates a layer of safety for both the developers (in that they're less liable for any compromises) and for the user (in that they're using a well tested, trusted authentication system that they can trust with their data instead of a hacked together session fueled by 3AM pizzas and coffees)*
*JWT is Javascript Web Tokens. They're a preferred alternative to Session data due to their flexibility. They don't use up valuable session storage and they do a better job at scaling horizontally. In addition, no garbage collection is needed as JWTs are responsible for their own expiration.*

#What does bcrypt do in order to prevent attacks?
*bcrypt hashes passwords in "rounds" to make them harder to crack. Each "round" adds onto the milliseconds that it'd take for a hacker to crack the passwords, making it exponentially harder for hackers to make use of hashed passwords in case malicious people ever gain access to sensitive databases.*

#What are the three parts of the JSON Web Token?
*Header, Payload and Signature.*
