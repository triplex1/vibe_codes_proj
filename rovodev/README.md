# RovoDev - AI-Powered Development Assistant

> 🚀 Transform high-level ideas into comprehensive Linear tickets with intelligent agent collaboration

RovoDev is a sophisticated development assistant that leverages specialized AI agents to automatically generate detailed project specifications, technical documentation, and implementation plans from simple descriptions.

## 🎯 Core Philosophy

**Pragmatic Startup Approach**:
- 🚀 **Ship Fast**: Focus on working solutions over perfect implementations
- 📊 **80/20 Rule**: Deliver 80% of the value with 20% of the effort
- 🎯 **MVP First**: Define the simplest thing that could possibly work

## 🏗️ Project Structure

```
rovodev/
├── agents/          # AI agent configurations and specifications
├── commands/        # Command documentation and templates
├── # PortfolioHub - Professional Portfolio Builder

Create stunning professional portfolios in minutes without coding. Perfect for designers, developers, photographers, and creative professionals.

## ✨ Features

- **🎨 Beautiful Templates** - Choose from professionally designed templates
- **🔧 Drag & Drop Builder** - Intuitive editor with live preview
- **📱 Mobile Optimized** - Responsive design for all devices
- **🌐 Custom URLs** - yourname.portfoliohub.com or custom domain
- **🖼️ Media Management** - Upload and optimize images automatically
- **🔍 SEO Ready** - Optimized for search engines and social sharing
- **🔐 Secure Authentication** - JWT-based auth with bcrypt password hashing
- **⚡ Fast Performance** - Built with Next.js 14 and optimized for speed

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfoliohub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/portfoliohub"
   NEXTAUTH_SECRET="your-secure-secret-key"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
portfoliohub/
├── app/                    # Next.js App Router
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # User dashboard
│   ├── api/              # API routes
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   └── dashboard/       # Dashboard-specific components
├── lib/                 # Utility functions
│   ├── auth.ts         # Authentication helpers
│   ├── db.ts           # Database connection
│   └── utils.ts        # General utilities
├── prisma/             # Database schema
└── public/             # Static assets
```

## 🔧 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: JWT tokens with bcrypt
- **Deployment**: Vercel (recommended)

## 📱 Core Features Implementation

### Authentication System
- ✅ User registration with email/password
- ✅ Secure login with JWT tokens
- ✅ Password validation and hashing
- ✅ User session management
- ✅ Logout functionality

### Dashboard
- ✅ User dashboard with portfolio overview
- ✅ Portfolio statistics and metrics
- ✅ Quick action buttons
- ✅ Responsive navigation

### Portfolio Management
- 🔄 Portfolio creation wizard (in development)
- 🔄 Template selection system
- 🔄 Project management interface
- 🔄 Live preview functionality
- 🔄 Publishing system

## 🎯 Roadmap

### Phase 1: Foundation (Completed)
- [x] User authentication system
- [x] Basic UI components
- [x] Dashboard layout
- [x] Database schema

### Phase 2: Portfolio Builder (In Progress)
- [ ] Template system (Creative, Professional, Developer)
- [ ] Project creation and management
- [ ] Drag-and-drop editor
- [ ] Image upload and optimization
- [ ] Live preview functionality

### Phase 3: Publishing & Sharing
- [ ] Portfolio URL generation
- [ ] SEO optimization
- [ ] Social media sharing
- [ ] Custom domain support

### Phase 4: Advanced Features
- [ ] Portfolio analytics
- [ ] Advanced customization options
- [ ] Team collaboration
- [ ] Premium templates

## 📄 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Portfolio Management (Coming Soon)
- `GET /api/portfolios` - Get user portfolios
- `POST /api/portfolios` - Create new portfolio
- `PUT /api/portfolios/:id` - Update portfolio
- `DELETE /api/portfolios/:id` - Delete portfolio

## 🧪 Testing

Run the development server and test the following flows:

1. **Registration Flow**
   - Navigate to `/auth/signup`
   - Create account with valid email/password
   - Verify redirect to dashboard

2. **Login Flow**
   - Navigate to `/auth/login`
   - Login with created credentials
   - Verify dashboard access

3. **Dashboard**
   - Verify empty state for new users
   - Check responsive layout
   - Test logout functionality

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Set environment variables in Vercel dashboard**
   - `DATABASE_URL`
   - `NEXTAUTH_SECRET`

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Database Setup (Production)

Recommended providers:
- **Railway** - Easy PostgreSQL setup
- **Supabase** - PostgreSQL with additional features
- **PlanetScale** - MySQL alternative

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

- 📧 Email: support@portfoliohub.com
- 💬 Discord: [Join our community]
- 📖 Documentation: [docs.portfoliohub.com]

---

**Built with ❤️ by the PortfolioHub team**        # This file
└── ...
```

## 🤖 Core Agent Team

RovoDev operates with a **Core Trio** of specialized agents that work in parallel to ensure comprehensive project analysis:

### 1. Product Manager Agent
- **Focus**: Defines the "Why" and "What"
- **Responsibilities**: User stories, business context, acceptance criteria
- **Outcome**: Clear business value and user-centric requirements

### 2. UX Designer Agent 👨‍🎨
- **Focus**: Defines the "How" for the user
- **Responsibilities**: User flow, states, accessibility, design consistency
- **Outcome**: Simple, accessible, and user-friendly interfaces
- **Location**: `agents/ux-designer.md`

### 3. Senior Software Engineer Agent
- **Focus**: Defines the "How" for the system
- **Responsibilities**: Technical approach, risks, dependencies, effort estimation
- **Outcome**: Scalable and maintainable technical solutions

## 🎫 Featured Commands

### linear-ticket

The flagship command that transforms high-level descriptions into comprehensive Linear tickets.

**Usage:**
```bash
linear-ticket <high-level description of work needed>
```

**Key Features:**
- ✨ **Smart Complexity Analysis**: Automatically determines if agents are needed
- 🔄 **Parallel Agent Execution**: Core Trio works simultaneously for efficiency
- 📋 **Comprehensive Ticket Generation**: Structured output with all necessary details
- ✂️ **Smart Ticket Scoping**: Auto-splits large work into manageable chunks (≤2 days each)

**Complexity Levels:**
- **LIGHT** (No agents): Simple fixes, typos, minor changes (<2 hours)
- **STANDARD** (Core Trio): New features, bug fixes, standard development work
- **DEEP** (Core Trio + Extended Analysis): Complex or vague requirements needing investigation

**Override Flags:**
- `--light`: Force minimal research (no agents)
- `--standard` / `--deep`: Force investigation depth
- `--single` / `--multi`: Control ticket splitting behavior

## 🛠️ Command Documentation

Detailed command specifications and usage examples are available in:
- `commands/command.md` - Complete command reference
- `commands/linear-ticket.txt` - Linear ticket command specifications

## 🚀 Quick Start

1. **Setup**: Ensure you have access to the agent configurations
2. **Basic Usage**: Run `linear-ticket "Create user authentication system"`
3. **Review Output**: Generated tickets will include:
   - Business context and purpose
   - Expected behavior/outcome
   - Research summary from all agents
   - Acceptance criteria
   - Dependencies and constraints
   - Implementation notes

## 📋 Ticket Generation Workflow

```mermaid
graph LR
    A[High-level Input] --> B{Complexity Analysis}
    B -->|LIGHT| C[Direct Ticket Creation]
    B -->|STANDARD/DEEP| D[Core Trio Dispatch]
    D --> E[Product Manager]
    D --> F[UX Designer]
    D --> G[Senior Engineer]
    E --> H[Synthesize Findings]
    F --> H
    G --> H
    H --> I{Effort > 2 days?}
    I -->|No| J[Single Ticket]
    I -->|Yes| K[Split into Multiple Tickets]
    J --> L[Linear Ticket URLs]
    K --> L
```

## 🎨 Agent Specifications

### UX Designer Agent Features
- **Product-minded approach**: Balances user needs with business goals
- **Accessibility focus**: Ensures inclusive design practices
- **Technical feasibility**: Considers implementation constraints
- **Rapid prototyping**: Emphasizes quick iteration and validation

## 🔄 Development Workflow

1. **Input**: Provide high-level feature description
2. **Analysis**: System determines complexity and required agents
3. **Parallel Execution**: Agents work simultaneously for efficiency
4. **Synthesis**: Findings combined into structured ticket(s)
5. **Output**: Linear ticket URLs with comprehensive specifications

## 📚 Documentation

- **Command Reference**: `commands/command.md`
- **Agent Configs**: `agents/` directory
- **Templates**: Available in command documentation

## 🤝 Contributing

RovoDev follows the pragmatic startup philosophy:
- Focus on working solutions first
- Iterate based on real user feedback
- Maintain high code quality without over-engineering
- Document decisions and trade-offs clearly

## 🏷️ Version & Updates

This project is actively maintained as part of the Vibe Codes Project ecosystem. Check commit history for latest updates and features.

---

**Built with ❤️ for efficient, intelligent development workflows**

*Part of the [Vibe Codes Project](https://github.com/triplex1/vibe_codes_proj) ecosystem*
