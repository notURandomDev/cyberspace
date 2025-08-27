export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container max-w-6xl px-6 flex-grow flex mx-auto justify-center h-full">
      {children}
    </section>
  );
}
