import TopPanel from "../TopPanel/TopPanel"
import AppNav from "../AppNav/AppNav"



type ViewScreenProps = {
    children: React.ReactNode

}


export default function ViewScreen({ children }: ViewScreenProps) {
    return (
        <div className="min-h-screen flex">
            <AppNav />
            <div className="flex-1 min-w-0">
                <TopPanel />
                {children}
            </div>
        </div>
    );
}