// This function is a wrapper that makes it easier to handle errors in async functions
const asyncHandler = (reqHandler) => {
  return (req, res, next) => {
    Promise.resolve(reqHandler(req, res, next)).catch(next);
  };
};

export {asyncHandler};