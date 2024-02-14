import getAllUsers from "../api/methods";

const Test = () => {
    return (
        <div className='p-10'>
            <button className='btn bg-red-800 text-white py-1 px-3 md:ml-8 rounded md:static' onClick={async () => {
                console.log(await getAllUsers());
            }}>hola</button>
        </div>
    );
};

export default Test;