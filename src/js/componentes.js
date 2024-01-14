import '../css/componentes.css';
// import webpackLogo from '../assets/img/webpack-logo.png';

export const saludar = ( nombre = 'Sin Nombre' ) => {
    console.log('creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerHTML = `Hola, ${ nombre }`;
    document.body.append( h1 );

    // const logo = document.createElement('img');
    // logo.src = webpackLogo;
    // document.body.append( logo );
}
