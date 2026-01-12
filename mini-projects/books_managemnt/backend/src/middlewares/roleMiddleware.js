
export const restrictTo = async(...roles) => {
    return (req,res,next) => {
        if(!roles.includes(req.user.role)) {
            return res.status(403).json({message: "You do not have permisssion to perform this action"})
        }
        next();

    }

}

// This is called a middleware factory.

// First function → configures which roles are allowed

// Second function → runs on every request