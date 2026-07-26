import { html } from "hono/html"
import { HtmlEscapedString } from "hono/utils/html"

interface SiteData {
	title: string
	description: string
	image: string
	children?: any
}
export const Layout = (
	title: string,
	description: string,
	children?: HtmlEscapedString | Promise<HtmlEscapedString>
) => html`
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>${title}</title>
    <meta name="description" content="${description}">
	<link href="./output.css" rel="stylesheet">
	<script src="htmx.min.js"></script>
	<style>
		
	</style>
</head>
<body>
  ${children}
</body>
</html>
`

export const Home = html`
	<nav class="navbar bg-base-200 sticky top-0 z-50 shadow-sm border-b border-base-300">
		<div class="navbar-start">
			<a href="/" class="btn btn-ghost text-xl font-bold">GlobaLog</a>
		</div>
		<div class="navbar-end">
			<div class="hidden md:flex gap-6 mr-4">
				<a href="#inicio" class="link link-hover text-sm">Inicio</a>
				<a href="#servicios" class="link link-hover text-sm">Servicios</a>
				<a href="#flota" class="link link-hover text-sm">Flota</a>
				<a href="#nosotros" class="link link-hover text-sm">Nosotros</a>
				<a href="#contacto" class="link link-hover text-sm">Contacto</a>
			</div>
			<button class="btn btn-primary btn-sm"onclick="document.getElementById('contacto').scrollIntoView({behavior:'smooth'})">Solicitar cotización</button>
		</div>
	</nav>

	<section id="inicio" class="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center">
		<div class="max-w-3xl mx-auto">
			<h1 class="text-5xl font-bold mb-4">Somos GlobaLog</h1>
			<p class="text-lg mb-8 opacity-90">Soluciones de transporte y distribución confiables. Entregas rápidas, precios competitivos, atención personalizada.</p>
			<button class="btn btn-lg bg-white text-blue-600 hover:bg-gray-100" onclick="document.getElementById('contacto').scrollIntoView({behavior:'smooth'})">Contactá con nosotros</button>
		</div>
	</section>

	<section id="servicios" class="py-16 px-4 bg-base-100">
		<div class="max-w-5xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12">Nuestros servicios</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div class="card bg-base-200 shadow-md hover:shadow-lg transition">
					<div class="card-body text-center">
						<div class="text-4xl mb-4"><i class="ti ti-truck text-blue-600"></i></div>
						<h3 class="card-title justify-center text-lg">Transporte</h3>
						<p class="text-sm">Distribución local y regional con flota moderna.</p>
					</div>
				</div>
				<div class="card bg-base-200 shadow-md hover:shadow-lg transition">
					<div class="card-body text-center">
						<div class="text-4xl mb-4"><i class="ti ti-package text-blue-600"></i></div>
						<h3 class="card-title justify-center text-lg">Almacenamiento</h3>
						<p class="text-sm">Depósitos seguros y operativos en CABA.</p>
					</div>
				</div>
				<div class="card bg-base-200 shadow-md hover:shadow-lg transition">
					<div class="card-body text-center">
						<div class="text-4xl mb-4"><i class="ti ti-clock text-blue-600"></i></div>
						<h3 class="card-title justify-center text-lg">Entrega urgente</h3>
						<p class="text-sm">Mismo día en zona metropolitana.</p>
					</div>
				</div>
				<div class="card bg-base-200 shadow-md hover:shadow-lg transition">
					<div class="card-body text-center">
						<div class="text-4xl mb-4"><i class="ti ti-file-text text-blue-600"></i></div>
						<h3 class="card-title justify-center text-lg">Asesoramiento</h3>
						<p class="text-sm">Soluciones personalizadas para tu negocio.</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="flota" class="py-16 px-4 bg-base-200">
		<div class="max-w-5xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12">Nuestra flota</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div class="card bg-base-100 shadow-md overflow-hidden hover:shadow-lg transition">
					<figure class="h-48 bg-gradient-to-br from-blue-100 to-blue-50">
						<img src="images/warehouse.jpg" alt="Almacén de carga" class="w-full h-full object-cover">
					</figure>
					<div class="card-body">
						<h3 class="card-title text-base">Camiones de carga</h3>
						<p class="text-sm">5 a 15 toneladas. Ideal para distribución general.</p>
					</div>
				</div>
				<div class="card bg-base-100 shadow-md overflow-hidden hover:shadow-lg transition">
					<figure class="h-48 bg-gradient-to-br from-blue-100 to-blue-50">
						<img src="images/packages.jpg" alt="Paquetes apilados" class="w-full h-full object-cover">
					</figure>
					<div class="card-body">
						<h3 class="card-title text-base">Furgones</h3>
						<p class="text-sm">Entregas de último kilómetro. Ágil y económico.</p>
					</div>
				</div>
				<div class="card bg-base-100 shadow-md overflow-hidden hover:shadow-lg transition">
					<figure class="h-48 bg-gradient-to-br from-blue-100 to-blue-50">
						<img src="images/van-motion.jpg" alt="Furgón en movimiento" class="w-full h-full object-cover">
					</figure>
					<div class="card-body">
						<h3 class="card-title text-base">Entregas express</h3>
						<p class="text-sm">Documentos y paquetes pequeños. Urgentes.</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="nosotros" class="py-16 px-4 bg-base-100">
		<div class="max-w-5xl mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				<div>
					<h2 class="text-4xl font-bold mb-6">Sobre nosotros</h2>
					<p class="text-base mb-6 leading-relaxed">Desde hace 15 años operamos en la logística porteña. Somos especialistas en soluciones ágiles y confiables para empresas de todos los tamaños. Nuestro compromiso es entregar a tiempo, con seguridad y profesionalismo.</p>
					<div class="grid grid-cols-2 gap-6">
						<div>
							<div class="text-3xl font-bold text-blue-600">200+</div>
							<p class="text-sm text-gray-600">Entregas diarias</p>
						</div>
						<div>
							<div class="text-3xl font-bold text-blue-600">500+</div>
							<p class="text-sm text-gray-600">Clientes activos</p>
						</div>
						<div>
							<div class="text-3xl font-bold text-blue-600">15</div>
							<p class="text-sm text-gray-600">Años en el mercado</p>
						</div>
						<div>
							<div class="text-3xl font-bold text-blue-600">24/7</div>
							<p class="text-sm text-gray-600">Atención disponible</p>
						</div>
					</div>
				</div>
				<figure class="rounded-lg overflow-hidden shadow-lg">
					<img src="images/person-package.jpg" alt="Profesional con paquete" class="w-full h-auto">
				</figure>
			</div>
		</div>
	</section>

	<section id="contacto" class="py-16 px-4 bg-base-200">
		<div class="max-w-2xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12">Contacto</h2>
			<div class="card bg-base-100 shadow-xl">
				<div class="card-body">
					<form id="contact-form" class="space-y-4">
						<div class="form-control">
							<label class="label">
								<span class="label-text font-semibold">Nombre</span>
							</label>
							<input type="text" name="nombre" placeholder="Tu nombre" class="input input-bordered"
								required />
						</div>
						<div class="form-control">
							<label class="label">
								<span class="label-text font-semibold">Email</span>
							</label>
							<input type="email" name="email" placeholder="tu@email.com" class="input input-bordered"
								required />
						</div>
						<div class="form-control">
							<label class="label">
								<span class="label-text font-semibold">Teléfono</span>
							</label>
							<input type="tel" name="telefono" placeholder="+54 11 xxxx-xxxx"
								class="input input-bordered" />
						</div>
						<div class="form-control">
							<label class="label">
								<span class="label-text font-semibold">Mensaje</span>
							</label>
							<textarea name="mensaje" placeholder="Cuéntanos tu necesidad..."
								class="textarea textarea-bordered h-24"></textarea>
						</div>
						<button type="submit" class="btn btn-primary w-full">Enviar consulta</button>
					</form>
					<div id="form-response"></div>
					<div class="divider mt-8">O contactá directamente</div>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
						<div class="flex items-start gap-3">
							<i class="ti ti-phone text-blue-600 mt-0.5"></i>
							<div>
								<p class="font-semibold">+54 11 xxxx-xxxx</p>
								<p class="text-gray-600">Lunes a viernes, 8-18hs</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<i class="ti ti-mail text-blue-600 mt-0.5"></i>
							<div>
								<p class="font-semibold">info@logisticaba.ar</p>
								<p class="text-gray-600">Respuesta en 24hs</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<footer class="bg-base-200 border-t border-base-300 py-8 px-4">
		<div class="max-w-5xl mx-auto text-center text-sm text-gray-600">
			<p>© 2024 GlobaLog. Todos los derechos reservados.</p>
		</div>
	</footer>
    `
