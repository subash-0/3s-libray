// src/ToggleDarkMode.js
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../redux/slices/modeSlice';
import { MdDarkMode, MdLightMode } from "react-icons/md";
const ToggleDarkMode = () => {
    const darkMode = useSelector(state => state.darkMode);
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(toggleDarkMode())} className={`${darkMode ?'bg-white text-darkbg':''} p-2 rounded-full`}>
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>
    );
};

export default ToggleDarkMode;
