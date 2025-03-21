/**
 * Middleware for handling errors globally.
 * Logs the error in the console and returns a 500 response with an error message.
 * 
 * @param {Error} err - error object.
 * @param {Object} req - request object.
 * @param {Object} res - response object.
 * @param {Function} next - The next middleware function.
 */
export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({error: 'Server error.'});
  };