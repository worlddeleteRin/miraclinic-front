import { motion } from 'framer-motion';

function TextImageBlock (props) {
    const text = props?.text || ""
    const imgsrc = props?.imgsrc || ""

    const blockMotion = {
        firstHidden: { opacity: 0, y: -50 },
        imageHidden: {opacity: 0, x: 100},
        firstShow: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        },
        imageShow: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    }

    const block = (
        <div 
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div 
                initial="firstHidden"
                animate="firstShow"
                variants={blockMotion}
                className="text-lg sm:text-2xl">
                { text }
            </motion.div>
            <motion.img
                variants={blockMotion} 
                initial="imageHidden"
                animate="imageShow"
                className="rounded-lg shadow-2xl"
                src={imgsrc}
            />
        </div>
    )
    return (
        <>
            { block }
        </>
    )
}

export default TextImageBlock
