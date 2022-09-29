import { Component, ReactElement, ReactNode } from "react";

interface LayoutProps {
    children: ReactElement
}

class Layout extends Component<LayoutProps> {

    render(): ReactNode {
        return (<>
            <div className="w-screen min-h-full">
                {this.props.children}
            </div>
        </>
        )
    }
}

export default Layout