import './App.css'
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook, FaRobot, FaClock, FaChartLine, FaUsers } from "react-icons/fa";
import logo from "/logo.png";
import banner from "/banner.jpg";
import final from "/final.jpg";

function App() {
    return (
        <div className="font-sans text-gray-800">

            {/* CABEZA */}
            <header className="fixed top-0 left-0 z-50 w-full flex justify-center">
                <div className="w-[60%] bg-[#EDF3FF] shadow-xl/30 flex items-center justify-center gap-4 py-3 rounded-b-2xl">
                    <img
                        src={logo}
                        alt="Cesar Studio Web"
                        className="w-12 h-12"
                    />
                    <h1 className="text-2xl font-bold text-gray-900 leading-none">
                        Cesar Studio Bot
                    </h1>
                </div>
            </header>

            {/* BANNER */}
            <section
                className="min-h-screen flex items-center justify-center pt-32 px-6 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${banner})` }}
            >
                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Contenido */}
                <div className="relative max-w-4xl text-center text-white">
                    <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
                        Chatbots Inteligentes para tu Negocio 🤖
                    </h2>
                    <p className="text-xl mb-8 drop-shadow-md">
                        Automatiza la atención al cliente, aumenta tus ventas y responde 24/7 con chatbots personalizados para WhatsApp, Web y Redes Sociales.
                    </p>
                    <a
                        href="https://wa.me/51998114144?text=Hola%2C%20deseo%20implementar%20un%20chatbot%20para%20mi%20negocio.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%2C%20por%20favor."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform inline-block"
                    >
                        Solicitar mi chatbot
                    </a>
                </div>
            </section>

            {/* BENEFICIOS */}
            <section className="pt-20 pb-10 bg-[#EDF3FF]">
                <h3 className="text-4xl font-bold text-center mb-12">
                    ¿Por qué usar un chatbot?
                </h3>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">

                    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                        <FaClock className="text-5xl mx-auto text-[#2F5BEA] mb-4" />
                        <h4 className="text-xl font-semibold mb-2">Atención 24/7</h4>
                        <p>Responde a tus clientes en cualquier momento, sin descanso.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                        <FaRobot className="text-5xl mx-auto text-[#2F5BEA] mb-4" />
                        <h4 className="text-xl font-semibold mb-2">Automatización</h4>
                        <p>Reduce costos y automatiza procesos repetitivos.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                        <FaChartLine className="text-5xl mx-auto text-[#2F5BEA] mb-4" />
                        <h4 className="text-xl font-semibold mb-2">Más ventas</h4>
                        <p>Convierte conversaciones en oportunidades de venta.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                        <FaWhatsapp className="text-5xl mx-auto text-[#2F5BEA] mb-4" />
                        <h4 className="text-xl font-semibold mb-2">WhatsApp integrado</h4>
                        <p>Conecta directamente con la plataforma más usada por tus clientes.</p>
                    </div>

                </div>
            </section>

            {/* FUNCIONALIDADES */}
            <section className="pb-20 pt-10 bg-[#EDF3FF]">
                <h3 className="text-4xl font-bold text-center mb-4">
                    ¿Qué puede hacer tu chatbot?
                </h3>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Un chatbot bien configurado no solo responde mensajes, trabaja por ti las 24 horas.
                </p>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

                    <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md">
                        <FaWhatsapp className="text-4xl text-[#2F5BEA]" />
                        <div>
                            <h4 className="text-xl font-semibold mb-2">Responder automáticamente</h4>
                            <p className="text-gray-600">
                                Atiende preguntas frecuentes sin intervención humana.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md">
                        <FaRobot className="text-4xl text-[#2F5BEA]" />
                        <div>
                            <h4 className="text-xl font-semibold mb-2">Tomar pedidos y reservas</h4>
                            <p className="text-gray-600">
                                Permite pedidos y reservas rápidas desde el chat.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md">
                        <FaChartLine className="text-4xl text-[#2F5BEA]" />
                        <div>
                            <h4 className="text-xl font-semibold mb-2">Aumentar conversiones</h4>
                            <p className="text-gray-600">
                                Guía al cliente hasta cerrar la venta.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md">
                        <FaUsers className="text-4xl text-[#2F5BEA]" />
                        <div>
                            <h4 className="text-xl font-semibold mb-2">Escala tu negocio</h4>
                            <p className="text-gray-600">
                                Atiende cientos de clientes al mismo tiempo.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* FINAL */}
            <section
                className="py-24 px-6 text-white text-center bg-cover bg-center relative"
                style={{ backgroundImage: `url(${final})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>

                {/* Contenido */}
                <div className="relative max-w-3xl mx-auto">
                    <h3 className="text-4xl font-bold mb-6">
                        Lleva tu negocio al siguiente nivel
                    </h3>
                    <p className="text-xl mb-8">
                        Implementa un chatbot profesional y empieza a vender automáticamente.
                    </p>
                    <a
                        href="https://wa.me/51998114144?text=Hola%2C%20deseo%20implementar%20un%20chatbot%20para%20mi%20negocio.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%2C%20por%20favor."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform inline-block"
                    >
                        Hablar por WhatsApp
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-[#0B1220] via-[#0F1B3D] to-[#0B1220] border-t border-white/10 py-6 px-6 text-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* Izquierda */}
                    <p className="text-sm text-center md:text-left text-white/70">
                        © {new Date().getFullYear()} Cesar Studio Web — Todos los derechos reservados.
                    </p>

                    {/* Derecha */}
                    <div className="flex space-x-6 text-2xl">
                        <a
                            href="https://wa.me/51998114144"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:scale-110 transition-transform"
                        >
                            <FaWhatsapp />
                        </a>

                        <a
                            href="https://www.instagram.com/c.s.w.oficial/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-400 hover:scale-110 transition-transform"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://www.tiktok.com/@c.s.w.oficial"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:scale-110 transition-transform"
                        >
                            <FaTiktok />
                        </a>

                        <a
                            href="https://www.facebook.com/c.s.w.oficial"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:scale-110 transition-transform"
                        >
                            <FaFacebook />
                        </a>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default App
