
import PropTypes from 'prop-types';


const Board = ({remaining , boardCourse , boardCredit , boardPrice}) => {


    return (
        <div className="bg-white p-4 rounded-lg">
            <h1 className="text-[#2F80ED] font-bold mb-3">Credit Hour Remaining: {remaining} hr</h1>
            <div className="border-b border-b-gray-300"></div>
            <h1 className="text-[#1C1B1B] font-bold text-lg my-2">Course Name</h1>
            <ol className="text-[#1C1B1B99] text-sm leading-6 font-medium mb-4 list-decimal ml-4"> 
                {
                    boardCourse.map((singleCourse, idx) => <li key={idx}>{singleCourse.name}</li>)
                }
            </ol>
            <div className="border-b border-b-gray-300"></div>
            <p className="text-[#1C1B1BCC] text-sm font-medium my-3">Total Credit Hour: {boardCredit}</p>
            <div className="border-b border-b-gray-300"></div>
            <p className="text-[#1C1B1BCC] font-bold mt-3">Total Price: {boardPrice} USD</p>
        </div>
    );
};

Board.propTypes = {
    remaining: PropTypes.number,
    boardCredit: PropTypes.number,
    boardPrice: PropTypes.number,
    boardCourse: PropTypes.array.isRequired
}

export default Board;