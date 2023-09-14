import Board from "../Board/Board";
import PropTypes from 'prop-types';

const Boards = ({remaining , boardCourse , boardCredit , boardPrice}) => {



    return (
        <div className="w-full md:w-1/4 ">
            <Board boardPrice={boardPrice} boardCredit={boardCredit} boardCourse={boardCourse} remaining={remaining}></Board>
        </div>
    );
};


Boards.propTypes = {
    remaining: PropTypes.number,
    boardCredit: PropTypes.number,
    boardPrice: PropTypes.number,
    boardCourse: PropTypes.array.isRequired
}


export default Boards;