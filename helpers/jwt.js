const expressJwt = require("express-jwt");
const config = require("../config.json");
const db = require("../helpers/db");
//const userService = require("../services/user.services");

// function jwt(roles = []) {
//   if (typeof roles === "string") {
//     roles = [roles];
//   }
//   console.log(roles);
//   const secret = config.secret;
//   return expressJwt({ secret, algorithms: ["HS256"], isRevoked }).unless({
//     path: [
//       //public routes that don't need authentication
//       "/users/authenticate",
//       "/users/register",
//     ],
//   });
// }

// async function isRevoked(req, payload, done) {
//   //console.log("from req: ", req.user.role);
//   console.log(payload.sub, payload.role);
//   const user = await userService.getById(payload.sub);
//   console.log(user);
//   //revoke the token if user is no longer exist

//   if (!user) {
//     console.log("if block");

//     return done(null, true);
//   }
//   console.log("not if");
//   done();
// }

function jwt(roles = []) {
  // roles param can be a single role string (e.g. Role.User or 'User')
  // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
  if (typeof roles === "string") {
    roles = [roles];
    console.log(roles);
  }
  const secret = config.secret;
  return [
    // authenticate JWT token and attach user to request object (req.user)
    expressJwt({ secret, algorithms: ["HS256"] }),

    // authorize based on user role
    async (req, res, next) => {
      const user = await db.User.findById(req.user.sub);

      if (!user || (roles.length && !roles.includes(user.role))) {
        // user's role is not authorized
        return res.status(401).json({ message: "Authorized!" });
      }
      // authentication and authorization successful
      req.user.role = user.role;
      next();
    },
  ];
}
module.exports = jwt;
