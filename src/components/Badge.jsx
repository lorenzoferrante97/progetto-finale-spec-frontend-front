export default function Badge( { text, type } ) {

const typeClasses = {
  accent: "bg-accent-soft text-accent-text-low"
}

const roleClass = type === "accent" ? typeClasses.accent : "";
  
  return (
    <>
      <span className={`rounded-md ${roleClass}`}>{text}</span>
    </>
  );
}
