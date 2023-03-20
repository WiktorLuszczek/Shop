import type { Dispatch, SetStateAction } from 'react';

export const Modal = ({
    action,
    text,
}: {
    action: Dispatch<SetStateAction<boolean>>;
    text: string;
}) => {
    return (
        <>
            <div className="w-full h-full fixed top-0 left-0 flex justify-center align-center p-16 bg-gray-300 opacity-50" />
            <div className="w-1/3 h-50 fixed top-1/4 left-1/3 bg-white shadow-2xl p-5 rounded-xl">
                <h3 className="text-xl font-semibold mb-7 text-black">Information</h3>
                <p className="text-base leading-relaxed space-y-6 mb-6 text-black">
                    {text}
                </p>
                <div className="text-right">
                    <button
                        onClick={() => action(false)}
                        type="button"
                        className="bg-gray-700 p-3 rounded-xl hover:bg-gray-500 text-white"
                    >
                        CLOSE
                    </button>
                </div>
            </div>
        </>
    );
};
