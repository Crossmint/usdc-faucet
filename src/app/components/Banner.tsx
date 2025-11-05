import React from "react";
import { cn } from "@/lib/utils";

interface BannerProps {
    color: "success" | "warning" | "error" | "info";
    title: string;
    body: string;
    className?: string;
}

const colorStyles = {
    success:
        "border-green-600/20 bg-green-600/10 text-green-600 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-500",
    warning:
        "border-yellow-600/20 bg-yellow-600/10 text-yellow-600 dark:border-yellow-500/20 dark:bg-yellow-500/10 dark:text-yellow-500",
    error: "border-destructive/20 bg-destructive/10 text-destructive dark:border-destructive/20 dark:bg-destructive/10 dark:text-destructive",
    info: "border-blue-600/20 bg-blue-600/10 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-500",
};

const iconMap = {
    success: (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
    ),
    warning: (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
        </svg>
    ),
    error: (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    ),
    info: (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    ),
};

const Banner: React.FC<BannerProps> = ({ color, title, body, className }) => {
    return (
        <div className={cn("w-full p-4 rounded-md border", colorStyles[color], className)}>
            <div className="flex items-start gap-3">
                {iconMap[color]}
                <div>
                    <h3 className="font-semibold text-base">{title}</h3>
                    <p className="text-sm mt-1 opacity-90 leading-relaxed">{body}</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
