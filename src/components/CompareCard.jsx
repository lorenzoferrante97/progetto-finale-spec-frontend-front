export default function CompareCard({ game }) {

  return (
    <>
      <div>
        <figure>
          <img src={game?.coverUrl} alt={game?.title} />
        </figure>
      </div>
    </>
  );
}
