import {
  NextFunction,
  request,
  Request,
  RequestHandler,
  Response,
} from "express";

const asyncHandler = (requestHandler: RequestHandler): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

/* try-catch method

type AsyncHandlerFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

const asyncHandler =
  (fn: AsyncHandlerFunction) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await fn(req, res, next);
    } catch (error) {
      const statusCode = (error as any).code || 500;
      const message = (error as any).message || "Internal Server Error";

      res.status(statusCode).json({
        success: false,
        message,
      });
    }
  };

  */
