export default function Page() {
  return (
    <main className="min-h-screen flex items-center bg-zinc-950 text-zinc-100">
      <section className="mx-auto w-full max-w-4xl px-6">
        <h1 className="text-5xl font-bold tracking-tight">Leonardo Tireck</h1>
        <p className="mt-4 text-xl text-zinc-400">Software Engineer</p>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
          I build reliable software.
        </p>

        <div className="space-x-4">
          <a target="_blank" href="https://github.com/LeonardoTireck">
            GitHub
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/leonardo-tireck/?locale=en-US"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
