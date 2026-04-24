export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-xs text-zinc-600 dark:text-zinc-400 transition-colors duration-200">
      © {new Date().getFullYear()} Alex As A Service. All rights reserved.
    </footer>
  );
}
