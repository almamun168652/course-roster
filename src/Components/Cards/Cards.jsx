import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';


const Cards = () => {

    const [allCards, setAllCards] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setAllCards(data));
    }, []);

    return (
        <div className="w-full md:w-3/4 bg-blue-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    allCards.map(singleCard => <Card key={singleCard.id} singleCard={singleCard}></Card>)
                }
            </div>
        </div>
    );
};


Cards.propTypes = {
    singleCard: PropTypes.object.isRequired
}

export default Cards;