import { motion } from "framer-motion";
import PropTypes from "prop-types";

function ScrollAnimationWrapper({ children, className, ...props }) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

ScrollAnimationWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ScrollAnimationWrapper;
