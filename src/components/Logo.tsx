import { motion } from "motion/react";

export default function Logo({ className = "w-8 h-8", textColor = "text-white" }: { className?: string, textColor?: string }) {
  return (
    <div className={`flex items-center gap-3 group shrink-0 ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="100" height="100" fill="transparent" />
        <motion.path
          d="M20 80V20L50 50L80 20V80"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="square"
          className={textColor}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.rect 
          x="45" y="45" width="10" height="10" 
          fill="currentColor" 
          className={textColor}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />
      </svg>
    </div>
  );
}
