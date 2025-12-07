export const InicioPage = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center p-8">
            <div className="max-w-3xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 flex flex-col items-center gap-6 text-center text-white">
                <div className="flex items-center gap-6">
                    {/* Bun logo (stylized) */}
                    <div className="flex flex-col items-center">
                        <svg className="w-20 h-20" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <path d="M128 24c-34 0-64 22-75 54c-30 8-51 36-51 67c0 39 33 72 74 72h104c39 0 72-33 72-72c0-31-21-59-51-67c-11-32-41-54-75-54z" fill="#FBF0DF"/>
                            <path d="M94 168h68c30 0 54-24 54-54 0-24-16-44-38-51c-9-26-33-44-61-44s-52 18-61 44c-22 7-38 27-38 51c0 30 24 54 54 54z" fill="#000" opacity="0.08"/>
                        </svg>
                        <span className="text-xs text-white/60 mt-2">Bun</span>
                    </div>


                    {/* React logo */}
                    <div className="flex flex-col items-center">
                        <svg className="w-20 h-20" viewBox="0 0 841.9 595.3" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <g fill="none" stroke="#61DAFB" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
                                <ellipse cx="420.9" cy="296.6" rx="165.9" ry="85.3"/>
                                <ellipse cx="420.9" cy="296.6" rx="165.9" ry="85.3" transform="rotate(60 420.9 296.6)"/>
                                <ellipse cx="420.9" cy="296.6" rx="165.9" ry="85.3" transform="rotate(120 420.9 296.6)"/>
                            </g>
                            <circle cx="420.9" cy="296.6" r="35.7" fill="#61DAFB" />
                        </svg>
                        <span className="text-xs text-white/60 mt-2">React</span>
                    </div>
                </div>


                <h1 className="text-3xl font-semibold tracking-tight">dotzion template</h1>
                <p className="text-sm text-white/70">bun + react — setup minimal, rápido e pronto para escalar</p>


                <div className="mt-4 flex gap-3">
                    <button className="px-4 py-2 rounded-lg bg-white/10 border border-white/12 hover:bg-white/8 transition">Get started</button>
                    <button className="px-4 py-2 rounded-lg bg-transparent border border-white/12 hover:bg-white/6 transition">View docs</button>
                </div>


                <footer className="text-xs text-white/50 mt-4">© dotzion</footer>
            </div>
        </div>
    )
}
