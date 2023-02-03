import { LogIn } from '../../components/LogIn/LogIn';
import { Register } from '../../components/Register/Register';

export default function SignIn() {
    return (
        <div className="flex justify-center">
            <LogIn />
            <Register />
        </div>
    );
}
