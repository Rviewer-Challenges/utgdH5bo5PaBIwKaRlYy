import { Component, ReactElement, ReactNode } from "react";
import MenuButton from '../components/MenuButton';
import { FaRulerCombined, FaUtensils, FaThermometerHalf } from 'react-icons/fa';
interface LayoutProps {
    children?: ReactElement
}

const CSS_CLASSES = {
    icon: 'text-sky-500 hover:text-sky-900 text-6xl m-auto',
    text: 'text-sky-500',
    button: 'border-sky-500 hover:border-sky-900'
}

class ConversorSelector extends Component<LayoutProps> {

    render(): ReactNode {
        return (<>
            <div className="w-screen grid grid-cols-2 xl:grid-cols-4">
                <MenuButton title_class={CSS_CLASSES.text} href="/metrics" icon={<FaRulerCombined className={CSS_CLASSES.icon} />} title="Métrico" />
                <MenuButton title_class={CSS_CLASSES.text} href="/cook" icon={<FaUtensils className={CSS_CLASSES.icon} />} title="Cocina" />
                <MenuButton title_class={CSS_CLASSES.text} href="/cook" icon={<FaThermometerHalf className={CSS_CLASSES.icon} />} title="Temperaturas" />
            </div>
        </>
        )
    }
}

export default ConversorSelector