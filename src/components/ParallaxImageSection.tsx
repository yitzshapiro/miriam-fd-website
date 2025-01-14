import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function ParallaxImageSection() {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section className="relative py-4 sm:py-16 px-2 sm:px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 sm:hidden">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src="/images/wellness1.jpg"
              alt="Wellness moment"
              className="object-cover"
              fill
              sizes="100vw"
              priority
            />
          </div>
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src="/images/wellness3.jpg"
              alt="Healthy lifestyle"
              className="object-cover"
              fill
              sizes="100vw"
            />
          </div>
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src="/images/wellness5.jpg"
              alt="Mindfulness"
              className="object-cover"
              fill
              sizes="100vw"
            />
          </div>
        </div>

        <motion.div className="hidden sm:grid grid-cols-3 gap-6">
          <motion.div 
            style={{ y: y1 }} 
            className="col-span-1 space-y-4"
            transition={{ type: "spring", stiffness: 50 }}
          >
            <div className="relative w-full aspect-[4/3] sm:h-[700px] overflow-hidden rounded-lg">
              <Image
                src="/images/wellness1.jpg"
                alt="Wellness moment"
                className="object-cover hover:scale-105 transition-transform duration-700"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            <div className="relative w-full aspect-[3/2] sm:h-[300px] overflow-hidden rounded-lg sm:block hidden">
              <Image
                src="/images/wellness2.jpg"
                alt="Meditation practice"
                className="object-cover hover:scale-105 transition-transform duration-700"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </motion.div>
          <motion.div 
            style={{ y: y2 }} 
            className="col-span-1 space-y-4 pt-4"
            transition={{ type: "spring", stiffness: 50 }}
          >
            <div className="relative w-full aspect-[3/2] sm:h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/images/wellness3.jpg"
                alt="Healthy lifestyle"
                className="object-cover hover:scale-105 transition-transform duration-700"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative w-full aspect-[4/3] sm:h-[450px] overflow-hidden rounded-lg sm:block hidden">
              <Image
                src="/images/wellness4.jpg"
                alt="Nutrition"
                className="object-cover hover:scale-105 transition-transform duration-700"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </motion.div>
          <motion.div 
            style={{ y: y3 }} 
            className="col-span-1 space-y-4 pt-8"
            transition={{ type: "spring", stiffness: 50 }}
          >
            <div className="relative w-full aspect-[3/2] sm:h-[550px] overflow-hidden rounded-lg">
              <Image
                src="/images/wellness5.jpg"
                alt="Mindfulness"
                className="object-cover hover:scale-105 transition-transform duration-700"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative w-full aspect-[4/3] sm:h-[350px] overflow-hidden rounded-lg sm:block hidden">
              <Image
                src="/images/wellness6.jpg"
                alt="Yoga practice"
                className="object-cover hover:scale-105 transition-transform duration-700"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 