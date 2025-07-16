import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20 border-t">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4">
        <p className="text-sm text-center">
          &copy; ArrabaHack&nbsp;2025 · All rights reserved
        </p>

        {/* ‑‑ Optional social links (centered) ‑‑ */}
        {/* <div className="flex gap-4">
          <Link href="https://facebook.com/arrabahack" target="_blank">Fb</Link>
          <Link href="https://github.com/arrabahack" target="_blank">GH</Link>
        </div> */}
      </div>
    </footer>
  );
}
