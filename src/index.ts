import { Hono, TypedResponse } from 'hono'
import { html } from 'hono/html'
import { HtmlEscapedString } from 'hono/utils/html'
import { Home, Layout } from './components/Layout'

interface SiteData {
}

declare module 'hono' {
	interface ContextRenderer {
		(
			title: string,
			description: string,
			children?: HtmlEscapedString | Promise<HtmlEscapedString>,
		): TypedResponse | Promise<TypedResponse>
	}
}

const app = new Hono()
app.use('*', async (c, next) => {
	c.setRenderer((title, description, children) => {
		return c.html(Layout(title, description, children))
	})
	await next()
})

app.get('/', (c) => {
	return c.render('', '', Home)
})

export default app
