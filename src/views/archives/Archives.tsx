import ArchiveCard from "./components/ArchiveCard.tsx";
import ArchiveCardLoading from "./components/ArchiveCardLoading.tsx";

export default function Archives() {
    return (
        <div className="mx-auto px-2 lg:w-1180px lg:grid grid-cols-12 gap-6 mt-6">
            <div className="col-span-8">
                <div>
                    <ArchiveCard/>
                </div>
                <div className="my-6">
                    <ArchiveCardLoading/>
                </div>
                <div className="my-6">
                    <ArchiveCard/>
                </div>
            </div>
            <div className="col-span-4 hidden md:block">
                <ArchiveCardLoading/>
            </div>
        </div>
    )
}
