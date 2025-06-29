import { Request, Response } from 'express';
import { getChangeDiagram } from '../services/changeDiagram.service';


export function getPhaseChangeDiagram( req: Request, res: Response ) {

    try {
        
        const paramPressure = req.query.pressure;

        if ( !paramPressure ) {
            res.status( 400 ).json({ error: 'Pressure parameter is required.' });
            return;
        }

        const pressure = parseFloat( paramPressure as string );

        if ( isNaN( pressure ) ) {
            res.status( 400 ).json({ error: 'Pressure value is NOT valid.' });
            return;
        }

        const result = getChangeDiagram( pressure );
        if ( !result ) {
            res.status( 204 ).send();
            return;
        }

        res.status( 200 ).json( result );

    } catch (error) {
        res.status( 500 ).json({ message: 'Ocurrio un error', error });
    }

}