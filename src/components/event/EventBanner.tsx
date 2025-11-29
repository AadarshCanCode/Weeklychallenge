import React, { useState, useEffect } from 'react'
import Squares from "@/components/ui/Squares";
import algoIcon from "@/assets/algo.png";

const EventBanner: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const hasDarkClass = document.documentElement.classList.contains('dark');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return hasDarkClass || (!document.documentElement.classList.contains('light') && prefersDark);
        }
        return false;
    });

    useEffect(() => {
        const checkDarkMode = () => {
            const hasDarkClass = document.documentElement.classList.contains('dark');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(hasDarkClass || (!document.documentElement.classList.contains('light') && prefersDark));
        };

        checkDarkMode();

        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', checkDarkMode);

        return () => {
            observer.disconnect();
            mediaQuery.removeEventListener('change', checkDarkMode);
        };
    }, []);

    return (
        <div className="relative h-80 flex items-center justify-center bg-white dark:bg-black overflow-hidden">
            {!isDarkMode && (
                <div className="absolute inset-0 w-full h-full z-0">
                    <Squares
                        squareSize={80}
                        speed={0.3}
                        direction="diagonal"
                        borderColor="rgba(150, 150, 150, 0.25)"
                        hoverFillColor="rgba(100, 100, 100, 0.1)"
                        isDarkMode={false}
                    />
                </div>
            )}

            {isDarkMode && (
                <div className="absolute inset-0 w-full h-full z-0">
                    <Squares
                        squareSize={80}
                        speed={0.3}
                        direction="diagonal"
                        borderColor="rgba(255, 255, 255, 0.15)"
                        hoverFillColor="rgba(255, 255, 255, 0.08)"
                        isDarkMode={true}
                    />
                </div>
            )}

            <div className="absolute top-8 left-8 z-20 pointer-events-auto">
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black border-2 border-blue-500/50 dark:border-blue-400/50 rounded-2xl overflow-hidden hover:border-purple-500/50 dark:hover:border-purple-400/50 transition-all shadow-lg shadow-blue-500/20 w-24 h-24">
                        <img src={algoIcon} alt="Event Icon" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/50 dark:from-black dark:via-black/50 to-transparent pointer-events-none z-10" />

            <div className="container mx-auto max-w-7xl relative z-20 px-6 pointer-events-none">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20">
                    <div className="text-center md:text-left space-y-3 flex-1 md:mb-2">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-purple-700 dark:from-blue-400 dark:via-purple-500 dark:to-purple-600 drop-shadow-2xl">
                                REAL-WORLD PROBLEMS
                            </span>
                        </h1>
                    </div>

                    <div className="flex-shrink-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6 space-y-3 min-w-[280px] pointer-events-auto md:mr-16">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                            </span>
                            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">Active</span>
                        </div>

                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Started:</span>
                                <span className="font-semibold text-gray-900 dark:text-white">September 1, 2025</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Ends:</span>
                                <span className="font-semibold text-gray-900 dark:text-white">November 30, 2025</span>
                            </div>
                        </div>

                        <div className="space-y-2 text-sm pt-2 border-t border-gray-200 dark:border-gray-800">
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Participants</span>
                                <span className="font-bold text-gray-900 dark:text-white">653</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Time Left</span>
                                <span className="font-bold text-purple-600 dark:text-purple-400">1d 02h 07m</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Difficulty</span>
                                <span className="font-bold text-gray-900 dark:text-white">Intermediate</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Participation</span>
                                <span className="font-bold text-gray-900 dark:text-white">Solo</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Submissions</span>
                                <span className="font-bold text-gray-900 dark:text-white">5/day</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventBanner