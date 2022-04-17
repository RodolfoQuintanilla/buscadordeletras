import useLetras from '../hook/useLetras';

const Letra = () => {
    const {letra, cargando}=useLetras()
    return (
      
            cargando ? 'Cargando...':
            <div className="letra">{letra}</div>
      
    );
};

export default Letra;