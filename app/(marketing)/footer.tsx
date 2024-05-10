import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/kr.svg"
                        alt="Korea"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Korea
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/es.svg"
                        alt="Spanish"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Spanish
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/fr.svg"
                        alt="France"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    france
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/cn.svg"
                        alt="China"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    China
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/it.svg"
                        alt="Italy"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Italy
                </Button>
            </div>
        </footer>
    )
}