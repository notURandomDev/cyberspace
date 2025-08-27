export default function DevLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="container max-w-6xl py-8 px-6 flex-grow flex mx-auto justify-center scrollbar-hide">
      {children}
    </section>
  );
}
