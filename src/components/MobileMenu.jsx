import Link from "next/link";
import { motion } from "framer-motion";

export default function MobileMenu({ close }) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      className="mobileMenu"
    >
      <Link href="/" onClick={close}>Home</Link>
      <Link href="/projects" onClick={close}>Projects</Link>
      <Link href="/contact" onClick={close}>Contact</Link>
    </motion.div>
  );
}
