export default function TechStack() {
  const techs = ["NEXT.JS", "PYTHON", "AWS", "REACT", "SUPABASE", "OPENAI", "DOCKER"];

  return (
    <section className="py-24 border-t border-midusa-border bg-midusa-bg">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap justify-between gap-x-12 gap-y-8">
          {techs.map((tech) => (
            <span key={tech} className="font-display text-[9px] font-bold tracking-[0.4em] text-midusa-text-dim hover:text-midusa-text transition-colors duration-500 whitespace-nowrap">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
