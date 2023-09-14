import Boards from "../Boards/Boards";
import Cards from "../Cards/Cards";
import Header from "../Header/Header";
import { useEffect, useState } from "react";

const Home = () => {

    const [allCards, setAllCards] = useState([]);
    const [remaining, setRemaining] = useState(20);
    const [boardCourse, setBoardCourse] = useState([]);
    const [boardCredit, setBoardCredit] = useState(0);
    const [boardPrice, setBoardPrice] = useState(0);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setAllCards(data));
    }, []);


    const selectToBoard = (singleCard) => {

        const isExist = boardCourse.find(existItem => existItem.id == singleCard.id);

        let creditHour = singleCard.credit;


        if (isExist) {
            return alert('vai ami asi');
        } else {
            
            boardCourse.forEach(item => {
                creditHour += item.credit;
            })

            if(creditHour > 20){
                alert('mamu pore aiso');
            }else{
                const newRemaining = remaining - singleCard.credit;
                setRemaining(newRemaining);
    
                const newBoardCourse = [...boardCourse, singleCard];
                setBoardCourse(newBoardCourse);
    
                const newBoardCredit = boardCredit + singleCard.credit;
                setBoardCredit(newBoardCredit);
    
                const newTotalPrice = boardPrice + singleCard.price;
                setBoardPrice(newTotalPrice);
            }

        }
    }


    return (
        <div>
            <Header></Header>
            <main className="max-w-screen-xl mx-auto px-4">
                <section className="flex justify-between gap-6 flex-col md:flex-row">
                    <Cards selectToBoard={selectToBoard} allCards={allCards}></Cards>
                    <Boards boardPrice={boardPrice} boardCredit={boardCredit} boardCourse={boardCourse} remaining={remaining}></Boards>
                </section>
            </main>
        </div>
    );
};

Home.propTypes = {

}

export default Home;