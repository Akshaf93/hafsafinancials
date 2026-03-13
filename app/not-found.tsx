import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-serif font-medium text-[#E5D095] mb-4">404</h1>
      <h2 className="text-2xl font-serif text-[#FDFCF0] mb-4">Page Not Found</h2>
      <p className="text-[#FDFCF0]/60 mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-[#E5D095] text-[#050505] text-xs font-bold uppercase tracking-widest rounded hover:bg-[#FDFCF0] transition-colors"
      >
        Return Home
      </Link>
    </main>
  );
}
