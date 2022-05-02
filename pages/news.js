import { motion } from "framer-motion";

function news() {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.6,
            },
          },
        }}
      >


        <h1>NEWS</h1>





      </motion.div>
    </div>
  );
}

export default news;
