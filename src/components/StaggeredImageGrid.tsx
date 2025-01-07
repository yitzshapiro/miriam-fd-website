import { motion } from "framer-motion";
import Image from "next/image";

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const wellnessImages = [
  { src: "/images/grid1.jpg", alt: "Meditation session" },
  { src: "/images/grid2.jpg", alt: "Healthy meal preparation" },
  { src: "/images/grid3.jpg", alt: "Yoga practice" },
  { src: "/images/grid4.jpg", alt: "Personal training" },
  { src: "/images/grid5.jpg", alt: "Mindfulness exercise" },
  { src: "/images/grid6.jpg", alt: "Group wellness session" },
  { src: "/images/grid7.jpg", alt: "Nutrition consultation" },
  { src: "/images/grid8.jpg", alt: "Lifestyle coaching" },
];

export function StaggeredImageGrid() {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {wellnessImages.map((img, index) => (
        <motion.div
          key={img.src}
          variants={{
            initial: { opacity: 0, scale: 0.8 },
            animate: { 
              opacity: 1, 
              scale: 1,
              transition: { delay: index * 0.2 }
            }
          }}
          className="relative aspect-square overflow-hidden rounded-2xl"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover hover:scale-110 transition-transform duration-500"
          />
        </motion.div>
      ))}
    </motion.div>
  );
} 