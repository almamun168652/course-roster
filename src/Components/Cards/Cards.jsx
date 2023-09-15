
import Card from "../Card/Card";
import PropTypes from 'prop-types';


const Cards = ({allCards , selectToBoard}) => {

    return (
        <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    allCards.map(singleCard => <Card selectToBoard={selectToBoard} key={singleCard.id} singleCard={singleCard}></Card>)
                }
            </div>
        </div>
    );
};

Cards.propTypes = {
    allCards: PropTypes.array.isRequired,
    selectToBoard: PropTypes.func
}

export default Cards;