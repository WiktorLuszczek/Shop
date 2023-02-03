export const Register = () => {
    return (
        <form className="flex flex-col justify-center items-center border-l min-h-minHeight w-1/2">
            <p className="text-xl">You do not have an account?</p>
            <h2 className="text-3xl font-bold">Register</h2>
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
                className="border-2 text-lg rounded-md m-2 border-black p-1"
                type={'password'}
                placeholder="Confirm password..."
            />
            <input
                className="text-xl bg-black text-white px-5 py-2 rounded-lg"
                type={'submit'}
                value="Sign In"
            />
        </form>
    );
};
