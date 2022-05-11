import Catalog from 'components/Catalog';
import './styles.css';

const CatalogCards = () => {
  return (
    <>
      <div className="container block-search">
        <div className="block-input">
          <div className="input-block__catalog">
            <input type={'text'} placeholder="Digite sua busca"></input>
            <button>BUSCAR</button>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Catalog />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Catalog />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Catalog />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Catalog />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Catalog />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Catalog />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Catalog />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Catalog />
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogCards;
