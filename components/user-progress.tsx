import Link from "next/link"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { InfinityIcon } from "lucide-react";
import { courses } from "@/db/schema";

type Props = {
    activeCourse: typeof courses.$inferSelect;
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
}

export const UserProgress = ({
    activeCourse,
    points,
    hearts,
    hasActiveSubscription
}: Props) => {
    return (
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link href="/courses">
                <Button variant='ghost'>
                    <Image
                        src={activeCourse.imageSrc}
                        alt={activeCourse.title}
                        height={32}
                        width={32}
                    />
                </Button>
            </Link>
            <Link href="/shop">
                <Button className="text-orange-500" variant="ghost">
                    <Image
                        src="/points.svg"
                        height={28}
                        width={28}
                        alt="Points"
                        className="mr-2"
                    />
                    {points}
                </Button>
            </Link>
            <Link href="/shop">
                <Button className="text-rose-500" variant="ghost">
                    <Image
                        src="/heart.svg"
                        height={28}
                        width={28}
                        alt="Heart"
                        className="mr-2"
                    />
                    {hasActiveSubscription
                        ? <InfinityIcon className="h-4 2-4 stroke-[3]" />
                        : hearts
                    }
                </Button>
            </Link>
        </div>
    )
}