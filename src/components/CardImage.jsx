export const CardImage = ({ imageGalery }) => {
  return (
    <>
      <div className='card-image'>
        <img src={imageGalery.image} alt={imageGalery.alt} />
      </div>
    </>
  );
};


