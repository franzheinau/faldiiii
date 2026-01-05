import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      whileHover={{ scale: 1.05 }}
      className="card"
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.a>
  );
}
