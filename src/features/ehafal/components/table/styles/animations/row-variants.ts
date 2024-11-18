export const rowVariants = {
    hidden: {
        opacity: 0,
        x: -20,
        transition: { duration: 0 }
    },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.2,
            ease: "easeOut"
        }
    })
};