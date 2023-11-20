import jwt from "jsonwebtoken"; 
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDgzYzkxODE1NTQ4OWIyNzY2NWY5ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NTM2MDQwMX0.qH4f1nl9R9h9r4krEkvbkEu5L7ipUrc8Q5CxgK7SOpE";
    // const token = req.cookies.access_token;

    // console.log(token);

    if(!token)
    { 
        return next(createError(401, "You are not authenticated"));
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(403, "Token is not valid!"));
        req.user = user;    // userid and isAdmin (user's information)
        next();  
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.id==req.params.id || req.user.isAdmin)      // params that user enter and user.id and user.isAdmin that created during register
        {
            next();
        }
        else
        {
            if (err) return next(createError(403, "You are not authorized"));
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => { 
        if(req.user.isAdmin)       
        { 
            next();
        }
        else
        {
            if (err) return next(createError(403, "You are not authorized"));
        }
    })
}