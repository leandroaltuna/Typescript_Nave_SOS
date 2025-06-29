import { DamagedSystem } from './status.service';


const systemCodeMap: Record<DamagedSystem, string> = {

    navigation: 'NAV-01',
    communications: 'COM-02',
    life_support: 'LIFE-03',
    engines: 'ENG-04',
    deflector_shield: 'SHLD-05'

};

export function getRepairCodeForSystem( system: DamagedSystem ) {

    return systemCodeMap[ system ];
    
}