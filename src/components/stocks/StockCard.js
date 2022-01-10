import { motion } from 'framer-motion';

function StockCard (props) {
    const {stock} = props
    
    const cardMotion = {
        initial: {
            y: 0 ,
        },
        hover: { 
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
    }

    return (
        <motion.div 
            whileHover="hover"
            variants={cardMotion}
            className="max-w-[500px] shadow-xl cursor-pointer rounded-xl"
        >
            <div className="">
                <img
                    src={stock?.imgsrc[0]}
                    className="rounded-t-xl max-h-48 w-full object-cover"
                />
            </div>
            <div className="mx-4 py-3">
                <div className="tracking-wide font-semibold">
                    { stock?.title }
                </div>
                <div className="mt-1 line-clamp-3">
                    { stock?.description }
                </div>
            </div>
        </motion.div>
    )
}

export default StockCard
