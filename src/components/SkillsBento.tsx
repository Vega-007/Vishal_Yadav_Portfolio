import { motion } from 'framer-motion';
import { Terminal, Code2, Database, Smartphone } from 'lucide-react';
import { cn } from '../lib/utils';

const skills = [
  {
    name: 'Python',
    icon: Terminal,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    colSpan: 'col-span-1 md:col-span-2',
  },
  {
    name: 'React',
    icon: Code2,
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
    colSpan: 'col-span-1 md:col-span-1',
  },
  {
    name: 'Firebase',
    icon: Database,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    colSpan: 'col-span-1 md:col-span-1',
  },
  {
    name: 'Android Studio',
    icon: Smartphone,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    colSpan: 'col-span-1 md:col-span-2',
  },
];

export default function SkillsBento() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto" id="skills">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-earth-900)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Technical Arsenal
        </h2>
        <p className="text-[var(--color-earth-800)]">Technologies I work with to build scalable solutions.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px]">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "glass rounded-3xl p-6 flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300",
              skill.colSpan
            )}
          >
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", skill.bg)}>
              <skill.icon className={cn("w-6 h-6", skill.color)} />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-[var(--color-earth-900)] group-hover:text-[var(--color-clay-500)] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                {skill.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
