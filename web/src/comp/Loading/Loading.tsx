import "./Loading.sass";

export default function Loading({ pending }: { pending: boolean }) {
  return pending ? (
    <div className="circle">
      <svg className=".svg" viewBox="-30 -8 60 15">
        <circle
          className="circle_circle"
          r="3"
          stroke="#7fafff"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  ) : null;
}
