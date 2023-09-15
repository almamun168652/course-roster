import PropTypes from 'prop-types';

const Card = ({ singleCard, selectToBoard }) => {

    const { image_url, name, description, price, credit } = singleCard;

    return (
        <div className='p-4 bg-white rounded-lg'>
            <img className='w-full' src={image_url} alt="" />
            <h1 className='text-[#1C1B1B] font-bold mt-3 mb-2'>{name}</h1>
            <p className='text-[#1C1B1B99] text-xs leading-5'>{description}</p>
            <div className='flex items-center justify-between text-[#1C1B1B99] font-semibold my-3 text-sm'>
                <div className='flex items-center gap-1'>
                    <img src="./usd.svg" alt="" />
                    <span>Price: {price}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <img src="./openBook.svg" alt="" />
                    <span>Credit: {credit}hr</span>
                </div>
            </div>
            <button onClick={() => selectToBoard(singleCard)} className='bg-[#2F80ED] hover:bg-[#2f6eed] w-full py-2 rounded-md text-center text-white'>Select</button>
        </div>
    );
};

Card.propTypes = {
    singleCard: PropTypes.object.isRequired,
    selectToBoard: PropTypes.func
}


export default Card;