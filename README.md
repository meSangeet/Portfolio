# Sangeet Sharma - Personal Portfolio

A modern, scalable full-stack portfolio website built with Next.js 14, TypeScript, Prisma, and PostgreSQL. Features a blog system, contact form, project showcase, and is ready for future expansion with authentication, payments, and more.

## 🚀 Features

### Current Features
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first, works on all devices
- **Dynamic Pages**: Home, About, Projects, Blog, Contact
- **Contact System**: Form submissions saved to database
- **Blog System**: Markdown support with tags and search
- **Project Showcase**: Filterable portfolio with categories
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards
- **Performance**: Optimized images, lazy loading, code splitting
- **Animations**: Smooth transitions with Framer Motion

### Future-Ready For
- **Authentication**: NextAuth.js ready
- **Payment Integration**: Stripe configuration ready
- **Admin Dashboard**: Content management system
- **Newsletter**: Email subscription system
- **Analytics**: Google Analytics integration
- **E-commerce**: Sell digital products/services

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL (via Supabase)
- **ORM**: Prisma
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/meSangeet/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

4. **Configure your database**

Sign up for [Supabase](https://supabase.com) and create a new project. Get your database URL and add it to `.env`:
```env
DATABASE_URL="postgresql://[user]:[password]@[host]:[port]/[database]?schema=public"
```

5. **Generate Prisma client**
```bash
npx prisma generate
```

6. **Run database migrations**
```bash
npx prisma migrate dev --name init
```

7. **Start the development server**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── (marketing)/       # Public pages
│   ├── api/               # API routes
│   ├── about/            # About page
│   ├── blog/             # Blog listing
│   ├── contact/          # Contact form
│   ├── projects/         # Projects showcase
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── navigation.tsx   # Site navigation
│   └── footer.tsx       # Site footer
├── lib/                 # Utility functions
│   ├── db.ts           # Database client
│   └── utils.ts        # Helper functions
├── prisma/
│   └── schema.prisma   # Database schema
└── public/             # Static assets
```

## 🚀 Deployment to Vercel

1. **Push your code to GitHub**
```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

2. **Deploy to Vercel**
- Go to [Vercel](https://vercel.com)
- Import your GitHub repository
- Configure environment variables:
  - Add your `DATABASE_URL`
  - Add any other env variables from `.env.example`
- Deploy!

3. **Configure Domain (sangeet.co)**
- In Vercel project settings, go to "Domains"
- Add `sangeet.co`
- Configure your domain DNS:
  - Add an A record pointing to `76.76.21.21`
  - Add a CNAME record for `www` pointing to `cname.vercel-dns.com`

## 🗄️ Database Management

### View your database
```bash
npx prisma studio
```

### Create a new migration
```bash
npx prisma migrate dev --name your-migration-name
```

### Push schema changes (development)
```bash
npx prisma db push
```

### Deploy migrations (production)
```bash
npx prisma migrate deploy
```

## 📝 Content Management

### Adding Projects
Edit `app/projects/page.tsx` and add your projects to the `projects` array. In the future, this will be managed through an admin dashboard.

### Writing Blog Posts
Edit `app/blog/page.tsx` and add posts to the `blogPosts` array. Markdown content will be rendered on individual post pages.

### Updating Personal Information
- Edit `app/about/page.tsx` for experience, education, and skills
- Edit `app/page.tsx` for homepage content
- Edit `components/navigation.tsx` and `components/footer.tsx` for social links

## 🔧 Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Required
DATABASE_URL="your-database-url"

# Optional (for future features)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-a-secret"
STRIPE_SECRET_KEY=""
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=""
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎨 Customization

### Colors
Edit the CSS variables in `app/globals.css` to change the color scheme.

### Fonts
Update the font import in `app/layout.tsx`.

### Content
All content is currently in the component files. Future versions will use a CMS.

## 🐛 Troubleshooting

### Database connection issues
- Verify your `DATABASE_URL` is correct
- Check if your database is running
- Run `npx prisma generate` after schema changes

### Build errors
```bash
npm run build
```
Check for TypeScript errors and fix them.

### Development server issues
```bash
rm -rf .next node_modules
npm install
npm run dev
```

## 📈 Future Enhancements

- [ ] Admin dashboard for content management
- [ ] User authentication system
- [ ] Comment system for blog posts
- [ ] Newsletter subscription
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Analytics dashboard
- [ ] E-commerce functionality

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contact

- Email: contact@sangeet.co
- GitHub: [@meSangeet](https://github.com/meSangeet)
- LinkedIn: [Sangeet Sharma](https://linkedin.com/in/sangeet-sharma)
- Twitter: [@me_sangeet](https://twitter.com/me_sangeet)

---

Built with ❤️ by Sangeet Sharma
