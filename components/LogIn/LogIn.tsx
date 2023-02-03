export const LogIn = () => {
    return (
        <form className="flex flex-col justify-center items-center pt-7 border-r min-h-minHeight w-1/2">
            <h2 className="text-4xl font-bold mb-5">Login</h2>
            <input
                className="border-2 text-lg rounded-md m-2 border-black p-1"
                type={'email'}
                placeholder="Email..."
            />
            <input
                className="border-2 text-lg rounded-md m-2 border-black p-1"
                type={'password'}
                placeholder="Password..."
            />
            <input
                className="text-xl bg-black text-white px-5 py-2 rounded-lg"
                type={'submit'}
                value="Log In"
            />
        </form>
    );
};
