import './styles.css';
import imgCard from '../assets/images/car-header--card.png';
import { Link } from 'react-router-dom';

function CardApresentation() {
  return (
    <>
      <div className="container block-container__apresentation">
        <div className="card-block">
          <img src={imgCard} alt="Img carro"></img>
          <div className="block-down--card">
            <h3>O carro perfeito para você</h3>
            <span>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </span>
          </div>
        </div>
        <div className="block-mini-card__catalog">
          <div className="mini-card__catalog">
            <Link to={'/Catalog'}>
              <button>VER CATÁLOGO</button>
            </Link>

            <span>Comece agora a navegar</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardApresentation;
