import { Component, Fragment, ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom"

interface LayoutProps {
    title: string,
    href: string,
    icon: ReactElement,
    title_class: string
}

class MenuButton extends Component<LayoutProps> {

    render(): ReactNode {
        return (
            <Link to={this.props.href}>
                <div className="col-span-1 m-4 border-2 rounded-x aspect-square flex flex-col justify-center place-items-center">
                    <div className="h-2/3 w-full">
                        <Fragment children={this.props.icon} />
                    </div>
                    <p className={this.props.title_class}>
                        {this.props.title}
                    </p>
                </div >
            </ Link>
        )
    }
}

export default MenuButton