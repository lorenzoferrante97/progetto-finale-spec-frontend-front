export default function Badge( { text = "Badge", type = "neutral", className = "" } ) {

const typeClasses = {
  accent: "bg-accent-soft text-accent-text-low",
  neutral: "bg-neutral-soft text-neutral-text-low"
}

const roleClass = type === "accent" ? typeClasses.accent : typeClasses.neutral;
  
  return (
    <>
      <span className={`rounded-md px-2 py-1 font-body-s-bold ${roleClass} ${className}`}>{text}</span>
    </>
  );
}
