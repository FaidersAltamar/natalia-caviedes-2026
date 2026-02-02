import React, { useState } from 'react';
import { FileText, Download, Eye, Newspaper, X, ChevronDown, CheckCircle2 } from 'lucide-react';
import { PRESS_RELEASES } from '../../constants';

const Press = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedPDF, setSelectedPDF] = useState<null | typeof PRESS_RELEASES[0]>(null);

    const visibleReleases = showAll ? PRESS_RELEASES : PRESS_RELEASES.slice(0, 6);

    return (
        <section id="prensa" className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-2 rounded-full font-bold uppercase tracking-widest text-[10px] mb-6 shadow-sm border border-green-100">
                        <Newspaper size={14} />
                        Sala de Prensa
                    </span>
                    <h2 className="text-5xl md:text-7xl font-display text-slate-900 leading-none uppercase italic mb-8">
                        Boletines y <span className="text-green-600">Gestión.</span>
                    </h2>
                    <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
                        Consulta los documentos oficiales, periódicos y boletines que resumen nuestro trabajo por el Huila con hechos reales.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
                    {visibleReleases.map((press, i) => (
                        <div key={i} className="group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col">
                            {/* Category Badge */}
                            <div className="absolute top-6 right-6 z-20">
                                <span className="bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-100">
                                    {press.category}
                                </span>
                            </div>

                            {/* Actual "Vista Previa" area with image */}
                            <div
                                onClick={() => setSelectedPDF(press)}
                                className="relative w-full h-56 bg-slate-100 rounded-2xl mb-8 overflow-hidden cursor-pointer group/preview"
                            >
                                <img
                                    src={press.image}
                                    alt={press.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/preview:scale-110"
                                />
                                {/* Overlay for preview */}
                                <div className="absolute inset-0 bg-green-900/60 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                    <div className="bg-white text-green-700 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 transform translate-y-4 group-hover/preview:translate-y-0 transition-transform">
                                        <Eye size={16} />
                                        Leer Resumen
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6 flex-grow">
                                <h4 className="text-2xl font-display text-slate-900 leading-tight mb-2 group-hover:text-green-700 transition-colors">
                                    {press.title}
                                </h4>
                                <p className="text-slate-400 text-[10px] font-black tracking-widest uppercase mb-4">
                                    {press.date}
                                </p>
                                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                                    {press.summary}
                                </p>
                            </div>

                            <div className="flex items-center gap-3 pt-6 border-t border-slate-50">
                                <button
                                    onClick={() => setSelectedPDF(press)}
                                    className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-green-700 transition-colors shadow-lg shadow-slate-900/10"
                                >
                                    <Eye size={16} />
                                    Ampliar
                                </button>
                                <a
                                    href={press.file}
                                    download
                                    className="w-14 h-14 flex items-center justify-center bg-slate-50 text-slate-400 rounded-2xl hover:bg-green-50 hover:text-green-600 transition-all border border-slate-100"
                                    title="Descargar"
                                >
                                    <Download size={20} />
                                </a>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"></div>
                        </div>
                    ))}
                </div>

                {!showAll && PRESS_RELEASES.length > 6 && (
                    <div className="mt-20 text-center">
                        <button
                            onClick={() => setShowAll(true)}
                            className="inline-flex items-center gap-3 bg-white border-2 border-green-100 text-green-700 px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:border-green-500 hover:bg-green-50 transition-all shadow-xl hover:shadow-green-900/5 group"
                        >
                            Ver más boletines
                            <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
                        </button>
                    </div>
                )}

                <div className="mt-20 text-center">
                    <p className="text-slate-500 text-sm font-light italic">
                        * Todos los documentos son de consulta pública y carácter informativo.
                    </p>
                </div>
            </div>

            {/* PDF Preview Modal Overlay */}
            {selectedPDF && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-slate-900/90 backdrop-blur-md transition-opacity animate-in fade-in"
                        onClick={() => setSelectedPDF(null)}
                    ></div>

                    <div className="relative bg-white w-full max-w-6xl rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden animate-in zoom-in-95 duration-300 border border-slate-100 flex flex-col md:flex-row h-[90vh] md:h-[85vh]">

                        {/* Left Side: Summary and Info (New) */}
                        <div className="w-full md:w-80 bg-slate-50 p-10 flex flex-col border-b md:border-b-0 md:border-r border-slate-100">
                            <div className="flex-grow">
                                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-green-600/20">
                                    <FileText size={32} />
                                </div>
                                <h3 className="text-3xl font-display text-slate-900 uppercase italic leading-tight mb-4">
                                    {selectedPDF.title}
                                </h3>
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest inline-block mb-8">
                                    {selectedPDF.category}
                                </span>
                                <div className="space-y-4">
                                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Resumen de contenido:</p>
                                    <p className="text-slate-600 text-sm leading-relaxed italic">
                                        "{selectedPDF.summary}"
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12 space-y-4">
                                <a
                                    href={selectedPDF.file}
                                    download
                                    className="w-full flex items-center justify-center gap-3 bg-green-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
                                >
                                    <Download size={18} />
                                    Descargar PDF
                                </a>
                                <button
                                    onClick={() => setSelectedPDF(null)}
                                    className="w-full py-4 text-slate-400 font-bold uppercase tracking-widest text-[10px] hover:text-slate-900 transition-colors"
                                >
                                    Cerrar Vista
                                </button>
                            </div>
                        </div>

                        {/* Right Side: PDF View Area */}
                        <div className="flex-grow bg-slate-200 relative">
                            <button
                                onClick={() => setSelectedPDF(null)}
                                className="absolute top-6 right-6 z-20 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all md:hidden"
                            >
                                <X size={24} />
                            </button>
                            <iframe
                                src={`${selectedPDF.file}#toolbar=0`}
                                className="w-full h-full border-none"
                                title="PDF Preview"
                            ></iframe>

                            {/* Protection Overlay (Visual only) */}
                            <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full hidden md:flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-slate-900">
                                <CheckCircle2 size={12} className="text-green-600" />
                                Visor Oficial Natalia Caviedes
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Press;
