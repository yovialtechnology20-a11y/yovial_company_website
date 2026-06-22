import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { supabase, type Project } from '../lib/supabase';

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('sort_order', { ascending: true });
      if (!cancelled && !error) setProjects(data || []);
      if (!cancelled) setLoading(false);
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-dark-950 overflow-hidden">
      <div className="orb w-96 h-96 bg-cyan-700 top-10 -left-48 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">Our Work</span>
          <h2 className="section-heading mt-3">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading">
            A showcase of our finest work — each project built with precision, passion, and purpose.
          </p>
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass rounded-3xl h-80 animate-pulse" />
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-dark-400">No projects to display yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/30 card-hover"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/10 to-transparent" />
                  <span className="absolute top-4 left-4 glass text-xs text-blue-300 font-medium px-3 py-1 rounded-full border border-blue-500/30">
                    {project.category}
                  </span>
                  {project.live_url && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noreferrer"
                        className="glass-strong text-white rounded-xl px-5 py-2.5 text-sm font-semibold flex items-center gap-2 hover:bg-white/20 transition-colors shadow-xl"
                      >
                        <ExternalLink size={15} /> Visit Live Site
                      </a>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl text-white mb-2">{project.title}</h3>
                  <p className="text-dark-400 text-sm leading-relaxed mb-5">{project.description}</p>

                  {project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.live_url ? (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group/link"
                    >
                      View Live Site
                      <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-dark-500">
                      Coming Soon
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
