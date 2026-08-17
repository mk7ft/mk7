import Link from "next/link";

export default function NotFound() {
  return (
    <div className="chalk">
      <div className="board" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="nf">
        <h1>404</h1>
        <p>nothing on this board.</p>
        <Link className="btn-chalk" href="/">back to the board ↗</Link>
      </div>
    </div>
  );
}
