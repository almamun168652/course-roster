import Boards from "../Boards/Boards";
import Cards from "../Cards/Cards";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <main className="max-w-screen-xl mx-auto px-4">
                <section className="flex justify-between gap-6 flex-col md:flex-row">
                    <Cards></Cards>
                    <Boards></Boards>
                </section>
            </main>
        </div>
    );
};

export default Home;