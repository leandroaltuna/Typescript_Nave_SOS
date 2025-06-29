import { Request, Response } from 'express';
import { getRandomDamagedSystem } from '../services/status.service';
import { damagedSystemStore } from '../utils/damagedSystemStores';


export function getStatus( req: Request, res: Response ) {
    
    const system = getRandomDamagedSystem();
    damagedSystemStore.set( system );

    res.status( 200 ).json({ damaged_system: system });

}