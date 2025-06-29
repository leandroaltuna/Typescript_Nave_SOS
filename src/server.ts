import { envs } from './config';
import app from './app';

(() => {
    main();
}) ();


function main() {

    app.listen( envs.PORT, () => {
        console.log( `Servidor escuchando por puerto: ${ envs.PORT }` );
    });

}