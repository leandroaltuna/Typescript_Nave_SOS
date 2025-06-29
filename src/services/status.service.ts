
const systems = [
    'navigation',
    'communications',
    'life_support',
    'engines',
    'deflector_shield'
] as const;


export type DamagedSystem = typeof systems[ number ];

export function getRandomDamagedSystem(): DamagedSystem {
    
    const index = Math.floor( Math.random() * systems.length );
    return systems[ index ];
    
}