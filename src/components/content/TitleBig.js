import { motion } from 'framer-motion';

function TitleBig(props) {
    const titleMotion = {
        hidden: { opacity: 0, y: -50 },
        show: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        },
    }
    const title = props?.title || 'Title here';
    const sizes_class = {
        "small": "text-[28px] md:text-[32px]",
        "medium": "text-[38px] md:text-[52px]",
        "large": "text-[52px] md:text-[72px]"
    }
    const size_class = props?.size && 
        Object.keys(sizes_class).includes(props?.size) ? 
        sizes_class[props?.size] :
        sizes_class["large"]

    const default_class = "font-extrabold tracking-wider"
    const styles = [size_class, default_class].join(" ")
    return (
        <div>
            <motion.div
                initial="hidden"
                animate="show"
                variants={titleMotion}
                className={styles}
            >
            { title }
            </motion.div>
        </div>
    )
}

export default TitleBig 
