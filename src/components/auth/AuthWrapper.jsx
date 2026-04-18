const AuthWrapper = ({ children, title, subtitle, maxWidth = 'max-w-md' }) => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 py-10 md:py-20">
      {/* Modern Background: Blurred Gradient Blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-primary/15 absolute top-[-10%] left-[-10%] h-[60%] w-[60%] rounded-full blur-[100px] md:blur-[140px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[60%] w-[60%] rounded-full bg-[#F97316]/15 blur-[100px] md:blur-[140px]" />
      </div>

      {/* Auth Card with Glassmorphism */}
      <div className={`relative w-full ${maxWidth} overflow-hidden rounded-[2.5rem] border border-white/5 bg-black/90 p-8 text-white shadow-[0_25px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl md:p-14 transition-all duration-500`}>
        {/* Background Decor */}
        <div className="pointer-events-none absolute -top-5 -left-5">
          <div className="bg-primary h-32 w-32 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-gray-400 md:text-base">{subtitle}</p>
        </div>

        <div className="relative z-10 mt-10">{children}</div>
      </div>
    </div>
  );
};

export default AuthWrapper;
