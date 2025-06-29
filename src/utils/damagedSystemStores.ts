import { DamagedSystem } from '../services/status.service';


class DamagedSystemStore {

    private current: DamagedSystem | null = null;

    set( system: DamagedSystem ) {
        this.current = system;
    }

    get(): DamagedSystem | null {
        return this.current;
    }

    clear() {
        this.current = null;
    }

}

export const damagedSystemStore = new DamagedSystemStore();