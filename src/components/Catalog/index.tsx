import './styles.css';
import carCard from '../assets/images/car-card.png';

function Catalog() {
  return (
    <>
      <div className="card-content">
        <div className="card-top">
          <img src={carCard} alt="Carro a venda"></img>
          <h4>Audi Supra TT</h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </span>
          <div className="card-btn__block">
            <button>COMPRAR</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalog;