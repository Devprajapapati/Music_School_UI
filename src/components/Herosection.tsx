import Link from "next/link"
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from '@/components/ui/moving-border';

function Herosection() {
    return (
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx0auto py-10 md:py-0">
                <div className="relative pt-[20%] z-10 w-full text-center md:pt-[10%]" >
                    <h1 className="mt-20 md:mt-0 text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"> Master the art of music</h1>
                    <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Divine into our comprehensve music courses and transform your musical journey today. Wheather youre a beginner or looking to refine your skills,join us to unlock your true potential. </p>
                    <div className="mt-4">
                        <Link href={'/courses'}>
                            <Button
                                borderRadius="1.75rem"
                                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                            >
                                Explore coureses
                            </Button>
                        </Link>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Herosection