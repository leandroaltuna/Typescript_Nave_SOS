import { Request, Response } from 'express';
import { damagedSystemStore } from '../utils/damagedSystemStores';
import { getRepairCodeForSystem } from '../services/repair.service';


export function getRepairBay( req: Request, res: Response ) {
    
    const system = damagedSystemStore.get();

    if ( !system ) {
        res.status( 400 ).send( 'Ningun daño fue reportado. Llamar /status primero.' );
        return;
    }

    const code = getRepairCodeForSystem( system );

    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Repair</title>
        </head>
        <body>
            <div class="anchor-point">${ code }</div>
        </body>
        </html>
    `;

    res.status( 200 ).send( html );

}