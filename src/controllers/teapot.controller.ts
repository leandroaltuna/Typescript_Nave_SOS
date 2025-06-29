import { Request, Response } from 'express';


export function postTeapot( req: Request, res: Response ) {
    
    res.status( 418 ).send( "I'm a Teapot!." );

}