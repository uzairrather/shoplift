export default function Topbar() {
  return (
    <div className="bg-navy2 py-1.5">
      <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between flex-wrap gap-2">
        <a href="tel:0738899040" className="text-xs text-white/50 hover:text-white transition-colors flex items-center gap-1.5">
          📞 (07) 3889 9040
        </a>
        <div className="hidden sm:block w-px h-3 bg-white/15" />
        <a href="mailto:info@shopfittings.com.au" className="hidden sm:flex text-xs text-white/50 hover:text-white transition-colors items-center gap-1.5">
          ✉ info@shopfittings.com.au
        </a>
      </div>
    </div>
  )
}