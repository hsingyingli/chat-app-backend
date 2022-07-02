import {Request, Response} from 'express'

export interface ControllerInterface {
    (req: Request, res: Response): void;
};

